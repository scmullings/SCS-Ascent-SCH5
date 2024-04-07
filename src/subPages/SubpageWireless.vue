<template>
  <div :class="$style.subpageWireless">
    <div :class="$style.wirelessControls">Wireless Controls</div>
    <div :class="$style.pleaseUseOne">
      Please use one of the wireless USB dongles and follow the on-screen
      instructions to present your device
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "SubpageWireless",
  });
</script>
<style module>
  .wirelessControls {
    height: 32px;
    position: relative;
    line-height: 32px;
    font-weight: 600;
    display: flex;
    align-items: center;
  }
  .pleaseUseOne {
    align-self: stretch;
    height: 387px;
    position: relative;
    line-height: 32px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .subpageWireless {
    width: 1264px;
    background-color: var(--theme-light-bg-card);
    overflow: hidden;
    display: none;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-xl);
    box-sizing: border-box;
    gap: var(--gap-2xl);
    max-width: 100%;
    z-index: 4;
    text-align: left;
    font-size: var(--subheading-dg-sh-regular-size);
    color: var(--theme-light-text-dark);
    font-family: var(--buttons-large-dgbtn-l-regular);
  }

  @media screen and (max-width: 450px) {
    .wirelessControls {
      font-size: var(--font-size-lgi);
      line-height: 26px;
    }

    .pleaseUseOne {
      font-size: var(--font-size-lgi);
      line-height: 26px;
    }
  }
</style>
