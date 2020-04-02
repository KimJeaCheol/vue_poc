<template>
  <div id="WebKeyPad">
    <!-- 금액입력 추후 v-show를 통해 변경 예정 -->
    <div class="Atype">
      <input
        type="number"
        class="inputType"
        v-model="keyPressed"
        placeholder="key test input"
        value="keyPressed"
      />
      <p v-if="keyPressed == null">100,000원</p>
      <p v-else>Key({{ keyPressed }}) is pressed</p>
    </div>

    <!-- 계좌번호 입력 추후 v-show를 통해 변경 예정 -->
    <div class="Btype">
      <ul>
        <li>
          <h2>은행/증권사</h2>
          <p>케이뱅크</p>
        </li>
        <li class="active">
          <h2>계좌번호</h2>
          <p v-if="keyPressed == null">1000119922039</p>
          <p v-else>Key({{ keyPressed }}) is pressed</p>
        </li>
      </ul>
    </div>

    <div class="keyboard">
      <!-- 추후 v-for를 이용하여 최적화 예정 -->
      <table>
        <tbody>
          <tr>
            <td @click="_f_initInputNumber" data-icon="1">1</td>
            <td @click="_f_initInputNumber" data-icon="2">2</td>
            <td @click="_f_initInputNumber" data-icon="3">3</td>
          </tr>
          <tr>
            <td @click="_f_initInputNumber" data-icon="4">4</td>
            <td @click="_f_initInputNumber" data-icon="5">5</td>
            <td @click="_f_initInputNumber" data-icon="6">6</td>
          </tr>
          <tr>
            <td @click="_f_initInputNumber" data-icon="7">7</td>
            <td @click="_f_initInputNumber" data-icon="8">8</td>
            <td @click="_f_initInputNumber" data-icon="9">9</td>
          </tr>
          <tr>
            <td @click="_f_initInputNumber" data-icon="000">
              <span v-if="valueActive">000</span>
            </td>
            <td @click="_f_initInputNumber" data-icon="0">0</td>
            <td @keyup.delete="del" data-icon="del">
              <span v-if="valueActive">삭제</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import { NumericKeyboard, NumericInput, keys } from "vue-numeric-keyboard";

  export default {
    name: "WebKeyPad",
    components: {
      NumericKeyboard,
      NumericInput
    },
    data() {
      return {
        amount: 0,
        valueActive: false,
        keyPressed: null,
        Atype: "Atype"
      };
    },
    methods: {
      //금액이 입력처리 되었을 시
      _f_initInputNumber: function(e) {
        let _dataIcon = e.target.getAttribute("data-icon");

        if (e) {
          console.log(_dataIcon);
        }

        //금액 입력 시, 000 & del 노출
        //this.valueActive = !this.valueActive
      },

      press(key) {
        this.keyPressed = key;
      },
      input(value) {
        this.amount = value;
      },

      reset() {
        this.amount = 10;
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #WebKeyPad {
    padding: 80px 0 0 0;
    box-sizing: border-box;

    &.typeB {
      .Atype {
        display: none;
      }
    }
    &.typeA {
      .Btype {
        display: none;
      }
    }

    .keyboard {
      position: absolute;
      bottom: 55px;
      left: 0px;
      right: 0px;
      height: 300px;
      transform: translateY(0%);
      background: #fff;
      box-sizing: border-box;
      table {
        width: 100%;
        height: 100%;
      }

      td {
        width: 33.333%;
        font-size: 1.5rem;
        box-sizing: border-box;
      }
    }

    .inputType {
      width: 100%;
      font-size: 2rem;
      color: #000;
      text-align: center;
      border: none;
    }

    &.typeB {
      padding: 60px 0 0 0;
      .keyboard {
        left: -20px;
        right: -20px;
        padding: 15px;
        bottom: 0;
        background: #999;

        td {
          font-size: 1.5rem;
          background: #fff;
          border-radius: 5px;
          padding: 10px;
        }
      }

      h2 {
        font-size: 1rem;
        text-align: left;
        font-weight: normal;
        margin: 0;
      }

      ul {
        list-style: none;
        text-align: left;
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        li {
          margin: 0 0 30px 0;

          p {
            height: 45px;
            line-height: 45px;
            border-bottom: 1px solid #333;
            padding: 0;
            margin: 0;
            font-size: 1.3rem;
          }

          &.active {
            p {
              border-bottom: 2px solid #333;
            }
          }
        }
      }
    }
  }
</style>
