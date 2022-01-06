<template>
  <div class="flex m-auto min-h-screen px-52">
    <div class="w-1/2 flex items-center justify-center">
      <form action="">
        <div class="mb-5">
          <v-input id="email" type="email" labelText="Email" />
        </div>
        <div class="mb-8">
          <div class="flex justify-between items-center">
            <label
              for="password"
              class="text-sm ml-2 mb-1 text-gray-800 font-medium cursor-pointer"
              >Password</label
            >
            <button class="text-sm mb-1 text-gray-800">Forgot password?</button>
          </div>
          <v-input
            id="password"
            type="password"
            error-message="Invalid password"
          />
        </div>
        <v-button class="bg-blue-300" disabled>Log in </v-button>
      </form>
    </div>
    <div class="w-1/2 px-20 flex items-center">
      <img src="../../assets/crm-image.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      value: "",
    };
  },
};
</script>

<style scoped lang="scss"></style>
