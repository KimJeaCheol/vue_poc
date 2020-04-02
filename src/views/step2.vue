<template>
  <div class="contents step2">
    <!-- Header Type one -->
    <appHeader class="" rightBtnName="취소" />

    <!-- contents -->
    <div class="accountList">
      <h2>자주/최근</h2>
      <ul>
        <li>
          <div class="account" @click="_f_accountSelect">
            <!-- 
						<p>{{companyName}}</p>
						<p><span>{{bankName}}</span>{{accountNumber}}</p> 
						-->
            <p>companyName</p>
            <p><span>bankName</span>009992288339920</p>
          </div>
          <div class="favorite" v-bind:class="active" @click="_f_initFavorite">
            <span v-if="active">&starf;</span>
            <span v-else>&star;</span>
          </div>
        </li>
        <li>
          <div class="account" v-bind:class="active" @click="_f_accountSelect">
            <!-- 
						<p>{{companyName}}</p>
						<p><span>{{bankName}}</span>{{accountNumber}}</p> 
						-->
            <p>companyName</p>
            <p><span>bankName</span>009992288339920</p>
          </div>
          <div class="favorite" v-bind:class="active" @click="_f_initFavorite">
            <span v-if="active">&star;</span>
            <span v-else>&starf;</span>
          </div>
        </li>
        <li>
          <div class="account" v-bind:class="active" @click="_f_accountSelect">
            <!-- 
						<p>{{companyName}}</p>
						<p><span>{{bankName}}</span>{{accountNumber}}</p> 
						-->
            <p>companyName</p>
            <p><span>bankName</span>009992288339920</p>
          </div>
          <div class="favorite" v-bind:class="active" @click="_f_initFavorite">
            <span v-if="active">&star;</span>
            <span v-else>&starf;</span>
          </div>
        </li>
      </ul>
    </div>

    <div class="accountList">
      <h2>내계좌</h2>
      <ul>
        <li>
          <div class="account" v-bind:class="active" @click="_f_accountSelect">
            <!-- 
						<p>{{companyName}}</p>
						<p><span>{{bankName}}</span>{{accountNumber}}</p> 
						-->
            <p>companyName</p>
            <p><span>bankName</span>009992288339920</p>
          </div>
          <div class="favorite" v-bind:class="active" @click="_f_initFavorite">
            <span v-if="active">&star;</span>
            <span v-else>&starf;</span>
          </div>
        </li>
      </ul>
    </div>
    <!-- //contents -->

    <!-- Footer Button -->
    <FooterButton class="typeA">
      <template v-slot:foot>
        <router-link to="/step3">계좌번호 직접입력</router-link>
      </template>
    </FooterButton>
  </div>
</template>

<script>
  // @ is an alias to /src
  import appHeader from "@/components/appHeader";
  import FooterButton from "@/components/FooterButton";

  export default {
    name: "step2",
    components: {
      appHeader,
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
  .step2 {
    background: #fff;

    h2 {
      font-size: 1rem;
      text-align: left;
      font-weight: normal;
      margin: 25px 0;
    }

    ul {
      list-style: none;
      text-align: left;
      margin: 0;
      padding: 0;
      box-sizing: border-box;

      li {
        display: flex;
        align-items: center;
        margin: 0 0 15px 0;

        > div {
          flex: auto;
        }

        .account {
          p {
            padding: 0;
            margin: 0;
          }
          p:first-child {
            font-size: 1.3rem;
            margin: 0 0 5px 0;
          }

          p:last-child {
            font-size: 0.8rem;
            color: #ababab;
            font-weight: normal;

            span:first-child {
              margin-right: 10px;
            }
          }
        }
        .favorite {
          text-align: right;
          font-size: 1.5rem;
        }
      }
    }
  }
</style>
