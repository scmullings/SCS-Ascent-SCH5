<template>
  <div :class="$style.startScreen" @click="onStartScreenContainerClick">
    <div :class="$style.tEXT">
      <SCIcon
        sCIconSCIcon="/sc-icon1@2x.png"
        sCIconPosition="relative"
        sCIconMaxHeight="100%"
      />
    </div>
    <section :class="$style.toBeginPress">
      To Begin Press Anywhere On The Screen
    </section>
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import SCIcon from "../components/SCIcon.vue";

  export default defineComponent({
    name: "StartScreen",
    components: { SCIcon },
    methods: {
      onStartScreenContainerClick() {
        this.$router.push("/");
      },
    },
  });
</script>
<style module>
  .tEXT {
    width: 903px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-12xs) 0px 0px;
    box-sizing: border-box;
    max-width: 100%;
  }
  .toBeginPress {
    width: 901px;
    height: 117px;
    position: relative;
    font-size: var(--header-3-h3-s-semi-bold-size);
    letter-spacing: -0.02em;
    line-height: 39px;
    font-weight: 600;
    font-family: var(--buttons-large-dgbtn-l-regular);
    color: var(--theme-light-text-dark);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    max-width: 100%;
  }
  .startScreen {
    width: 100%;
    position: relative;
    background-color: var(--theme-light-bg-page);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 143px var(--padding-xl) 133px;
    box-sizing: border-box;
    gap: 52px;
    letter-spacing: normal;
    cursor: pointer;
  }

  @media screen and (max-width: 750px) {
    .toBeginPress {
      font-size: 26px;
      line-height: 31px;
    }
  }
  @media screen and (max-width: 675px) {
    .startScreen {
      gap: 26px 52px;
    }
  }
  @media screen and (max-width: 450px) {
    .toBeginPress {
      font-size: 20px;
      line-height: 23px;
    }
  }
</style>
