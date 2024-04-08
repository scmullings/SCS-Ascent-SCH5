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
    min-height: 100vh;
	height: 100vh;
	max-height: 100vh;
	min-width: 100vw;
	width: 100vw;
	max-width: 100vw;
	overflow: auto;
  }
  .mainPage {
    min-height: 100vh;
	height: 100vh;
	max-height: 100vh;
	min-width: 100vw;
	width: 100vw;
	max-width: 100vw;
	overflow: auto;
  }
</style>
