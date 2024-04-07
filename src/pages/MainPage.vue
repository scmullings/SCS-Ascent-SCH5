<template>
  <div :class="$style.mainPage">
    <main :class="$style.bgMain">
      <section :class="$style.upperBannerParent">
        <UpperBanner1 /><DisplayList1 />
      </section>
      <SubpageRoomPC /><SubpageWireless /><SubpageAppleTV /><SubpageTV /><SubpageLaptop /><SubpageInstruction /><SourceList1 />
    </main>
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
  import SubpageInstruction from "../components/FrameComponent.vue";
  import SourceList1 from "../components/SourceList.vue";

  export default defineComponent({
    name: "MainPage",
    components: {
      UpperBanner1,
      DisplayList1,
      SubpageRoomPC,
      SubpageWireless,
      SubpageAppleTV,
      SubpageTV,
      SubpageLaptop,
      SubpageInstruction,
      SourceList1,
    },
  });
</script>
<style module>
  .upperBannerParent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
  }
  .bgMain {
    flex: 1;
    background-color: var(--theme-light-bg-card);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xs);
    max-width: 100%;
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
</style>
