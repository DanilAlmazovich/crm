<template>
  <div id="app">
    <router-view />
    <notifications position="bottom right" width="400px" />
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      loading: true,
    };
  },

  created() {
    this.$store
      .dispatch("loadMe")
      .then(() => {
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
      });
  },

  methods: {},
};
</script>

<style lang="scss">
@import "assets/scss/app";
</style>
