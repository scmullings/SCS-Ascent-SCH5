<template>
  <div :class="$style.subpageTv">
    <div :class="$style.tvControls">TV Controls</div>
    <div :class="$style.tvControls1">
      <div :class="$style.numberPad">
        <div :class="$style.row1">
          <div :class="$style.div">
            <div :class="$style.number">1</div>
          </div>
          <div :class="$style.div1">
            <div :class="$style.number1">2</div>
          </div>
          <div :class="$style.div2">
            <div :class="$style.number2">3</div>
          </div>
        </div>
        <div :class="$style.row2">
          <div :class="$style.div3">
            <div :class="$style.number3">4</div>
          </div>
          <div :class="$style.div4">
            <div :class="$style.number4">5</div>
          </div>
          <div :class="$style.div5">
            <div :class="$style.number5">6</div>
          </div>
        </div>
        <div :class="$style.row3">
          <div :class="$style.div6">
            <div :class="$style.number6">7</div>
          </div>
          <div :class="$style.div7">
            <div :class="$style.number7">8</div>
          </div>
          <div :class="$style.div8">
            <div :class="$style.number8">9</div>
          </div>
        </div>
        <div :class="$style.div9">
          <div :class="$style.number9">0</div>
        </div>
      </div>
      <div :class="$style.channel">
        <div :class="$style.channel1">
          <div :class="$style.standardDarkBtn">
            <img
              :class="$style.iconnavigationchevronRight"
              alt=""
              src="/iconnavigationchevron-right-24px-4.svg"
            />
          </div>
          <div :class="$style.channel2">Channel</div>
          <div :class="$style.standardDarkBtn1">
            <img
              :class="$style.iconnavigationchevronRight1"
              alt=""
              src="/iconnavigationchevron-right-24px-5.svg"
            />
          </div>
        </div>
        <div :class="$style.page">
          <div :class="$style.standardDarkBtn2">
            <img
              :class="$style.iconnavigationchevronRight2"
              alt=""
              src="/iconnavigationchevron-right-24px-4.svg"
            />
          </div>
          <div :class="$style.page1">Page</div>
          <div :class="$style.standardDarkBtn3">
            <img
              :class="$style.iconnavigationchevronRight3"
              alt=""
              src="/iconnavigationchevron-right-24px-5.svg"
            />
          </div>
        </div>
      </div>
      <div :class="$style.functions">
        <div :class="$style.button">
          <div :class="$style.primaryButton">Guide</div>
        </div>
        <div :class="$style.button1">
          <div :class="$style.primaryButton1">Info</div>
        </div>
        <div :class="$style.button2">
          <div :class="$style.primaryButton2">Menu</div>
        </div>
        <div :class="$style.button3">
          <div :class="$style.primaryButton3">Exit</div>
        </div>
      </div>
      <div :class="$style.circleDpad">
        <div :class="$style.circleDpadChild" />
        <img :class="$style.circleDpadItem" alt="" src="/vector-1.svg" />
        <img :class="$style.circleDpadInner" alt="" src="/vector-4.svg" />
        <img :class="$style.vectorIcon" alt="" src="/vector-2.svg" />
        <img :class="$style.circleDpadChild1" alt="" src="/vector-3.svg" />
        <img
          :class="$style.iconnavigationchevronRight4"
          alt=""
          src="/iconnavigationchevron-right-24px.svg"
        />
        <img
          :class="$style.iconnavigationchevronRight5"
          alt=""
          src="/iconnavigationchevron-right-24px-1.svg"
        />
        <img
          :class="$style.iconnavigationchevronRight6"
          alt=""
          src="/iconnavigationchevron-right-24px-2.svg"
        />
        <img
          :class="$style.iconnavigationchevronRight7"
          alt=""
          src="/iconnavigationchevron-right-24px-3.svg"
        />
        <div :class="$style.select">OK</div>
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "SubpageTV",
  });
</script>
<style module>
  .tvControls {
    height: 32px;
    position: relative;
    line-height: 32px;
    font-weight: 600;
    display: flex;
    align-items: center;
  }
  .number {
    position: relative;
    line-height: 21.6px;
  }
  .div {
    align-self: stretch;
    flex: 1;
    border-radius: var(--br-9xs);
    background-color: var(--theme-light-btn-control-off);
    box-shadow: var(--dg-shadows-new);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-7xs) 0px;
  }
  .number1 {
    position: relative;
    line-height: 21.6px;
  }
  .div1 {
    align-self: stretch;
    flex: 1;
    border-radius: var(--br-9xs);
    background-color: var(--theme-light-btn-control-off);
    box-shadow: var(--dg-shadows-new);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-7xs) 0px;
  }
  .number2 {
    position: relative;
    line-height: 21.6px;
  }
  .div2 {
    align-self: stretch;
    flex: 1;
    border-radius: var(--br-9xs);
    background-color: var(--theme-light-btn-control-off);
    box-shadow: var(--dg-shadows-new);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-7xs) 0px;
  }
  .row1 {
    width: 272px;
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: var(--gap-base);
  }
  .number3 {
    position: relative;
    line-height: 21.6px;
  }
  .div3 {
    align-self: stretch;
    flex: 1;
    border-radius: var(--br-9xs);
    background-color: var(--theme-light-btn-control-off);
    box-shadow: var(--dg-shadows-new);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-7xs) 0px;
  }
  .number4 {
    position: relative;
    line-height: 21.6px;
  }
  .div4 {
    align-self: stretch;
    flex: 1;
    border-radius: var(--br-9xs);
    background-color: var(--theme-light-btn-control-off);
    box-shadow: var(--dg-shadows-new);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-7xs) 0px;
  }
  .number5 {
    position: relative;
    line-height: 21.6px;
  }
  .div5 {
    align-self: stretch;
    flex: 1;
    border-radius: var(--br-9xs);
    background-color: var(--theme-light-btn-control-off);
    box-shadow: var(--dg-shadows-new);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-7xs) 0px;
  }
  .row2 {
    width: 272px;
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-base);
  }
  .number6 {
    position: relative;
    line-height: 21.6px;
  }
  .div6 {
    align-self: stretch;
    flex: 1;
    border-radius: var(--br-9xs);
    background-color: var(--theme-light-btn-control-off);
    box-shadow: var(--dg-shadows-new);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-7xs) 0px;
  }
  .number7 {
    position: relative;
    line-height: 21.6px;
  }
  .div7 {
    align-self: stretch;
    flex: 1;
    border-radius: var(--br-9xs);
    background-color: var(--theme-light-btn-control-off);
    box-shadow: var(--dg-shadows-new);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-7xs) 0px;
  }
  .number8 {
    position: relative;
    line-height: 21.6px;
  }
  .div8 {
    align-self: stretch;
    flex: 1;
    border-radius: var(--br-9xs);
    background-color: var(--theme-light-btn-control-off);
    box-shadow: var(--dg-shadows-new);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-7xs) 0px;
  }
  .row3 {
    width: 272px;
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-base);
  }
  .number9 {
    position: relative;
    line-height: 21.6px;
  }
  .div9 {
    width: 80px;
    flex: 0.8125;
    border-radius: var(--br-9xs);
    background-color: var(--theme-light-btn-control-off);
    box-shadow: var(--dg-shadows-new);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-7xs) 0px;
    box-sizing: border-box;
  }
  .numberPad {
    height: 373px;
    border-radius: var(--br-3xs);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: var(--padding-xl) 0px;
    box-sizing: border-box;
  }
  .iconnavigationchevronRight {
    width: 14.7px;
    height: 8.8px;
    position: relative;
    object-fit: contain;
  }
  .standardDarkBtn {
    align-self: stretch;
    flex: 1;
    border-radius: var(--br-9xs);
    background-color: var(--theme-light-btn-control-off);
    box-shadow: var(--dg-shadows-new);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .channel2 {
    height: 22px;
    position: relative;
    line-height: 21.6px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .iconnavigationchevronRight1 {
    width: 14.7px;
    height: 8.8px;
    position: relative;
    object-fit: contain;
  }
  .standardDarkBtn1 {
    align-self: stretch;
    height: 64px;
    border-radius: var(--br-9xs);
    background-color: var(--theme-light-btn-control-off);
    box-shadow: var(--dg-shadows-new);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .channel1 {
    width: 80px;
    height: 154px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-11xs);
  }
  .iconnavigationchevronRight2 {
    width: 14.7px;
    height: 8.8px;
    position: relative;
    object-fit: contain;
  }
  .standardDarkBtn2 {
    align-self: stretch;
    flex: 1;
    border-radius: var(--br-9xs);
    background-color: var(--theme-light-btn-control-off);
    box-shadow: var(--dg-shadows-new);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .page1 {
    height: 22px;
    position: relative;
    line-height: 21.6px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .iconnavigationchevronRight3 {
    width: 14.7px;
    height: 8.8px;
    position: relative;
    object-fit: contain;
  }
  .standardDarkBtn3 {
    align-self: stretch;
    height: 64px;
    border-radius: var(--br-9xs);
    background-color: var(--theme-light-btn-control-off);
    box-shadow: var(--dg-shadows-new);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .page {
    width: 80px;
    height: 154px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-11xs);
  }
  .channel {
    height: 374px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: var(--padding-xl) 0px;
    box-sizing: border-box;
  }
  .primaryButton {
    height: 22px;
    flex: 1;
    position: relative;
    line-height: 21.6px;
    display: inline-block;
  }
  .button {
    width: 80px;
    height: 64px;
    border-radius: var(--br-9xs);
    background-color: var(--theme-light-btn-control-off);
    box-shadow: var(--dg-shadows-new);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-sm);
    box-sizing: border-box;
  }
  .primaryButton1 {
    position: relative;
    line-height: 21.6px;
  }
  .button1 {
    width: 80px;
    height: 64px;
    border-radius: var(--br-9xs);
    background-color: var(--theme-light-btn-control-off);
    box-shadow: var(--dg-shadows-new);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-sm) var(--padding-xl);
    box-sizing: border-box;
  }
  .primaryButton2 {
    height: 22px;
    flex: 1;
    position: relative;
    line-height: 21.6px;
    display: inline-block;
  }
  .button2 {
    width: 80px;
    height: 64px;
    border-radius: var(--br-9xs);
    background-color: var(--theme-light-btn-control-off);
    box-shadow: var(--dg-shadows-new);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-sm) var(--padding-base);
    box-sizing: border-box;
  }
  .primaryButton3 {
    position: relative;
    line-height: 21.6px;
  }
  .button3 {
    width: 80px;
    height: 64px;
    border-radius: var(--br-9xs);
    background-color: var(--theme-light-btn-control-off);
    box-shadow: var(--dg-shadows-new);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-sm) var(--padding-xl);
    box-sizing: border-box;
  }
  .functions {
    height: 374px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: var(--padding-xl) var(--padding-10xs);
    box-sizing: border-box;
    text-align: left;
  }
  .circleDpadChild {
    position: absolute;
    height: 36.6%;
    width: 42.62%;
    top: 31.87%;
    right: 28.5%;
    bottom: 31.53%;
    left: 28.88%;
    border-radius: 50%;
    background-color: var(--theme-light-btn-control-off);
    box-shadow: var(--dg-shadows-new);
  }
  .circleDpadItem {
    position: absolute;
    height: 59.27%;
    width: 69.04%;
    top: -10.6%;
    right: 15.5%;
    bottom: 51.33%;
    left: 15.46%;
    border-radius: var(--br-8xs);
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: contain;
  }
  .circleDpadInner {
    position: absolute;
    height: 59.27%;
    width: 69.04%;
    top: 20.37%;
    right: 51.23%;
    bottom: 20.37%;
    left: -20.27%;
    border-radius: var(--br-8xs);
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: contain;
  }
  .vectorIcon {
    position: absolute;
    height: 59.27%;
    width: 69.04%;
    top: 20.37%;
    right: -20.27%;
    bottom: 20.37%;
    left: 51.23%;
    border-radius: var(--br-8xs);
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: contain;
  }
  .circleDpadChild1 {
    position: absolute;
    height: 59.27%;
    width: 69.04%;
    top: 51.37%;
    right: 15.5%;
    bottom: -10.63%;
    left: 15.46%;
    border-radius: var(--br-8xs);
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: contain;
  }
  .iconnavigationchevronRight4 {
    position: absolute;
    height: 5%;
    width: 9.85%;
    top: 14.23%;
    right: 44.73%;
    bottom: 80.77%;
    left: 45.42%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: contain;
  }
  .iconnavigationchevronRight5 {
    position: absolute;
    height: 8.5%;
    width: 5.81%;
    top: 46.07%;
    right: 85.31%;
    bottom: 45.43%;
    left: 8.88%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: contain;
  }
  .iconnavigationchevronRight6 {
    position: absolute;
    height: 8.5%;
    width: 5.81%;
    top: 46.07%;
    right: 7.31%;
    bottom: 45.43%;
    left: 86.88%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .iconnavigationchevronRight7 {
    position: absolute;
    height: 5%;
    width: 9.85%;
    top: 81.83%;
    right: 44.73%;
    bottom: 13.17%;
    left: 45.42%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: contain;
  }
  .select {
    position: absolute;
    height: 26.67%;
    width: 31.27%;
    top: 36.97%;
    left: 34.27%;
    line-height: 21.6px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .circleDpad {
    height: 300px;
    width: 260px;
    position: relative;
  }
  .tvControls1 {
    align-self: stretch;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--gap-13xl);
    min-height: 390px;
    text-align: center;
    font-size: var(--buttons-large-dgbtn-l-regular-size);
  }
  .subpageTv {
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
    text-align: left;
    font-size: var(--subheading-dg-sh-regular-size);
    color: var(--theme-light-text-dark);
    font-family: var(--header-3-h3-s-semi-bold);
  }

  @media screen and (max-width: 1050px) {
    .tvControls1 {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  @media screen and (max-width: 450px) {
    .tvControls {
      font-size: var(--font-size-lgi);
      line-height: 26px;
    }
  }
</style>
