<template>
  <div :class="$style.mainPage">
    <main :class="$style.bgMain">
      <section :class="$style.upperBannerParent">
        <UpperBanner /><DisplayList />
      </section>
      <SubpageRoomPC /><SubpageWireless /><SubpageAppleTV /><SubpageTV /><SubpageLaptop /><SubpageInstruction />
      <section>
        <SourceList />
      </section>
    </main>
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import UpperBanner from "../components/UpperBanner.vue";
  import DisplayList from "../components/DisplayList.vue";
  import SubpageRoomPC from "../subPages/SubpageRoomPC.vue";
  import SubpageWireless from "../subPages/SubpageWireless.vue";
  import SubpageAppleTV from "../subPages/SubpageAppleTV.vue";
  import SubpageTV from "../subPages/SubpageTV.vue";
  import SubpageLaptop from "../subPages/SubpageLaptop.vue";
  import SubpageInstruction from "../subPages/Instructions.vue";
  import SourceList from "../components/SourceList.vue";

  export default defineComponent({
    name: "MainPage",
    components: {
      UpperBanner,
      DisplayList,
      SubpageRoomPC,
      SubpageWireless,
      SubpageAppleTV,
      SubpageTV,
      SubpageLaptop,
      SubpageInstruction,
      SourceList,
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
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    letter-spacing: normal;
  }
</style>
