<template>
  <div :class="$style.subpageAppleTv">
    <div :class="$style.appleTvControls">Apple TV Controls</div>
    <div :class="$style.appleControls">
      <div :class="$style.circleDpad">
        <div :class="$style.circleDpadChild" />
        <img :class="$style.circleDpadItem" alt="" src="/vector-1.svg" />
        <img :class="$style.circleDpadInner" alt="" src="/vector-4.svg" />
        <img :class="$style.vectorIcon" alt="" src="/vector-2.svg" />
        <img :class="$style.circleDpadChild1" alt="" src="/vector-3.svg" />
        <img
          :class="$style.iconnavigationchevronRight"
          alt=""
          src="/iconnavigationchevron-right-24px.svg"
        />
        <img
          :class="$style.iconnavigationchevronRight1"
          alt=""
          src="/iconnavigationchevron-right-24px-1.svg"
        />
        <img
          :class="$style.iconnavigationchevronRight2"
          alt=""
          src="/iconnavigationchevron-right-24px-2.svg"
        />
        <img
          :class="$style.iconnavigationchevronRight3"
          alt=""
          src="/iconnavigationchevron-right-24px-3.svg"
        />
        <div :class="$style.select">OK</div>
      </div>
      <div :class="$style.controls">
        <div :class="$style.button">
          <div :class="$style.primaryButton">Menu</div>
        </div>
        <img :class="$style.offIcon" alt="" src="/off.svg" />
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "SubpageAppleTV",
  });
</script>
<style module>
  .appleTvControls {
    height: 32px;
    position: relative;
    line-height: 32px;
    font-weight: 600;
    display: flex;
    align-items: center;
  }
  .circleDpadChild {
    position: absolute;
    height: 42.23%;
    width: 42.62%;
    top: 29.08%;
    right: 28.5%;
    bottom: 28.69%;
    left: 28.88%;
    border-radius: 50%;
    background-color: var(--theme-light-btn-src-off);
    box-shadow: var(--new);
  }
  .circleDpadItem {
    position: absolute;
    height: 68.38%;
    width: 69.04%;
    top: 14.27%;
    right: 15.5%;
    bottom: 17.35%;
    left: 15.46%;
    border-radius: var(--br-8xs);
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: contain;
  }
  .circleDpadInner {
    position: absolute;
    height: 68.38%;
    width: 69.04%;
    top: 84.19%;
    right: 16.73%;
    bottom: -52.58%;
    left: 14.23%;
    border-radius: var(--br-8xs);
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: contain;
  }
  .vectorIcon {
    position: absolute;
    height: 68.38%;
    width: 69.04%;
    top: 15.81%;
    right: -54.81%;
    bottom: 15.81%;
    left: 85.77%;
    border-radius: var(--br-8xs);
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: contain;
  }
  .circleDpadChild1 {
    position: absolute;
    height: 68.38%;
    width: 69.04%;
    top: 85.73%;
    right: -53.58%;
    bottom: -54.12%;
    left: 84.54%;
    border-radius: var(--br-8xs);
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: contain;
  }
  .iconnavigationchevronRight {
    position: absolute;
    height: 5.77%;
    width: 9.85%;
    top: 14.5%;
    right: 44.73%;
    bottom: 79.73%;
    left: 45.42%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: contain;
  }
  .iconnavigationchevronRight1 {
    position: absolute;
    height: 9.81%;
    width: 5.81%;
    top: 55.23%;
    right: 79.5%;
    bottom: 34.96%;
    left: 14.69%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: contain;
  }
  .iconnavigationchevronRight2 {
    position: absolute;
    height: 9.81%;
    width: 5.81%;
    top: 45.46%;
    right: 7.31%;
    bottom: 44.73%;
    left: 86.88%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .iconnavigationchevronRight3 {
    position: absolute;
    height: 5.77%;
    width: 9.85%;
    top: 86.73%;
    right: 34.88%;
    bottom: 7.5%;
    left: 55.27%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: contain;
  }
  .select {
    position: absolute;
    height: 30.77%;
    width: 31.27%;
    top: 34.96%;
    left: 34.27%;
    line-height: 21.6px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .circleDpad {
    width: 260px;
    height: 260px;
    position: relative;
  }
  .primaryButton {
    position: relative;
    line-height: 21.6px;
  }
  .button {
    height: 64px;
    width: 140px;
    border-radius: var(--br-9xs);
    background-color: var(--theme-light-btn-src-off);
    box-shadow: var(--new);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-sm) var(--padding-xl);
    box-sizing: border-box;
  }
  .offIcon {
    height: 64px;
    width: 140px;
    position: relative;
    border-radius: var(--br-9xs);
  }
  .controls {
    width: 344px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    max-width: 100%;
    gap: var(--gap-xl);
    text-align: left;
  }
  .appleControls {
    align-self: stretch;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--gap-13xl);
    min-height: 390px;
    max-width: 100%;
    text-align: center;
    font-size: var(--buttons-large-dgbtn-l-regular-size);
  }
  .subpageAppleTv {
    width: 628px;
    background-color: var(--theme-light-bg-card);
    overflow: hidden;
    display: none;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-xl);
    box-sizing: border-box;
    gap: var(--gap-lg);
    max-width: 100%;
    z-index: 3;
    text-align: left;
    font-size: var(--subheading-dg-sh-regular-size);
    color: var(--theme-light-text-dark);
    font-family: var(--buttons-large-dgbtn-l-regular);
  }

  @media screen and (max-width: 450px) {
    .appleTvControls {
      font-size: var(--font-size-lgi);
      line-height: 26px;
    }

    .controls {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
</style>
