<template>
  <div :class="$style.subpageRoomPc">
    <div :class="$style.roomPcControls">Room PC Controls</div>
    <div :class="$style.pleaseUseThe">
      Please use the wireless mouse and keyboard to control this device
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "SubpageRoomPC",
  });
</script>
<style module>
  .roomPcControls {
    height: 32px;
    position: relative;
    line-height: 32px;
    font-weight: 600;
    display: flex;
    align-items: center;
  }
  .pleaseUseThe {
    align-self: stretch;
    height: 400px;
    position: relative;
    line-height: 32px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .subpageRoomPc {
    width: 628px;
    background-color: var(--theme-light-bg-card);
    overflow: hidden;
    display: none;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-xl);
    box-sizing: border-box;
    gap: var(--gap-5xs);
    max-width: 100%;
    text-align: left;
    font-size: var(--subheading-dg-sh-regular-size);
    color: var(--theme-light-text-dark);
    font-family: var(--header-3-h3-s-semi-bold);
  }

  @media screen and (max-width: 450px) {
    .roomPcControls {
      font-size: var(--font-size-lgi);
      line-height: 26px;
    }

    .pleaseUseThe {
      font-size: var(--font-size-lgi);
      line-height: 26px;
    }
  }
</style>
