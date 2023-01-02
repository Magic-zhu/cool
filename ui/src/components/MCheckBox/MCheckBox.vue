<template>
  <div class="checkbox-wrapper">
    <div class="checkbox-show">
      <MIcon
        v-show="ifChecked"
        color="green"
        width="17px"
        height="17px"
        :type="IconType.CHECKED"
      />
    </div>
    <input
      type="checkbox"
      v-model="ifChecked"
      class="checkbox-real"
      @change="change"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue"
import MIcon, { IconType } from "../MIcon/MIcon.vue"
export default defineComponent({
  components: {
    MIcon,
  },
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, ctx) {
    const ifChecked = ref(props.checked)
    return {
      ifChecked,
      change() {
        ctx.emit("onchange", ifChecked.value)
      },
      IconType,
    }
  },
})
</script>
<style lang="less" scoped>
@import "./MCheckBox.less";
</style>
