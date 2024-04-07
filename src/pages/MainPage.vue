<template>
  <div :class="$style.mainPage">
    <section :class="$style.bgMain">
      <div :class="$style.parentBanner"><UpperBanner1 /><DisplayList1 /></div>
      <div :class="$style.subPageArea">
        <SubpageRoomPC /><SubpageWireless /><SubpageAppleTV /><SubpageTV /><SubpageLaptop />
        <div :class="$style.subpageInstructions" data-animate-on-scroll>
          <div :class="$style.instructions">Instructions</div>
          <div :class="$style.selectASource">Select a source to begin.</div>
        </div>
      </div>
      <SourceList1 />
    </section>
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import UpperBanner1 from "../components/UpperBanner.vue";
  import DisplayList1 from "../components/DisplayList.vue";
  import SubpageRoomPC from "../subPages/SubpageRoomPC.vue";
  import SubpageWireless from "../subPages/SubpageWireless.vue";
  import SubpageAppleTV from "../subPages/SubpageAppleTV.vue";
  import SubpageTV from "../subPages/SubpageTV.vue";
  import SubpageLaptop from "../subPages/SubpageLaptop.vue";
  import SourceList1 from "../components/SourceList.vue";

  export default defineComponent({
    name: "MainPage",
    data() {
      return { observer: null };
    },

    mounted() {
      const scrollAnimElements = document.querySelectorAll(
        "[data-animate-on-scroll]"
      );
      this.observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting || entry.intersectionRatio > 0) {
              const targetElement = entry.target;
              targetElement.classList.add(this.$style.animate);
              this.observer.unobserve(targetElement);
            }
          }
        },
        {
          threshold: 0.15,
        }
      );

      for (let i = 0; i < scrollAnimElements.length; i++) {
        this.observer.observe(scrollAnimElements[i]);
      }
    },
    beforeUnmount() {
      this.observer.disconnect();
    },
    components: {
      UpperBanner1,
      DisplayList1,
      SubpageRoomPC,
      SubpageWireless,
      SubpageAppleTV,
      SubpageTV,
      SubpageLaptop,
      SourceList1,
    },
  });
</script>
<style module>
  .parentBanner {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
  }
  .instructions {
    height: 32px;
    position: relative;
    line-height: 32px;
    font-weight: 600;
    display: flex;
    align-items: center;
    z-index: 1;
  }
  .selectASource {
    align-self: stretch;
    height: 440px;
    position: relative;
    line-height: 32px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    margin-top: -596px;
  }
  .subpageInstructions {
    width: 1264px;
    background-color: var(--theme-light-bg-card);
    overflow: hidden;
    display: none;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-xl);
    box-sizing: border-box;
    opacity: 0;
    min-height: 480px;
    max-width: 100%;
    z-index: 0;
  }
  .subpageInstructions.animate {
    animation: 0.25s ease 0s 1 normal forwards slide-in-bottom;
  }

  @keyframes slide-in-bottom {
    0% {
      transform: translateY(200px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  .subPageArea {
    align-self: stretch;
    flex: 1;
    overflow: hidden;
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-5xs);
    box-sizing: border-box;
    gap: var(--gap-5xs);
    max-width: 100%;
  }
  .bgMain {
    flex: 1;
    background-color: var(--theme-light-bg-card);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 496px;
    max-width: 100%;
    text-align: left;
    font-size: var(--subheading-dg-sh-regular-size);
    color: var(--theme-light-text-dark);
    font-family: var(--buttons-large-dgbtn-l-regular);
  }
  .mainPage {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    letter-spacing: normal;
  }

  @media screen and (max-width: 750px) {
    .bgMain {
      gap: 248px 496px;
    }
  }
  @media screen and (max-width: 450px) {
    .instructions {
      font-size: var(--font-size-lgi);
      line-height: 26px;
    }

    .selectASource {
      font-size: var(--font-size-lgi);
      line-height: 26px;
    }

    .bgMain {
      gap: 124px 496px;
    }
  }
</style>
