<template>
  <button
    :type="type"
    class="text-sm text-center font-medium flex items-center justify-center disabled:cursor-not-allowed hover:bg-opacity-75 disabled:bg-opacity-100 transition duration-200 text-white"
    :disabled="disabled"
  >
    <spinner v-if="disabled"></spinner>
    <slot v-else />
  </button>
</template>

<script>
import Spinner from "@/components/Spinner.vue";
export default {
  components: {
    Spinner,
  },
  props: {
    type: {
      type: String,
      default: "submit",
    },
    disabled: Boolean,
  },
};
</script>
