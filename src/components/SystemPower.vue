<template>
  <div :class="$style.systemPower">
    <div :class="$style.powerOffCard">
      <div :class="$style.theSystemWill">The system will shutdown in</div>
      <div :class="$style.powerOffCardInner">
        <div :class="$style.frameParent">
          <div :class="$style.frameWrapper">
            <div :class="$style.systemParent">
              <div :class="$style.system">
                <div :class="$style.statusCircles" />
                <div :class="$style.ellipseOff" />
              </div>
              <div :class="$style.powerButton">00:28</div>
            </div>
          </div>
          <div :class="$style.shutdownButton">
            <div
              :class="$style.buttonShutdown"
              @click="onButtonShutdownContainerClick"
            >
              <div :class="$style.off">
                <div :class="$style.button">Shutdown Now</div>
              </div>
            </div>
            <div :class="$style.orWrapper">
              <div :class="$style.or">OR</div>
            </div>
            <div :class="$style.cancelButton">
              <div
                :class="$style.buttonCancel"
                @click="onButtonCancelContainerClick"
              >
                <div :class="$style.off1">
                  <div :class="$style.button1">Cancel</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "SystemPower",
    methods: {
      onButtonShutdownContainerClick() {
        this.$router.push("/start-screen");
      },
      onButtonCancelContainerClick() {
        this.$router.push("/");
      },
    },
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
  .ellipseOff {
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
  .system {
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
  .systemParent {
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
  .button {
    height: 60px;
    flex: 1;
    position: relative;
    line-height: 21.6px;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    z-index: 1;
  }
  .off {
    flex: 1;
    border-radius: var(--br-9xs);
    background-color: var(--dg-generic-destructive-500);
    box-shadow: var(--btn-off-style);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    white-space: nowrap;
    max-width: 100%;
  }
  .buttonShutdown {
    align-self: stretch;
    box-shadow: var(--new);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
    cursor: pointer;
    color: var(--theme-light-text-light);
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
  .button1 {
    height: 60px;
    flex: 1;
    position: relative;
    line-height: 21.6px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }
  .off1 {
    flex: 1;
    border-radius: var(--br-9xs);
    background-color: var(--theme-light-btn-src-off);
    box-shadow: var(--btn-off-style);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .buttonCancel {
    flex: 1;
    box-shadow: var(--new);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    cursor: pointer;
  }
  .cancelButton {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-42xl) 0px 62px;
  }
  .shutdownButton {
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
    font-family: var(--subheading-dg-sh-regular);
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

    .cancelButton {
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
