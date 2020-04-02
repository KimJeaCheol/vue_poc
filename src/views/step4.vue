<template>
  <div class="contents step4">
    <!-- Header Type one -->
    <!-- <appHeader>
			<template v-slot:header>
				<a @click="$router.go(-1)">&lt;</a>
				<router-link to="/step2">취소</router-link>
			</template>
		</appHeader> -->
    <appHeader class="" rightBtnName="취소" />

    <div class="comfirm">
      <p class="cmfTxt">
        <!-- <em>{{companyName}}</em>에게<br/>
				<em>{{priceNumber}}</em>을<br/>
				이체하시겠습니까? -->
        <em>삼일기업</em>에게<br />
        <em>23,000,000원</em>을<br />
        이체하시겠습니까?
      </p>
      <p><span>케이뱅크</span>100029930049402</p>
      <p>수수료면제</p>
    </div>

    <div class="inputCompany">
      <p>받는분 통장표기</p>
      <input
        type="text"
        class="inputType"
        v-model="companyName"
        placeholder="test input"
        value="companyName"
      />
      <p class="inputTest">{{ companyName }}(v-model test)</p>
    </div>
    <!-- Footer Button -->
    <FooterButton class="typeD">
      <template v-slot:foot>
        <router-link to="/CBKTRN0100000000V.html">결제요청</router-link>
        <router-link to="/CBKTRN0100000000V.html">이체하기</router-link>
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
  .step4 {
    background: #fff;
  }
</style>
