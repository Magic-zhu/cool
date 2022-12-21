<template>
  <button type="button" :class="classes" @click="onClick" :style="style">
    {{ label }}
  </button>
</template>

<script lang="ts">
import { reactive, computed } from "vue"
export default {
  name: "my-button",

  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    warning: {
      type: Boolean,
      default: false,
    },
    success: {
      type: Boolean,
      default: false,
    },
    danger: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      validator: function (value:string) {
        return ["small", "default", "large"].indexOf(value) !== -1
      },
    },
    backgroundColor: {
      type: String,
    },
  },

  emits: ["click"],

  setup(props, { emit }) {
    props = reactive(props)
    return {
      classes: computed(() => ({
        "xly-button": true,
        "xly-button--primary": props.primary,
        "xly-button--success": props.success,
        "xly-button--warning": props.warning,
        "xly-button--danger": props.danger,
        "xly-button--disabled": props.disabled,
        [`xly-button--${props.size || "default"}`]: true,
      })),
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
      })),
      onClick() {
        emit("click")
      },
    }
  },
}
</script>
<style lang="less">
@import "./button.less";
</style>
