<template>
    <div class="flex flex-col">
        <label
                v-if="labelText"
                :for="id"
                class="mb-1 ml-2 text-sm text-gray-800 font-medium cursor-pointer"
        ><span :class="{'after:content-star after:ml-0.5 after:text-red-500': required}">{{
            labelText
            }}</span></label
        >
        <input  :disabled="disabled"
                :value="modelValue || defaultValue"
                :required="required"
                v-maska="maska"
                :id="id"
                ref="input"
                :type="type"
                :placeholder="placeholder"
                class="border border-solid border-gray-300 rounded-lg p-3 text-sm focus:border-gray-400 transition duration-150 w-full text-gray-800 disabled:cursor-not-allowed disabled:bg-gray-50"
                @input="$emit('update:modelValue', $event.target.value)"
        />
        <p class="text-sm text-red-600 pl-2" v-if="errorMessage">
            {{ errorMessage }}
        </p>
    </div>
</template>

<script>
    import {maska} from 'maska'

    export default {
        directives: {maska},
        props: {
            modelValue: {
                type: [Number, String],
                default: '',
            },
            id: {
                type: String,
                default: '',
            },
            labelText: String,
            type: {
                type: String,
                default: 'text',
            },
            errorMessage: String,
            placeholder: String,
            maska: {
                type: Array,
            },
            required: Boolean,
            disabled: {
                type: Boolean,
                default: false
            },
            defaultValue: {
                type: [String, Number],
                default: ''

            }
        },
    };
</script>
