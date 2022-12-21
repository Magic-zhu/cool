<template>
  <div class="MSelect">
    <select
      name=""
      :disabled="disabled"
      class="MSelect-body"
      :style="styles"
      @change="onChange"
      v-model="inputValue"
    >
      <option
        :value="item.value"
        :disabled="item.disabled"
        v-for="(item, index) in (options as any)"
        :key="index"
      >
        {{ item.label || item.value }}
      </option>
    </select>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, reactive, ref, watch } from "vue";
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
      type: [String, Boolean],
    },
    disabled: {
      type: Boolean,
    },
    options: {
      type: Array,
    },
  },
  setup(props, { emit }) {
    props = reactive(props);
    const inputValue = ref(props.value);
    watch(
      () => props.value,
      (newVal) => {
        if (!newVal) return;
        inputValue.value = newVal.toString();
      }
    );
    return {
      styles: computed(() => ({
        width: props.width,
        height: props.height,
      })),
      inputValue,
      onChange() {
        emit("change", inputValue.value);
      },
    };
  },
});
</script>
<style lang="less" scoped>
@import "./MSelect.less";
</style>
