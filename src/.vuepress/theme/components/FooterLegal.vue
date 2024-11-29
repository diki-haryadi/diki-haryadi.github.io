<template>
  <div class="flex items-center text-sm">
    <span>
      © 2024
      <a
        class="text-blueGreenLight hover:underline"
        href="https://dikiharyadi.com"
        target="_blank"
        @click="onLinkClick"
      >
        Diki Haryadi.</a
      >
      All rights reserved.
    </span>
  </div>
</template>

<script>
import SVGIcon from '@theme/components/base/SVGIcon.vue'

import countly from '../util/countly'

export default {
  name: 'FooterLegal',
  components: { SVGIcon },
  methods: {
    onLinkClick(event, isSvg) {
      const href = isSvg
        ? event.srcElement.parentElement.href
        : event.srcElement.href

      const text = isSvg
        ? event.srcElement.firstChild.textContent
        : event.srcElement.text

      countly.trackEvent(countly.events.LINK_CLICK_FOOTER, {
        view: this.$route.path,
        text: text.trim(),
        href: href,
      })
    },
  },
}
</script>
