<template>
  <div :class="$style.subpageInstructions" data-animate-on-scroll>
    <div :class="$style.instructions">Instructions</div>
      <div :class="$style.selectASource">Select a source to begin.</div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "SubpageInstruction",
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
  });
</script>

<style module>
  .instructions {
    position: relative;
    line-height: 32px;
    font-weight: 600;
  }
  .selectASource {
    align-self: stretch;
    height: 400px;
    position: relative;
    line-height: 32px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .subpageInstructions {
    align-self: stretch;
    overflow-x: auto;
    background-color: var(--theme-light-bg-card);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-xl);
    box-sizing: border-box;
    gap: var(--gap-5xs);
    max-width: 100%;
    z-index: 1;
    text-align: left;
    font-size: var(--subheading-dg-sh-regular-size);
    color: var(--theme-light-text-dark);
    font-family: var(--buttons-large-dgbtn-l-regular);
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

  @media screen and (max-width: 450px) {
    .instructions {
      font-size: var(--font-size-lgi);
      line-height: 26px;
    }

    .selectASource {
      font-size: var(--font-size-lgi);
      line-height: 26px;
    }
  }
</style>
