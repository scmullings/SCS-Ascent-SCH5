<template>
  <div :class="$style.subpageWireless">
    <div :class="$style.wirelessControls">Wireless Controls</div>
    <footer :class="$style.pleaseUseOne">
      Please use one of the wireless USB dongles and follow the on-screen
      instructions to present your device
    </footer>
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
    font-size: var(--subheading-dg-sh-regular-size);
    line-height: 32px;
    font-family: var(--header-3-h3-s-semi-bold);
    color: var(--theme-light-text-dark);
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
    text-align: left;
    font-size: var(--subheading-dg-sh-regular-size);
    color: var(--theme-light-text-dark);
    font-family: var(--header-3-h3-s-semi-bold);
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
