<template>
  <div class="attribute-transform">
    <Title
      :label="label || 'TRANSFORM'"
      :ExpandStatus="ExpandStatus"
      @onClick="show"
    />
    <div v-show="ExpandStatus" class="">
      <div class="attribute">
        <div class="attribute-label">Translation</div>
        <div class="attribute-body">
          <div class="attribute-body-item">
            <span class="x">X</span
            ><MInput
              width="60px"
              :value="props.location?.x"
              @onInput="
                (v) => {
                  out('location', 'x', v)
                }
              "
            />
          </div>
          <div class="attribute-body-item">
            <span class="y">Y</span
            ><MInput
              width="60px"
              :value="props.location?.y"
              @onInput="
                (v) => {
                  out('location', 'y', v)
                }
              "
            />
          </div>
          <div class="attribute-body-item">
            <span class="z">Z</span
            ><MInput
              width="60px"
              :value="props.location?.z"
              @onInput="
                (v) => {
                  out('location', 'z', v)
                }
              "
            />
          </div>
        </div>
      </div>
      <div class="attribute">
        <div class="attribute-label">Rotation</div>
        <div class="attribute-body">
          <div class="attribute-body-item">
            <span class="x">X</span
            ><MInput
              width="60px"
              :value="props.rotation?.x"
              @onInput="
                (v) => {
                  out('rotation', 'x', v)
                }
              "
            />
          </div>
          <div class="attribute-body-item">
            <span class="y">Y</span
            ><MInput
              width="60px"
              :value="props.rotation?.y"
              @onInput="
                (v) => {
                  out('rotation', 'y', v)
                }
              "
            />
          </div>
          <div class="attribute-body-item">
            <span class="z">Z</span
            ><MInput
              width="60px"
              :value="props.rotation?.z"
              @onInput="
                (v) => {
                  out('rotation', 'z', v)
                }
              "
            />
          </div>
        </div>
      </div>
      <div class="attribute">
        <div class="attribute-label">Scale</div>
        <div class="attribute-body">
          <div class="attribute-body-item">
            <span class="x">X</span
            ><MInput width="60px" :value="props.scale?.x" />
          </div>
          <div class="attribute-body-item">
            <span class="y">Y</span
            ><MInput
              width="60px"
              :value="props.scale?.y"
              @onInput="
                (v) => {
                  out('scale', 'y', v)
                }
              "
            />
          </div>
          <div class="attribute-body-item">
            <span class="z">Z</span
            ><MInput
              width="60px"
              :value="props.scale?.z"
              @onInput="
                (v) => {
                  out('scale', 'z', v)
                }
              "
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue"
import MInput from "../MInput/MInput.vue"
import Title from "../AttributeTitle/AttributeTitle.vue"
export default defineComponent({
  props: {
    location: {
      type: Object,
    },
    rotation: {
      type: Object,
    },
    scale: {
      type: Object,
    },
    label: String,
  },
  components: {
    MInput,
    Title,
  },
  setup(props, ctx) {
    const ExpandStatus = ref(true)
    const show = () => {
      ExpandStatus.value = !ExpandStatus.value
    }
    const data: any = {
      location: {
        x: props.location?.x || 0,
        y: props.location?.y || 0,
        z: props.location?.z || 0,
      },
      rotation: {
        x: props.rotation?.x || 0,
        y: props.rotation?.y || 0,
        z: props.rotation?.z || 0,
      },
      scale: {
        x: props.scale?.x || 0,
        y: props.scale?.y || 0,
        z: props.scale?.z || 0,
      },
    }
    const out = (type: string, attr: string, v: any) => {
      data[type][attr] = +v
      ctx.emit("onChange", data)
    }
    return {
      ExpandStatus,
      show,
      props,
      out,
    }
  },
})
</script>
<style lang="less" scoped>
@import "./AttributeTransform.less";
</style>
