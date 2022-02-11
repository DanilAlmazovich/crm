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
                :maxHeight="600"
                :id="id"
                :options="options"
                :internal-search="false"
                @search-change="asyncFind"
                track-by="name" label="name"
                :clear-on-select="false"
                :preserve-search="true"
        ><template v-slot:noResult><span>По поиску нет результата</span></template></multiselect>
    </div>
</template>

<script>
    export default {
        props: {
            searchPath: {
                type: String,
                default: ''
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
                options: []
//                q: ''
            }
        },

        created() {
            this.asyncFind()
        },

        computed: {
            selected: {
                get() {
                    return this.modelValue
                },
                set(val) {
                    this.$emit('update:modelValue', val)
                }
            }
        },
        methods: {
            asyncFind (query) {
                let params = {}
                params['keywords'] = query
                this.$axios
                    .get(`/${this.searchPath}/search`, {params: params})
                    .then((response) => {
//                    let options = response.data.map(item => ({
//                        id: item.id,
//                        name: item.name,
//                        quantity: item.quantity,
//                    }))
//                        this.options = options
                        this.options = response.data
                    })
            },
        }
    };
</script>