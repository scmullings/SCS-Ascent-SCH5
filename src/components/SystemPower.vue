<template>
  <div :class="$style.systemPower">
    <div :class="$style.powerOffCard">
      <div :class="$style.theSystemWill">The system will shutdown in</div>
      <div :class="$style.or">OR</div>
      <Property1InActive
        button="Shutdown Now"
        property1InActiveWidth="324px"
        property1InActiveBoxShadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
        property1InActiveHeight="60px"
        property1InActivePosition="absolute"
        property1InActiveTop="268px"
        property1InActiveLeft="79px"
        offBorderRadius="4px"
        offBackground="unset"
        offBackgroundColor="#ef4444"
        buttonLetterSpacing="unset"
        buttonTextTransform="unset"
        buttonColor="#eee"
        buttonLineHeight="21.6px"
        buttonFontWeight="unset"
      /><Property1InActive
        button="Cancel"
        property1InActiveWidth="201px"
        property1InActiveBoxShadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
        property1InActiveHeight="60px"
        property1InActivePosition="absolute"
        property1InActiveTop="395px"
        property1InActiveLeft="141px"
        offBorderRadius="4px"
        offBackground="unset"
        offBackgroundColor="#fff"
        buttonLetterSpacing="unset"
        buttonTextTransform="unset"
        buttonColor="#646464"
        buttonLineHeight="21.6px"
        buttonFontWeight="unset"
      />
      <div :class="$style.frame">
        <div :class="$style.frameChild" />
        <div :class="$style.frameItem" />
        <div :class="$style.div">00:28</div>
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import Property1InActive from "./Property1InActive.vue";

  export default defineComponent({
    name: "SystemPower",
    components: { Property1InActive },
    props: {
      onClose: { type: Function },
    },
  });
</script>
<style module>
  .theSystemWill {
    position: absolute;
    top: 33px;
    left: calc(50% - 170px);
    line-height: 32px;
    font-weight: 600;
  }
  .or {
    position: absolute;
    top: 351px;
    left: 228px;
    font-size: var(--buttons-large-dgbtn-l-regular-size);
    line-height: 21.6px;
    text-align: center;
  }
  .frameChild {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 50%;
    border: 2px solid var(--dg-generic-destructive-500);
    box-sizing: border-box;
    width: 126px;
    height: 126px;
  }
  .frameItem {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 50%;
    border: 2px solid var(--theme-light-bg-banner);
    box-sizing: border-box;
    width: 126px;
    height: 126px;
  }
  .div {
    position: absolute;
    top: 47px;
    left: calc(50% - 33px);
    line-height: 32px;
  }
  .frame {
    position: absolute;
    top: 109px;
    left: 178px;
    width: 126px;
    height: 126px;
    overflow: hidden;
  }
  .powerOffCard {
    width: 482px;
    position: absolute;
    margin: 0 !important;
    top: calc(50% - 235px);
    left: calc(50% - 241px);
    border-radius: var(--br-9xs);
    background-color: var(--theme-light-text-light);
    box-shadow: var(--dg-shadows-new);
    height: 471px;
    overflow: hidden;
    flex-shrink: 0;
    z-index: 0;
  }
  .systemPower {
    width: 1280px;
    background-color: var(--theme-light-bg-banner);
    height: 800px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    max-width: 100%;
    max-height: 100%;
    overflow: auto;
    text-align: left;
    font-size: var(--subheading-dg-sh-regular-size);
    color: var(--theme-light-text-dark);
    font-family: var(--header-3-h3-s-semi-bold);
  }
</style>
