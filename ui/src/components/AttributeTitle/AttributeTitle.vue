<template>
  <div class="attribute-title" @click="show">
    <span :style="ExpandStatus ? 'transform:rotate(90deg)' : ''"
      ><Icon type="start" :color="color"></Icon
    ></span>
    <span class="attribute-title-label" :style="style">{{ label }}</span>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue"
import Icon from "../MIcon/MIcon.vue"
export default defineComponent({
  props: {
    ExpandStatus: {
      type: Boolean,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "white",
    },
  },
  components: {
    Icon,
  },
  setup(props, ctx) {
    const show = () => {
      ctx.emit("onClick")
    }
    return {
      show,
      style: computed(() => ({
        color: props.color,
      })),
    }
  },
})
</script>
<style lang="less" scoped>
@import "./AttributeTitle.less";
</style>
