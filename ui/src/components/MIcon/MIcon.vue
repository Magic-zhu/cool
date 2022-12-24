<template>
  <div class="MIcon" :style="styles">
    <svg
      t="1670910504657"
      v-if="type === 'start'"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="37597"
      width="200"
      height="200"
    >
      <path
        d="M265.6 227.48v569.04c0 27.096 29.333 44.032 52.8 30.483l492.8-284.519c23.467-13.548 23.467-47.42 0-60.968l-492.8-284.52c-23.467-13.548-52.8 3.388-52.8 30.485z"
        :fill="color"
        p-id="37598"
      ></path>
    </svg>
    <svg
      t="1671871354259"
      v-if="type === 'pause'"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="40338"
      width="200"
      height="200"
    >
      <path
        d="M294.144 185.344h40.96c33.932 0 61.44 27.508 61.44 61.44v530.432c0 33.932-27.508 61.44-61.44 61.44h-40.96c-33.932 0-61.44-27.508-61.44-61.44V246.784c0-33.932 27.508-61.44 61.44-61.44z m394.752 0h40.96c33.932 0 61.44 27.508 61.44 61.44v530.432c0 33.932-27.508 61.44-61.44 61.44h-40.96c-33.932 0-61.44-27.508-61.44-61.44V246.784c0-33.932 27.508-61.44 61.44-61.44z"
        :fill="color"
        p-id="40339"
      ></path>
    </svg>
    <svg
      t="1671885750907"
      v-if="type === 'prompt'"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="40506"
      width="200"
      height="200"
    >
      <path
        d="M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64z m0 76c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372z m24 308c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8z m-24-160c26.51 0 48 21.49 48 48s-21.49 48-48 48-48-21.49-48-48 21.49-48 48-48z"
        :fill="color"
        p-id="40507"
      ></path>
    </svg>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, reactive } from "vue"
export enum IconType {
  START = "start",
  PAUSE = "pause",
  prompt = "prompt",
}
export default defineComponent({
  props: {
    type: {
      type: String,
      requied: true,
    },
    color: {
      type: String,
      default: "#ffffff",
    },
    width: {
      type: String,
      default: "16px",
    },
    height: {
      type: String,
      default: "16px",
    },
  },
  setup(props) {
    props = reactive(props)
    return {
      styles: computed(() => ({
        width: props.width,
        height: props.height,
      })),
    }
  },
})
</script>
<style lang="less">
@import "./MIcon.less";
</style>
