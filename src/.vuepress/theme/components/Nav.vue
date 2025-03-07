<template>
  <nav
    ref="nav"
    class="fixed top-0 inset-x-0 transition duration-300 ease-out transform z-50"
    :class="[
      displayMode,
      {
        '-translate-y-full': navVisibility.navSticky,
        navVisible: navVisibility.navVisible,
        navSticky: navVisibility.navSticky && !mobileNavActive,
        mobileNavOpen: mobileNavActive,
      },
    ]"
  >
    <div class="grid-margins">
      <div class="flex justify-between items-center h-20">
        <a
          class="hover:opacity-75 transition transition-opacity duration-300 ease-in-out mobile-list-item"
          href="https://dikiharyadi.com/"
        >
          <h3 class="text-2xl">Diki Haryadi</h3>
        </a>
        <ul
          class="nav__link-list hidden md:flex justify-between w-full max-w-lg ml-8"
        >
          <li
            v-for="page in $themeLocaleConfig.headerLinks"
            :key="page.text"
            class="nav__link-item first:m-0 font-semibold"
          >
            <Link
              class="nav__link font-display font-medium"
              :item="page"
              :on-click="onClickNavLink"
            />
          </li>
        </ul>
        <button
          aria-label="Toggle Mobile Menu"
          class="sm:visible md:hidden mobile-list-item"
          @click="toggleMobileMenu"
        >
          <div class="hamburger-icon w-8 h-8"></div>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import throttle from 'lodash/throttle'
import { mapState } from 'vuex'
import SVGIcon from '@theme/components/base/SVGIcon'
import Link from '@theme/components/base/Link'

import countly from '../util/countly'

export default {
  name: 'Nav',
  components: {
    SVGIcon,
    Link,
  },
  props: {
    darkMode: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      navVisibility: {
        navVisible: false,
        navSticky: false,
      },
    }
  },
  computed: {
    ...mapState('appState', ['mobileNavActive', 'navHeight']),
    displayMode() {
      return 'text-white'
    },
  },
  mounted() {
    this.$store.commit(
      'appState/setNavHeight',
      this.$refs.nav.getBoundingClientRect().height
    )

    this.throttledFunction = throttle(this.handleScroll, 100)
    window.addEventListener('scroll', this.throttledFunction)
  },
  destroyed() {
    window.removeEventListener('scroll', this.throttledFunction)
  },
  methods: {
    handleScroll() {
      // responsive force: lower on mobile higher on desktop
      const SCROLL_FORCE = ['sm', 'md'].includes(this.$mq) ? 20 : 40

      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop

      // ignore negative calculations on mobile
      if (currentScrollPosition < 0) {
        return
      }

      // true if scrolling up
      this.showNav = currentScrollPosition < this.lastScrollPosition

      const isOffset = currentScrollPosition > this.navHeight / 2

      const isScrollThresholdMet =
        Math.abs(currentScrollPosition - this.lastScrollPosition) > SCROLL_FORCE

      const currentVisiblity = this.navVisibility.navVisible

      this.navVisibility = {
        ...this.navVisibility,
        ...{
          navVisible: isOffset
            ? isScrollThresholdMet
              ? this.showNav
              : currentVisiblity
            : false,
          navSticky: isOffset,
        },
      }

      this.lastScrollPosition = currentScrollPosition
    },
    toggleMobileMenu() {
      this.$store.commit('appState/toggleMobileNav', !this.mobileNavActive)
    },
    onClickNavLink(item) {
      countly.trackEvent(countly.events.LINK_CLICK_NAV, {
        view: this.$route.path,
        href: item.link,
        text: item.text,
      })
    },
  },
}
</script>

<style lang="postcss" scoped>
.navVisible {
  @apply translate-y-0;
}
.navSticky {
  @apply bg-gradient-6;
}

.mobileNavOpen {
  @apply bg-transparent;
  @apply text-white;
}

.hamburger-icon {
  @apply relative;
}
.hamburger-icon:before,
.hamburger-icon:after {
  content: '';
  background-color: currentColor;
  height: 2px;
  @apply absolute;
  @apply w-full;
  @apply left-0;
  @apply transition-transform;
  @apply duration-300;
  @apply ease-in-out;
  @apply origin-center;
  @apply transform;
}

.hamburger-icon:before {
  top: 10px;
}
.hamburger-icon:after {
  top: 20px;
}

.mobileNavOpen .hamburger-icon:before,
.mobileNavOpen .hamburger-icon:after {
  top: 15px;
}

.mobileNavOpen .hamburger-icon:before {
  @apply rotate-45;
}

.mobileNavOpen .hamburger-icon:after {
  @apply -rotate-45;
}

.nav__link {
  position: relative;
}

.nav__link:after {
  content: '';
  height: 1px;
  bottom: -7px;
  background-color: currentColor;
  @apply absolute;
  @apply w-full;
  @apply left-0;
  @apply opacity-0;
  @apply transition-opacity;
  @apply duration-200;
}

.nav__link:hover:after {
  @apply opacity-100;
}

.nav__link.router-link-active:after {
  @apply opacity-100;
}
</style>
