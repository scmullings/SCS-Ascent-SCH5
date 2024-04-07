<template>
  <img :class="$style.scIcon" alt="" :src="sCIconSCIcon" :style="sCIconStyle" />
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "SCIcon",
    props: {
      sCIconSCIcon: { type: String },
      sCIconPosition: { type: String },
      sCIconMaxHeight: { type: [Object, Array, String, Number, Boolean] },
    },
    computed: {
      sCIconStyle() {
        return {
          position: this.sCIconPosition,
          maxHeight: this.sCIconMaxHeight,
        };
      },
    },
  });
</script>
<style module>
  .scIcon {
    width: 656px;
    max-width: 100%;
    overflow: hidden;
  }
</style>
