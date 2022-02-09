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
        <div class="flex items-center justify-between">
            <button :disabled="disabled" @click.prevent="minus" class="w-[2.875rem] h-[2.875rem] border border-solid border-gray-300 rounded-lg flex items-center justify-center disabled:cursor-not-allowed disabled:bg-gray-50">
                <span class="text-xl font-semibold">-</span>
            </button>
            <input
                    :disabled="disabled"
                    v-model="count"
                    :required="required"
                    v-maska="maska"
                    :id="id"
                    type="number"
                    ref="input"
                    :placeholder="placeholder"
                    class="border border-solid border-gray-300 rounded-lg p-3 text-sm focus:border-gray-400 transition duration-150 w-full text-gray-800 input-number mx-4 w-[22rem] disabled:cursor-not-allowed disabled:bg-gray-50"
            />
            <button :disabled="disabled" @click.prevent="plus" class="w-[2.875rem] h-[2.875rem] border border-solid border-gray-300 rounded-lg flex items-center justify-center disabled:cursor-not-allowed disabled:bg-gray-50">
                <span class="text-xl font-semibold">+</span>
            </button>
        </div>
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
            disabled: {
                type: Boolean,
                default: false
            },
            modelValue: {
                type: [Number, String],
                default: 0,
            },
            id: {
                type: String,
                default: "",
            },
            labelText: String,
            errorMessage: String,
            placeholder: String,
            maska: {
                type: Array,
            },
            required: Boolean
        },

        computed: {
            count: {
                get() {
                    return this.modelValue
                },
                set(val) {
                    this.$emit('update:modelValue', val)
                }
            }
        },

        methods: {
            plus() {
                this.count++
            },
            minus() {
                if(this.count > 0) {
                    this.count--
                }
            }
        }
    };
</script>
