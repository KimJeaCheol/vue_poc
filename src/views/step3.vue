<template>
  <div class="contents step3">
    <!-- Header Type one -->
    <!-- <appHeader>
			<template v-slot:header>
				<a @click="$router.go(-1)">&lt;</a>
				<router-link to="/step2">취소</router-link>
			</template>
		</appHeader> -->
    <appHeader class="" rightBtnName="취소" />

    <!-- contents -->
    <WebKeyPad class="typeB" />
    <!-- //contents -->

    <!-- Footer Button -->
    <FooterButton class="typeC">
      <template v-slot:foot>
        <router-link to="/step4">확인</router-link>
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
    name: "step2",
    components: {
      appHeader,
      WebKeyPad,
      FooterButton
    },
    props: {
      companyName: String,
      bankName: String,
      accountNumber: Number
    },
    data() {
      return {
        isRouter: false,
        active: true
      };
    },
    methods: {
      _f_initFavorite: function(e) {
        console.log(e.target.tagName);
      },

      _f_accountSelect: function(e) {
        console.log(e.target.tagName);
      }
    }
  };
</script>

<style lang="scss">
  .step3 {
    background: #fff;
  }
</style>
