<template>
  <section id="app">
    <section id="wrap">
      <article id="content">
        <transition name="slide-left" mode="in-out">
          <router-view></router-view>
        </transition>
        <!-- set progressbar -->
        <vue-progress-bar></vue-progress-bar>
      </article>
    </section>
  </section>
</template>

<script>
export default {
  name: "CBKTRN0100000000V",
  mounted() {
    this.$Progress.finish();
  },

  created() {
    this.$Progress.start();
    this.$router.beforeEach((to, from, next) => {
      if (to.meta.progress !== undefined) {
        const meta = to.meta.progress;

        this.$Progress.parseMeta(meta);
      }
      this.$Progress.start();
      next();
    });
    this.$router.afterEach((to, from) => {
      this.$Progress.finish();
    });
  }
};
</script>

<style lang="scss">
// Slide Transition
.slide-left-enter-active,
.slide-right-leave-active {
  transition: all 0.4s ease;
  transition-timing-function: cubic-bezier(1, 0.5, 0.8, 1);
  overflow: hidden;
}

.slide-left-leave-active,
.slide-right-enter-active {
  transition: all 0.1s ease;
  transition-timing-function: cubic-bezier(1, 0.5, 0.8, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 1;
  transform: translateX(400px);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 1;
  transform: translateX(0px);
}

html,
body,
#app,
section,
article {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #fff;

  #wrap {
    display: flex;
    height: 100%;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;

    #content {
      .contents {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 20px;
        right: 20px;
      }
    }
  }
}
</style>
