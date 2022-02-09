<template>
    <div class="flex flex-col ">
        <label
                v-if="labelText"
                :for="id"
                class="mb-1 ml-2 text-sm text-gray-800 font-medium cursor-pointer"
        ><span :class="{'after:content-star after:ml-0.5 after:text-red-500': required}">{{
            labelText
            }}</span></label
        >
        <multiselect
                v-model="selected"
                class="app-multiselect w-120"
                :showLabels="false"
                :maxHeight="400"
                :id="id"
                :options="options"
                :internal-search="false"
                @search-change="asyncFind"
        />
    </div>
</template>

<script>
    export default {
        props: {
            options: {
                type: Array,
                default: () => []
            },
            modelValue: {
                type: [String, Object, Number]
            },
            id: {
                type: String,
                default: "",
            },
            labelText: String,
            required: Boolean
        },

        data() {
            return {
                q: ''
            }
        },

        computed: {
            selected: {
                get() {
                    return this.modelValue
                },
                set(val) {
                    this.$emit('update:modelValue', val)
                    console.log(val)
                }
            }
        },
        methods: {
            asyncFind (query) {
                console.log(query)
                this.q = query
            },
        }
    };
</script>