<template>
  <router-link
    :to="`/${url}`"
    class="flex items-center mb-6 transition duration-150"
    :class="`/${url}` === $route.path && url === $route.path.split('/')[1]  ? 'text-blue-300 hover:text-blue-300' : 'text-gray-800 hover:text-gray-900'"
  >
    <icon :name="icon" class="w-5 h-5 fill-current mr-2" />
    <span class="font-semibold text-sm min-w-max border-b-2 leading-snug" :class="url === $route.path.split('/')[1] ? 'border-blue-300' : 'border-transparent'">{{ title }}</span>
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
