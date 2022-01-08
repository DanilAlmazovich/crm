<template>
  <div class="flex flex-col w-80">
    <label
      v-if="labelText"
      :for="id"
      class="mb-1 ml-2 text-sm text-gray-800 font-medium cursor-pointer"
      ><span class="after:content-star after:ml-0.5 after:text-red-500">{{
        labelText
      }}</span></label
    >
    <input
      :value="modelValue"
      v-maska="maska"
      :id="id"
      ref="input"
      :type="type"
      :placeholder="placeholder"
      class="border border-solid border-gray-300 rounded-lg p-3 text-sm focus:border-gray-400 transition duration-150 w-full text-gray-800 w-[600px]"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <p class="text-sm text-red-600 pl-2" v-if="errorMessage">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script>
import { maska } from "maska";

export default {
  directives: { maska },
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
    labelText: String,
    type: {
      type: String,
      default: "text",
    },
    errorMessage: String,
    placeholder: String,
    maska: {
      type: Array,
    },
  },
};
</script>
