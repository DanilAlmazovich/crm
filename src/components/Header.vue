<template>
  <div class="flex justify-between py-2 px-4">
    <div class="flex items-center">
      <button @click="$emit('toggle')" class="mr-8">
        <icon name="burger" class="w-6 h-6 fill-current text-gray-800 flex" />
      </button>
    </div>
    <div>
      <button class="flex items-center">
        <span class="text-sm mr-2 font-medium">John Snow</span>
        <span
          class="w-5 h-5border border-gray-300 rounded-full overflow-hidden"
        >
          <img class="m-auto" src="../assets/logo.png" />
        </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  mounted() {
      console.log(this.$route)
  }
};
</script>
