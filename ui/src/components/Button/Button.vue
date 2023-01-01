<template>
  <button
    type="button"
    :class="classes"
    @click="onClick"
    :style="style"
    :disabled="disabled"
  >
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
    cool: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      validator: function (value: string) {
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
        [`${props.cool ? "cool" : "xly"}-button`]: true,
        [`${props.cool ? "cool" : "xly"}-button--primary`]: props.primary,
        [`${props.cool ? "cool" : "xly"}-button--success`]: props.success,
        [`${props.cool ? "cool" : "xly"}-button--warning`]: props.warning,
        [`${props.cool ? "cool" : "xly"}-button--danger`]: props.danger,
        [`${props.cool ? "cool" : "xly"}-button--${props.size || "default"}`]:
          true,
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
