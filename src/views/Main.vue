<template>
  <div class="contents home">
    <!-- Header Type one -->
    <appHeader class="typeA" rightBtnName="취소" />

    <!-- WebKeyPad -->
    <WebKeyPad class="typeA" />

    <!-- Footer Button -->
    <FooterButton>
      <template v-slot:foot>
        <router-link to="/step2">다음</router-link>
      </template>
    </FooterButton>
  </div>
</template>

<script>
  // @ is an alias to /src
  import appHeader from "@/components/appHeader";
  import WebKeyPad from "@/components/WebKeyPad";
  import FooterButton from "@/components/FooterButton";

  export default {
    name: "Main",
    components: {
      appHeader,
      WebKeyPad,
      FooterButton
    }
  };
</script>

<style lang="scss">
  .home {
    background: #fff;
  }
</style>
