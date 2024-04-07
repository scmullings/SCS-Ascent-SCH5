<template>
  <div :class="$style.property1inactive" :style="property1InActiveStyle">
    <div :class="$style.off" :style="offStyle" />
    <b :class="$style.button" :style="buttonStyle">{{button}}</b>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Property1InActive",
    props: {
      button: { type: String },
      property1InActiveWidth: {
        type: [Object, Array, String, Number, Boolean],
      },
      property1InActiveBoxShadow: { type: String },
      property1InActiveHeight: {
        type: [Object, Array, String, Number, Boolean],
      },
      property1InActivePosition: { type: String },
      property1InActiveTop: { type: [Object, Array, String, Number, Boolean] },
      property1InActiveLeft: { type: [Object, Array, String, Number, Boolean] },
      offBorderRadius: { type: String },
      offBackground: { type: String },
      offBackgroundColor: { type: String },
      buttonLetterSpacing: { type: String },
      buttonTextTransform: { type: String },
      buttonColor: { type: String },
      buttonLineHeight: { type: String },
      buttonFontWeight: { type: String },
    },
    computed: {
      property1InActiveStyle() {
        return {
          width: this.property1InActiveWidth,
          boxShadow: this.property1InActiveBoxShadow,
          height: this.property1InActiveHeight,
          position: this.property1InActivePosition,
          top: this.property1InActiveTop,
          left: this.property1InActiveLeft,
        };
      },
      offStyle() {
        return {
          borderRadius: this.offBorderRadius,
          background: this.offBackground,
          backgroundColor: this.offBackgroundColor,
        };
      },
      buttonStyle() {
        return {
          letterSpacing: this.buttonLetterSpacing,
          textTransform: this.buttonTextTransform,
          color: this.buttonColor,
          lineHeight: this.buttonLineHeight,
          fontWeight: this.buttonFontWeight,
        };
      },
    },
  });
</script>
<style module>
  .off {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    border-radius: var(--br-3xs);
    background: linear-gradient(180deg, #fff, #e2e2e2);
    box-shadow: var(--btn-off-style);
  }
  .button {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0%;
    left: 0%;
    letter-spacing: 0.04em;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .property1inactive {
    width: 125px;
    box-shadow: var(--btn-off-style);
    height: 48px;
    text-align: center;
    font-size: var(--button-text-size);
    color: var(--text-dark);
    font-family: var(--header-3-h3-s-semi-bold);
  }
</style>
