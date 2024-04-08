<template>
  <section :class="$style.sourceList">
    <div :class="$style.sourcesList">
      <ButtonSource
        iconBluray="/icon-display.svg"
        bluRay="Laptop"
        bluRayMinWidth="62px"
        buttonSourcePadding="var(--padding-sm) var(--padding-49xl)"
        iconBlurayOverflow="unset"
      /><ButtonSource
        iconBluray="/icon-bluray@2x.png"
        bluRay="Blu-ray"
      /><ButtonSource
        iconBluray="/icon-display-1@2x.png"
        bluRay="Cable TV"
        bluRayMinWidth="78px"
        buttonSourcePadding="var(--padding-sm) var(--padding-41xl)"
        iconBlurayOverflow="hidden"
      /><ButtonSource
        iconBluray="/icon-apple@2x.png"
        bluRay="Apple TV"
        bluRayMinWidth="79px"
        buttonSourcePadding="var(--padding-sm) var(--padding-40xl)"
        iconBlurayOverflow="hidden"
      /><ButtonSource
        iconBluray="/icon-display-2@2x.png"
        bluRay="Wireless"
        bluRayMinWidth="75px"
        buttonSourcePadding="var(--padding-sm) var(--padding-42xl)"
        iconBlurayOverflow="unset"
      /><ButtonSource
        iconBluray="/icon-room-pc.svg"
        bluRay="Room PC"
        bluRayMinWidth="80px"
        buttonSourcePadding="var(--padding-sm) var(--padding-40xl)"
        iconBlurayOverflow="hidden"
      />
      <div :class="$style.buttonSource">
        <img
          :class="$style.iconCamera"
          loading="lazy"
          alt=""
          src="/icon-camera@2x.png"
        />
        <div :class="$style.camera">Camera</div>
      </div>
    </div>
    <button :class="$style.buttonNavVolume">
      <div :class="$style.iconVolume">
        <div :class="$style.switches">
          <div :class="$style.leftSwitch">
            <div :class="$style.bar" />
            <div :class="$style.knob" />
          </div>
          <div :class="$style.middleSwitch">
            <div :class="$style.bar1" />
            <div :class="$style.knob1" />
          </div>
          <div :class="$style.rightSwitch">
            <div :class="$style.bar2" />
            <div :class="$style.knob2" />
          </div>
        </div>
        <img :class="$style.outerRingIcon" alt="" src="/outer-ring.svg" />
      </div>
      <div :class="$style.volume">Volume</div>
    </button>
  </section>
</template>
<script>
  import { defineComponent } from "vue";
  import ButtonSource from "./ButtonSource.vue";

  export default defineComponent({
    name: "SourceList",
    components: { ButtonSource },
  });
</script>
<style module>
  .iconCamera {
    width: 42px;
    height: 42px;
    position: relative;
    object-fit: cover;
  }
  .camera {
    width: 68px;
    position: relative;
    line-height: 22px;
    display: inline-block;
  }
  .buttonSource {
    background-color: var(--theme-light-btn-control-off);
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
    border-right: 1px solid var(--theme-light-stroke);
    border-left: 1px solid var(--theme-light-stroke);
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--padding-sm) var(--padding-46xl);
    gap: var(--gap-5xs);
  }
  .sourcesList {
    width: fill;
    overflow-x: auto;
    flex-shrink: 0;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 0px 0px 0px 0px;
    box-sizing: border-box;
    max-width: 100%;
  }
  .bar {
    position: absolute;
    height: 100%;
    width: 42.59%;
    top: 0%;
    right: 29.63%;
    bottom: 0%;
    left: 27.78%;
    background-color: var(--theme-light-text-light);
    border: 1px solid var(--theme-light-text-light);
    box-sizing: border-box;
  }
  .knob {
    position: absolute;
    height: 33.33%;
    width: 100%;
    top: 62.86%;
    right: 0%;
    bottom: 3.81%;
    left: 0%;
    background-color: var(--theme-light-text-light);
    border: 1px solid var(--theme-light-text-light);
    box-sizing: border-box;
    z-index: 1;
  }
  .leftSwitch {
    position: absolute;
    height: 100%;
    width: 26.73%;
    top: 0%;
    right: 73.27%;
    bottom: 0%;
    left: 0%;
  }
  .bar1 {
    position: absolute;
    height: 100%;
    width: 42.59%;
    top: 0%;
    right: 29.63%;
    bottom: 0%;
    left: 27.78%;
    background-color: var(--theme-light-text-light);
    border: 1px solid var(--theme-light-text-light);
    box-sizing: border-box;
  }
  .knob1 {
    position: absolute;
    height: 33.33%;
    width: 100%;
    top: 33.33%;
    right: 0%;
    bottom: 33.33%;
    left: 0%;
    background-color: var(--theme-light-text-light);
    border: 1px solid var(--theme-light-text-light);
    box-sizing: border-box;
    z-index: 1;
  }
  .middleSwitch {
    position: absolute;
    height: 100%;
    width: 26.73%;
    top: 0%;
    right: 38.61%;
    bottom: 0%;
    left: 34.65%;
  }
  .bar2 {
    position: absolute;
    height: 100%;
    width: 42.59%;
    top: 0%;
    right: 29.63%;
    bottom: 0%;
    left: 27.78%;
    background-color: var(--theme-light-text-light);
    border: 1px solid var(--theme-light-text-light);
    box-sizing: border-box;
  }
  .knob2 {
    position: absolute;
    height: 33.33%;
    width: 100%;
    top: 3.81%;
    right: 0%;
    bottom: 62.86%;
    left: 0%;
    background-color: var(--theme-light-text-light);
    border: 1px solid var(--theme-light-text-light);
    box-sizing: border-box;
    z-index: 1;
  }
  .rightSwitch {
    position: absolute;
    height: 100%;
    width: 26.73%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    left: 73.27%;
  }
  .switches {
    position: absolute;
    height: 50%;
    width: 48.1%;
    top: 24.05%;
    right: 25.95%;
    bottom: 25.95%;
    left: 25.95%;
  }
  .outerRingIcon {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    z-index: 1;
  }
  .iconVolume {
    width: 42px;
    height: 42px;
    position: relative;
  }
  .volume {
    position: right;
    width: 120px;
    min-width: 100px;
    font-size: var(--buttons-large-dgbtn-l-regular-size);
    line-height: 22px;
    font-family: var(--header-3-h3-s-semi-bold);
    color: var(--theme-light-text-light);
    text-align: center;
    display: block;
  }
  .buttonNavVolume {
    cursor: pointer;
    border: none;
    padding: var(--padding-sm) var(--padding-17xl);
    background-color: transparent;
    background: linear-gradient(180deg, #2a2f34, #181c1e);
    box-shadow: var(--dg-shadows-new);
    border-left: 2px solid var(--theme-light-stroke);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--gap-5xs);
  }
  .sourceList {
    align-self: stretch;
    min-width: 100px;
    background-color: var(--theme-light-bg-page);
    box-shadow: var(--dg-shadows-new);
    overflow-x: auto;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 4px;
    gap: var(--gap-3xs);
    text-align: left;
    font-size: var(--buttons-large-dgbtn-l-regular-size);
    color: var(--theme-light-text-dark);
    font-family: var(--header-3-h3-s-semi-bold);
  }

  @media screen and (max-width: 1225px) {
    .sourceList {
      flex-wrap: nowrap;
    }
  }
</style>
