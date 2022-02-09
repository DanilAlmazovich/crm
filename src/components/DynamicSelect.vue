<template>
    <div class="border-t border-slid pt-4 w-auto">
        <div class="flex" v-for="(item, i) in form" :key="i">
            <div class="pl-4 pr-8 pt-8">
                <span class="font-medium text-blue-400">{{ i + 1 }}.</span>
            </div>
            <div>
                <div class="mb-4">
                    <v-select v-model="item['id']" :options="options" :labelText="labelText[0]" class="w-120"
                              :required="required"/>
                </div>
                <div class="mb-4">
                    <v-counter v-model="item['q']" :labelText="labelText[1]" class="w-120"
                               :disabled="item.id ? false : true" :required="required"/>
                </div>
                <p class="text-sm text-red-600 pl-2" v-if="errorMessage">
                    {{ errorMessage }}
                </p>
            </div>
            <div class="pt-6 px-6 flex">
                <button @click.prevent="addField(i)"
                        class="w-[2.875rem] h-[2.875rem] border border-solid border-blue-300 rounded-lg mr-3 flex items-center justify-center">
                    <icon class="w-4 h-4 text-blue-300 fill-current" name="plus"/>
                </button>
                <button @click.prevent="removeField(i)"
                        class="w-[2.875rem] h-[2.875rem] border border-solid border-red-400 rounded-lg flex items-center justify-center">
                    <icon class="w-4 h-4 text-red-400 fill-current" name="basket"/>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            modelValue: {
                type: [Object, String],
            },
            labelText: {
                type: Array
            },
            options: {
                type: Array
            },
            required: Boolean,
            errorMessage: String,

        },

        data() {
            return {
                form: [],
            };
        },

        created() {
            if (this.modelValue) {
                let items = []
                for (let key in this.modelValue) {
                    items.push({
                        id: key,
                        q: this.modelValue[key]
                    })
                }
                this.form = items
            } else {
                this.form = [{id: null, q: 0}]
            }
        },

        watch: {
            form: {
                handler() {
                    this.change()
                },
                deep: true
            },
        },

        methods: {
            change() {
                let items = {}
                for (let key in this.form) {
                    if (this.form[key].id) {
                        items[this.form[key].id] = this.form[key].q
                    }
                    if (Object.keys(items).length !== 0) {
                        this.$emit('update:modelValue', JSON.stringify(items))
                    }
                }

            },
            addField(index) {
                this.form.splice(index + 1, 0, {id: null, q: 0})
            },
            removeField(index) {
                if(index >= 1) {
                    this.form.splice(index, 1)
                }
            },
        },
    }
</script>