<template>
  <button :class="$style.buttonSource" :style="buttonSourceStyle">
    <img
      :class="$style.iconBluray"
      alt=""
      :src="iconBluray"
      :style="iconBlurayStyle"
    />
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
      bluRayMinWidth: { type: [Object, Array, String, Number, Boolean] },
      buttonSourcePadding: { type: [Object, Array, String, Number, Boolean] },
      iconBlurayOverflow: { type: String },
    },
    computed: {
      bluRayStyle() {
        return {
          minWidth: this.bluRayMinWidth,
        };
      },
      buttonSourceStyle() {
        return {
          padding: this.buttonSourcePadding,
        };
      },
      iconBlurayStyle() {
        return {
          overflow: this.iconBlurayOverflow,
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
    font-family: var(--buttons-large-dgbtn-l-regular);
    color: var(--theme-light-text-dark);
    text-align: left;
    display: inline-block;
    min-width: 64px;
  }
  .buttonSource {
    cursor: pointer;
    border: none;
    padding: var(--padding-sm) var(--padding-48xl);
    background-color: var(--theme-light-btn-src-off);
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
