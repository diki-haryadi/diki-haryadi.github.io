const { reverse, sortBy } = require('lodash')

// configure this to an absolute url to enable a generated sitemap & blog RSS feeds
const CANONICAL_BASE =
  process.env.CANONICAL_BASE || 'https://blog.dikiharyadi.com'
const IPFS_DEPLOY = process.env.IPFS_DEPLOY === 'true' || false

const themeConfigDefaults = {
  dateFormat: 'DD MMMM YYYY',
  socialLinks: [
    {
      text: 'Github',
      link: 'https://github.com/diki-haryadi',
      icon: 'github-icon',
    },
    {
      text: 'YouTube',
      link: 'https://www.dikiharyadi.com',
      icon: 'youtube-icon',
    },
    {
      text: 'Twitter',
      link: 'http://twitter.com/dikiharyadix',
      icon: 'twitter-icon',
    },
    {
      text: 'LinkedIn',
      link: 'https://www.linkedin.com/in/dikiharyadi/',
      icon: 'linkedin-icon',
    },
  ],
  footerLinks: [{ text: 'Blog & news', link: '/' }],
  footerLegal: '',
  headerLinks: [
    { text: 'About Me', link: '/about-me/' },
    { text: 'Projects', link: '/projects/' },
    { text: 'Games', link: '/games/' },
    { text: 'Blog', link: '/' },
  ],
  mobileNavLinks: [
    { text: 'About Me', link: '/about-me/' },
    { text: 'Projects', link: '/projects/' },
    { text: 'Games', link: '/games/' },
    { text: 'Blog', link: '/' },
  ],
}

module.exports = {
  title: 'Tech Blog, Microservices, Backend Development & more',
  description:
    'Everything you need to know about modern backend technologies and microservices in one place — from in-depth blog posts, technical tutorials, to microservices and backend development.',
  locales: {
    '/': {
      lang: 'EN',
      title: 'Tech Blog, Microservices, Backend Development & more',
      description:
        'Everything you need to know about modern backend technologies and microservices in one place — from in-depth blog posts, technical tutorials, to microservices and backend development.',
    },
    '/id-id/': {
      lang: 'ID',
      title: 'Teknologi Blog, Microservices, Pengembangan Backend & lainnya',
      description:
        'ID - Semua yang perlu Anda ketahui tentang teknologi backend modern dan microservices dalam satu tempat — mulai dari artikel blog mendalam, tutorial teknis, hingga pengembangan microservices dan backend.',
    },
  },
  shouldPrefetch: () => false,
  head: require('./config/head'),
  dest: './dist',
  markdown: {
    extendMarkdown: (md) => {
      md.set({
        breaks: true,
      })
      md.use(require('markdown-it-video'))
      md.use(require('markdown-it-footnote'))
      md.use(require('markdown-it-task-lists'))
      md.use(require('markdown-it-deflist'))
      md.use(require('markdown-it-imsize'))
      md.use(require('markdown-it-image-lazy-loading'))
    },
  },
  themeConfig: {
    domain: CANONICAL_BASE,
    locales: {
      '/': themeConfigDefaults,
      '/id-id/': {
        ...themeConfigDefaults,
        footerLinks: [{ text: 'Blog & news', link: '/id-id/' }],
        headerLinks: [
          { text: 'About Me', link: '/about-me/' },
          { text: 'Projects', link: '/projects/' },
          { text: 'Games', link: '/games/' },
          { text: 'Blog', link: '/id-id' },
        ],
        mobileNavLinks: [
          { text: 'About Me', link: '/about-me/' },
          { text: 'Projects', link: '/projects/' },
          { text: 'Games', link: '/games/' },
          { text: 'Blog', link: '/id-id' },
        ],
      },
    },
  },
  plugins: [
    ['@vuepress/last-updated'],
    [
      'vuepress-plugin-clean-urls',
      {
        normalSuffix: '/',
        indexSuffix: '/',
        notFoundPath: '/dikiharyadi-404.html',
      },
    ],
    [require('./plugins/pageData')],
    [require('./plugins/canonical'), { CANONICAL_BASE }],
    [require('./plugins/vuepress-plugin-trigger-scroll')],
    [
      '@vuepress/blog',
      {
        feed: {
          canonical_base: CANONICAL_BASE,
          sort: (entries) => reverse(sortBy(entries, 'date')),
          feed_options: {},
          feeds: {
            rss2: {
              enable: true,
              file_name: 'index.xml',
            },
            atom1: {
              enable: false,
            },
            json1: {
              enable: false,
            },
          },
        },
        sitemap: {
          hostname: CANONICAL_BASE,
          changefreq: 'weekly',
          exclude: ['/image-crop/', '/dikiharyadi-404.html'],
        },
        directories: [
          {
            id: 'blog',
            dirname: '_blog',
            path: '/',
            itemPermalink: '/:slug',
            layout: 'Blog',
            itemLayout: 'BlogPost',
            frontmatter: {
              title: 'Home',
              description:
                'Tech Blog, Microservices, Backend Development & more',
              sub_description:
                'Everything you need to know about modern backend technologies and microservices in one place — from in-depth blog posts, technical tutorials, to microservices and backend development.',
            },
            pagination: {
              lengthPerPage: Number.MAX_SAFE_INTEGER,
            },
          },
          {
            id: 'blog_id',
            dirname: '_blog_id',
            path: '/id-id/',
            itemPermalink: '/id-id/:slug',
            layout: 'Blog',
            itemLayout: 'BlogPost',
            frontmatter: {
              title: 'Home',
              description:
                'Teknologi Blog, Microservices, Pengembangan Backend & lainnya',
              sub_description:
                'Semua yang perlu Anda ketahui tentang teknologi backend modern dan microservices dalam satu tempat — mulai dari artikel blog mendalam, tutorial teknis, hingga pengembangan microservices dan backend.',
            },
            pagination: {
              lengthPerPage: Number.MAX_SAFE_INTEGER,
            },
          },
        ],
      },
    ],
    [
      'vuepress-plugin-seo',
      {
        siteTitle: (_, $site) => $site.title,
        title: ($page, $site) => $page.title || $site.title,
        description: ($page, $site) =>
          $page.frontmatter.description || $site.description,
        author: ($page) => $page.frontmatter.author,
        tags: ($page) => $page.frontmatter.tags,
        twitterCard: (_) => 'summary_large_image',
        type: ($page) =>
          ['_blog'].some((folder) => $page.regularPath.startsWith('/' + folder))
            ? 'article'
            : 'website',
        url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
        image: ($page, $site) =>
          $page.frontmatter.header_image
            ? ($site.themeConfig.domain || '') + $page.frontmatter.header_image
            : ($site.themeConfig.domain || '') + '/social-card.png',
        publishedAt: ($page) =>
          $page.frontmatter.date &&
          new Date($page.frontmatter.date).toISOString(),
        modifiedAt: ($page) =>
          $page.lastUpdated && new Date($page.lastUpdated).toISOString(),
      },
    ],
    [require('./plugins/vuepress-plugin-og-image')],
    ['vuepress-plugin-robots', { host: CANONICAL_BASE }],
    [
      '@vuepress/html-redirect',
      {
        countdown: 0,
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'callout',
        defaultTitle: '',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'right',
        defaultTitle: '',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'left',
        defaultTitle: '',
      },
    ],
    'vuepress-plugin-chunkload-redirect',
    ['vuepress-plugin-ipfs', IPFS_DEPLOY],
  ],
  extraWatchFiles: ['.vuepress/config/head.js'],
  chainWebpack: (config, isServer) => {
    config.module.rules.delete('svg')

    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap((options) => {
        options.limit = -1
        return options
      })

    // prettier-ignore
    config.module
      .rule('svg')
        .test(/\.(svg)(\?.*)?$/)
          .oneOf('svg-sprite')
            .include
              .add(/svg-icon/)
            .end()
            .use('svg-sprite-loader')
              .loader('svg-sprite-loader')
              .end()
            .use('svgo-loader')
              .loader('svgo-loader')
              .options({
                removeDimensions: true,
                removeAttrs: {
                  attrs: '*:(stroke|fill):((?!^none$).)*',
                },
              })
              .end()
            .end()
          .oneOf('svg-file')
            .use('file-loader')
              .loader('file-loader')
              .options({
                name: `assets/img/[name].[hash:8].[ext]`,
              })
            .end()
          .end()
  },
  additionalPages: [
    {
      path: '/image-crop/',
      frontmatter: {
        layout: 'ImageCrop',
      },
    },
  ],
}
