<template>
  <div>
    <label
      for="status"
      class="mb-1 ml-2 text-sm text-gray-800 font-medium cursor-pointer"
      >Статус</label
    >
    <multiselect
      v-model="selected"
      class="app-multiselect w-120"
      :showLabels="false"
      :maxHeight="400"
      id="status"
      :options="options"
      @close="$emit('update:modelValue', this.selected)"
    />
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      modelValue: String
    },
  },
  data() {
    return {
      selected: null,
    };
  },
};
</script>