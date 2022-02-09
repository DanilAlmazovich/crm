<template>
    <div>
        <label v-if="labelText"
               :for="id"
               class="mb-1 ml-2 text-sm text-gray-800 font-medium cursor-pointer">
            <span :class="{'after:content-star after:ml-0.5 after:text-red-500': required}">{{ labelText
                }}</span></label>
        <datepicker
                class="w-120 date-picker"
                v-model="date"
                locale="ru"
                textInput
                autoApply
                format="dd-MM-yyyy hh:mm"
        >
            <template #dp-input="{ value }">
                <div>
                    <input
                            type="text"
                            :id="id"
                            class="border border-solid border-gray-300 rounded-lg p-3 text-sm focus:border-gray-400 transition duration-150 w-full text-gray-800"
                            :value="value"
                    />
                </div>
            </template>
        </datepicker>
    </div>
</template>

<script>
    export default {
        props: {
            modelValue: {
                type: [String, Date],
                default: new Date(),
            },
            id: {
                type: String,
                default: "",
            },
            labelText: String,
            required: Boolean,
        },

        computed: {
            date: {
                get() {
                    return this.modelValue;
                },
                set(val) {
                    this.$emit('update:modelValue', this.moment(val).format('YYYY.MM.DD HH:mm:ss'))
//                    this.$emit('update:modelValue', this.moment(val).format('LLL'))
                },
            }
        }
    };
</script>