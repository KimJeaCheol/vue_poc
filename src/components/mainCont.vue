<template>
  <div>
      <div class="topContent">
        <h2><strong>삼일해운(주)님</strong><br>좋은하루 보내세요!</h2>
        <ul>
          <li><router-link to='/'>결제대기<em>0</em></router-link></li>
          <li><router-link to='/'>결제요청<em>0</em></router-link></li>
        </ul>
      </div>

      <div class="noticeArea">
        <router-link to='/'>진행중인 업무가 1건 있습니다.</router-link>
      </div>

    </div>
</template>

<script>
export default {
  name: 'mainCont',
  props: {
    buttonName: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 </style>
