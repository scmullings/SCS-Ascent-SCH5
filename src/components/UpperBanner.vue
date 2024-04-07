<template>
  <header :class="$style.upperBanner">
    <div :class="$style.tIMEMESSAGESFRA">
      <div :class="$style.timeMessages">
        <div :class="$style.jun152018">Jun 15, 2018 10:19 AM</div>
        <div :class="$style.timeMessagesChild" />
        <div :class="$style.systemMessages">System Messages</div>
      </div>
    </div>
    <div :class="$style.boardroom">Boardroom</div>
    <div :class="$style.bannerControlsWrapper">
      <div :class="$style.bannerControls">
        <div :class="$style.activeCallsWrapper">
          <div :class="$style.activeCalls">
            <div :class="$style.activeCallsInner">
              <div :class="$style.frameChild" />
            </div>
            <div :class="$style.iconPhoneInstance">
              <div :class="$style.noActiveCalls">No Active Calls</div>
            </div>
            <img
              :class="$style.iconPhone"
              loading="lazy"
              alt=""
              src="/icon-phone@2x.png"
            />
          </div>
        </div>
        <img
          :class="$style.iconSettings"
          loading="lazy"
          alt=""
          src="/icon-settings@2x.png"
        />
        <div :class="$style.iconPowerWrapper">
          <img
            :class="$style.iconPower"
            loading="lazy"
            alt=""
            src="/icon-power@2x.png"
            @click="onIconPowerClick"
          />
        </div>
      </div>
    </div>
  </header>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "UpperBanner1",
    methods: {
      onIconPowerClick() {
        this.$router.push("/system-power");
      },
    },
  });
</script>
<style module>
  .jun152018 {
    width: 172px;
    position: absolute;
    margin: 0 !important;
    top: 0px;
    left: 0px;
    line-height: 17px;
    display: inline-block;
    white-space: nowrap;
  }
  .timeMessagesChild {
    height: 16px;
    width: 4px;
    position: absolute;
    margin: 0 !important;
    top: 40.5px;
    left: 0px;
    border-radius: var(--br-12xs);
    background-color: var(--dg-generic-destructive-500);
  }
  .systemMessages {
    position: absolute;
    margin: 0 !important;
    top: 40px;
    left: 10px;
    line-height: 17px;
    display: inline-block;
    min-width: 121px;
    white-space: nowrap;
  }
  .timeMessages {
    width: 172px;
    height: 57px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    gap: 23px 6px;
  }
  .tIMEMESSAGESFRA {
    width: 281px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px 0px var(--padding-11xs);
    box-sizing: border-box;
  }
  .boardroom {
    height: 71px;
    width: 242px;
    position: relative;
    font-size: var(--subheading-dg-sh-regular-size);
    line-height: 32px;
    font-weight: 600;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    white-space: nowrap;
  }
  .frameChild {
    width: 4px;
    height: 16px;
    position: relative;
    border-radius: var(--br-12xs);
    background-color: var(--dg-generic-destructive-500);
  }
  .activeCallsInner {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-8xs) 0px 0px;
  }
  .noActiveCalls {
    position: relative;
    line-height: 17px;
    display: inline-block;
    min-width: 103px;
    white-space: nowrap;
  }
  .iconPhoneInstance {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-8xs-4) var(--padding-8xs) 0px 0px;
  }
  .iconPhone {
    height: 28px;
    width: 28px;
    position: relative;
    object-fit: cover;
  }
  .activeCalls {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-7xs-9);
  }
  .activeCallsWrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-sm) 0px 0px;
  }
  .iconSettings {
    height: 56px;
    width: 56px;
    position: relative;
    object-fit: cover;
  }
  .iconPower {
    width: 48px;
    height: 48px;
    position: relative;
    object-fit: cover;
    cursor: pointer;
  }
  .iconPowerWrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-9xs) 0px 0px;
  }
  .bannerControls {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-8xs) 0px var(--padding-8xs) var(--padding-7xl);
    gap: var(--gap-10xl);
  }
  .bannerControlsWrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px 0px var(--padding-12xs);
    box-sizing: border-box;
    max-width: 100%;
  }
  .upperBanner {
    align-self: stretch;
    background-color: var(--theme-light-bg-banner);
    box-shadow: var(--dg-shadows-xl);
    border-bottom: 1px solid var(--theme-light-stroke);
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    padding: var(--padding-10xs) var(--padding-xl) var(--padding-7xs)
      var(--padding-2xl);
    top: 0;
    z-index: 99;
    position: sticky;
    max-width: 100%;
    gap: var(--gap-xl);
    text-align: left;
    font-size: var(--buttons-small-dg-btn-s-regular-size);
    color: var(--theme-light-text-light);
    font-family: var(--header-3-h3-s-semi-bold);
  }
</style>
