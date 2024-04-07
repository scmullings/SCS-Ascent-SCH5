<template>
  <div :class="$style.buttonDisplay">
    <div :class="$style.buttonDisplayInner">
      <div :class="$style.frameParent">
        <div :class="$style.rectangleWrapper">
          <div :class="$style.frameChild" />
        </div>
        <div :class="$style.display1" :style="display1Style">{{display1}}</div>
      </div>
    </div>
    <button :class="$style.textBox">
      <div :class="$style.sourceName">Source Name</div>
    </button>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "ButtonDisplay1",
    props: {
      display1: { type: String },
      propWidth: { type: [Object, Array, String, Number, Boolean] },
      display1MinWidth: { type: [Object, Array, String, Number, Boolean] },
    },
    computed: {
      display1Style() {
        return {
          width: this.propWidth,
          minWidth: this.display1MinWidth,
        };
      },
    },
  });
</script>
<style module>
  .frameChild {
    width: 4px;
    height: 16px;
    position: relative;
    border-radius: var(--br-12xs);
    background-color: var(--dg-generic-destructive-500);
  }
  .rectangleWrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-9xs) 0px 0px;
  }
  .display1 {
    position: relative;
    line-height: 22px;
    display: inline-block;
    min-width: 76px;
  }
  .frameParent {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--gap-xl);
  }
  .buttonDisplayInner {
    width: 152px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-3xl) 0px var(--padding-3xl-5);
    box-sizing: border-box;
  }
  .sourceName {
    position: relative;
    font-size: var(--buttons-small-dg-btn-s-regular-size);
    line-height: 17px;
    font-family: var(--header-3-h3-s-semi-bold);
    color: var(--theme-light-text-dark);
    text-align: left;
    display: inline-block;
    min-width: 92px;
  }
  .textBox {
    cursor: pointer;
    border: 0.5px solid var(--theme-light-stroke);
    padding: var(--padding-8xs-5) var(--padding-26xl);
    background-color: transparent;
    border-radius: var(--br-8xs);
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5) inset;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .textBox:hover {
    background-color: var(--color-gray-200);
    border: 0.5px solid var(--color-gray-100);
    box-sizing: border-box;
  }
  .buttonDisplay {
    border-radius: var(--br-8xs);
    background-color: var(--theme-light-btn-control-off);
    box-shadow: var(--dg-shadows-new);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-xl) var(--padding-4xs-5);
    gap: var(--gap-xs);
    text-align: left;
    font-size: var(--buttons-large-dgbtn-l-regular-size);
    color: var(--theme-light-text-dark);
    font-family: var(--header-3-h3-s-semi-bold);
  }
</style>
