<template>
  <div id="app">
    <router-view />
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
@import "scss/app";
</style>
