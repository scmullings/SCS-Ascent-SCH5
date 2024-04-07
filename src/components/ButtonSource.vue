<template>
  <button :class="$style.buttonSource" :style="buttonSourceStyle">
    <img :class="$style.iconBluray" alt="" :src="iconBluray" />
    <div :class="$style.bluRay" :style="bluRayStyle">{{bluRay}}</div>
  </button>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "ButtonSource",
    props: {
      iconBluray: { type: String },
      bluRay: { type: String },
      propPadding: { type: [Object, Array, String, Number, Boolean] },
      propWidth: { type: [Object, Array, String, Number, Boolean] },
      propWidth1: { type: [Object, Array, String, Number, Boolean] },
      frameDivPadding: { type: [Object, Array, String, Number, Boolean] },
      bluRayMinWidth: { type: [Object, Array, String, Number, Boolean] },
    },
    computed: {
      buttonSourceStyle() {
        return {
          padding: this.propPadding,
        };
      },
      bluRayStyle() {
        return {
          width: this.propWidth1,
          minWidth: this.bluRayMinWidth,
        };
      },
    },
  });
</script>
<style module>
  .iconBluray {
    width: 42px;
    height: 42px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    object-fit: cover;
  }
  .bluRay {
    position: relative;
    font-size: var(--buttons-large-dgbtn-l-regular-size);
    line-height: 22px;
    font-family: var(--header-3-h3-s-semi-bold);
    color: var(--theme-light-text-dark);
    text-align: left;
    display: inline-block;
    min-width: 64px;
  }
  .buttonSource {
    cursor: pointer;
    border: none;
    padding: var(--padding-sm) var(--padding-48xl);
    background-color: var(--theme-light-btn-control-off);
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
    border-right: 1px solid var(--theme-light-stroke);
    border-left: 1px solid var(--theme-light-stroke);
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--gap-5xs);
  }
  .buttonSource:hover {
    background-color: var(--theme-light-bg-page);
  }
</style>
