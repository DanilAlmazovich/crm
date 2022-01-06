<template>
  <router-link
    :to="url"
    class="flex items-center mb-6 hover:text-gray-400 transition duration-150"
    :class="url === $route.path ? 'text-gray-400' : 'text-gray-800'"
  >
    <icon :name="icon" class="w-5 h-5 fill-current mr-2" />
    <span class="font-semibold whitespace-nowrap text-sm">{{ title }}</span>
  </router-link>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    url: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
  },
};
</script>
