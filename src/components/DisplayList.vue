<template>
  <div :class="$style.displayList">
    <ButtonDisplay1 display1="Display 1" /><ButtonDisplay1
      display1="Display 2"
      propWidth="unset"
      display1MinWidth="80px"
    /><ButtonDisplay1
      display1="Display 3"
      propWidth="unset"
      display1MinWidth="80px"
    /><ButtonDisplay1
      display1="Display 4"
      propWidth="unset"
      display1MinWidth="80px"
    />
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import ButtonDisplay1 from "./ButtonDisplay.vue";

  export default defineComponent({
    name: "DisplayList1",
    components: { ButtonDisplay1 },
  });
</script>
<style module>
  .displayList {
    align-self: stretch;
    background-color: var(--theme-light-bg-page);
    box-shadow: var(--new);
    overflow-x: auto;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: var(--padding-xs) var(--padding-xl);
    gap: var(--gap-3xs);
    text-align: left;
    font-size: var(--buttons-large-dgbtn-l-regular-size);
    color: var(--theme-light-text-dark);
    font-family: var(--subheading-dg-sh-regular);
  }
</style>
