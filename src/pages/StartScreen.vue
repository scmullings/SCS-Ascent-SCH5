<template>
  <main :class="$style.startScreen" @click="onStartScreenClick">
    <div :class="$style.clientLogo">
      <SCIcon
        sCIconSCIcon="/sc-icon@2x.png"
        sCIconPosition="relative"
        sCIconMaxHeight="100%"
      />
    </div>
    <section :class="$style.toBeginPress">
      To Begin Press Anywhere On The Screen
    </section>
  </main>
</template>
<script>
  import { defineComponent } from "vue";
  import SCIcon from "../components/SCIcon.vue";

  export default defineComponent({
    name: "StartScreen",
    components: { SCIcon },
    methods: {
      onStartScreenClick() {
        this.$router.push("/main-page");
      },
    },
  });
</script>
<style module>
  .clientLogo {
    width: 622px;
    height: 375px;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--padding-3xs);
    box-sizing: border-box;
  }
  .toBeginPress {
    width: 901px;
    flex: 1;
    position: relative;
    font-size: var(--header-3-h3-s-semi-bold-size);
    letter-spacing: -0.02em;
    line-height: 39px;
    font-weight: 600;
    font-family: var(--header-3-h3-s-semi-bold);
    color: var(--theme-light-text-dark);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .startScreen {
    width: 100%;
    position: relative;
    background-color: var(--theme-light-bg-page);
    height: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-114xl) 302px var(--padding-114xl) 300px;
    box-sizing: border-box;
    gap: 42px;
    cursor: pointer;
  }
</style>
