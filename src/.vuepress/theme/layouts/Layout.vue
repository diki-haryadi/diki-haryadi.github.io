<template>
  <div>
    <slot name="header"></slot>
    <slot></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  mounted() {
    // redirect blog.ipfs.io → dikiharyadi.com (incl. gateways)
    // https://github.com/ipfs/ipfs-blog/issues/417
    const { href } = window.location
    if (href.includes('blog.ipfs.io')) {
      window.location.replace(href.replace('blog.ipfs.io', 'dikiharyadi.com'));
    }
    if (href.includes('blog-ipfs-io')) { // subdomain gws
      window.location.replace(href.replace('blog-ipfs-io', 'blog-ipfs-tech'));
    }
  }
}
</script>
