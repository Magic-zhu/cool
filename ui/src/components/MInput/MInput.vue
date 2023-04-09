<template>
  <div class="minput">
    <input
      :type="type"
      class="minput-body"
      :style="styles"
      @input="onInput"
      @change="onChange"
      v-model="inputValue"
      :disabled="disabled"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, reactive, ref, watch } from "vue"
export default defineComponent({
  name: "MInput",
  props: {
    width: {
      type: String,
    },
    height: {
      type: String,
    },
    value: {
      type: [String, Boolean, Number],
    },
    disabled: {
      type: Boolean,
    },
    type: {
      type: String,
      default: "text",
    },
  },
  setup(props, { emit }) {
    props = reactive(props)
    let inputValue: any
    if (props.type === "text") {
      inputValue = ref(props.value)
    } else {
      inputValue = ref(props.value)
    }
    watch(
      () => props.value,
      (newVal: any) => {
        if (newVal === undefined) return
        inputValue.value = newVal.toString()
      }
    )
    return {
      inputType: props.type,
      styles: computed(() => ({
        width: props.width,
        height: props.height,
      })),
      inputValue,
      onInput() {
        emit("onInput", inputValue.value)
      },
      onChange() {
        emit("onChange", inputValue.value)
      },
    }
  },
})
</script>
<style lang="less" scoped>
@import "./MInput.less";
</style>
