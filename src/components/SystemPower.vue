<template>
  <div :class="$style.systemPower">
    <div :class="$style.powerOffCard">
      <div :class="$style.theSystemWill">The system will shutdown in</div>
      <div :class="$style.powerOffCardInner">
        <div :class="$style.frameParent">
          <div :class="$style.frameWrapper">
            <div :class="$style.frameGroup">
              <div :class="$style.statusCirclesParent">
                <div :class="$style.statusCircles" />
                <div :class="$style.statusCircles1" />
              </div>
              <div :class="$style.powerButton">00:28</div>
            </div>
          </div>
          <div :class="$style.darkPowerButton">
            <Property1InActive
              button="Shutdown Now"
              property1InActiveWidth="unset"
              property1InActiveBoxShadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
              property1InActiveHeight="unset"
              property1InActivePosition="relative"
              property1InActiveTop="unset"
              property1InActiveLeft="unset"
              offBorderRadius="4px"
              offBackground="unset"
              offBackgroundColor="0px solid #ef4444"
              buttonLetterSpacing="unset"
              buttonTextTransform="unset"
              buttonColor="#eee"
              buttonLineHeight="21.6px"
              buttonFontWeight="unset"
            />
            <div :class="$style.orWrapper">
              <div :class="$style.or">OR</div>
            </div>
            <div :class="$style.standardDarkBtnWrapper">
              <Property1InActive
                button="Cancel"
                property1InActiveWidth="unset"
                property1InActiveBoxShadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
                property1InActiveHeight="unset"
                property1InActivePosition="relative"
                property1InActiveTop="unset"
                property1InActiveLeft="unset"
                offBorderRadius="4px"
                offBackground="unset"
                offBackgroundColor="#fff"
                buttonLetterSpacing="unset"
                buttonTextTransform="unset"
                buttonColor="#646464"
                buttonLineHeight="21.6px"
                buttonFontWeight="unset"
              />
            </div>
          </div>
        </div>
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
  });
</script>
<style module>
  .theSystemWill {
    position: relative;
    line-height: 32px;
    font-weight: 600;
  }
  .statusCircles {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 50%;
    border: 0px solid var(--dg-generic-destructive-500);
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }
  .statusCircles1 {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 50%;
    border: 0px solid var(--theme-light-bg-banner);
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  .statusCirclesParent {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
  }
  .powerButton {
    position: absolute;
    top: 47px;
    left: 30px;
    line-height: 32px;
    display: inline-block;
    min-width: 66px;
    white-space: nowrap;
    z-index: 2;
  }
  .frameGroup {
    height: 126px;
    width: 126px;
    position: relative;
  }
  .frameWrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl);
  }
  .or {
    width: 26px;
    position: relative;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 26px;
  }
  .orWrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl);
  }
  .standardDarkBtnWrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-42xl) 0px 62px;
  }
  .darkPowerButton {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    gap: 22.5px;
    max-width: 100%;
    text-align: center;
    font-size: var(--buttons-large-dgbtn-l-regular-size);
  }
  .frameParent {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 33px;
    max-width: 100%;
  }
  .powerOffCardInner {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-5xs);
    box-sizing: border-box;
    max-width: 100%;
  }
  .powerOffCard {
    width: 482px;
    border-radius: var(--br-9xs);
    background-color: var(--theme-light-text-light);
    box-shadow: var(--new);
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 33px 71px var(--padding-base);
    box-sizing: border-box;
    gap: 44px;
    max-width: 100%;
  }
  .systemPower {
    width: 1280px;
    background-color: var(--theme-light-bg-banner);
    max-width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 165px var(--padding-xl) 164px;
    box-sizing: border-box;
    letter-spacing: normal;
    text-align: left;
    font-size: var(--subheading-dg-sh-regular-size);
    color: var(--theme-light-text-dark);
    font-family: var(--buttons-large-dgbtn-l-regular);
  }

  @media screen and (max-width: 450px) {
    .theSystemWill {
      font-size: var(--font-size-lgi);
      line-height: 26px;
    }

    .powerButton {
      font-size: var(--font-size-lgi);
      line-height: 26px;
    }

    .standardDarkBtnWrapper {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }

    .frameParent {
      gap: 16px 33px;
    }

    .powerOffCard {
      gap: 22px 44px;
      padding: var(--padding-2xl) 35px var(--padding-xl);
      box-sizing: border-box;
    }
  }
</style>
