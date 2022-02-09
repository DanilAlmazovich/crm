<template>
    <layout>
        <div class="py-8 px-8" v-if="form">
            <breadcrumbs class="py-2" :title="titles[$route.path.split('/')['1']]"/>
            <form class="py-8" enctype="multipart/form-data">
                <div class="mb-8"
                     v-for="field in fields[$route.path.split('/')['1']]"
                     :key="field.title">
                    <component
                            class="w-120"
                            :options="field.options"
                            :type="field.type"
                            :maska="field.mask"
                            :labelText="field.title"
                            v-model="form[field.name]"
                            :is="`v-${field.component}`"
                            :required="field.required"
                            :errorMessage="errors ? errors[field.name] : ''"
                    />
                </div>
                <div class="py-8">
                    <v-button class="bg-blue-300 p-3 w-44 rounded-lg" :disabled="loading" @click.prevent="updateData">
                        Сохранить
                    </v-button>
                </div>
            </form>
        </div>
    </layout>
</template>

<script>
    import fields from "../mixins/fields";
    export default {
        mixins: [fields],
        data() {
            return {
                form: null,
                titles: {
                    orders: "Изменение заказа",
                    inventories: "Изменение инвентаря",
                    bouquets: "Изменение букета",
                },
            };
        },

        created() {
            this.getEditData()
        },

        methods: {
            getEditData() {
                this.$axios
                    .get(`/${this.$route.path.split('/')['1']}/${this.$route.params.id}/edit`)
                    .then((response) => {
                        this.form = response.data
                    })
                    .catch(() => {

                    })
            },
            updateData() {
                this.loading = true
                let formData = new FormData()
                for (let key in this.form) {
                    if(key === 'image' && typeof(this.form['image']) === 'string') {
                        console.log('string' + ' ' + key)
                    }else {
                        formData.append(key, this.form[key])
                    }
                }

                this.$axios
                    .post(`/${this.$route.path.split('/')['1']}/${this.$route.params.id}/update`, formData)
                    .then(() => {
                        this.$notify("Инвентарь успешно изменен!")
                        this.getEditData()
                        this.errors = null
                        this.$router.push(`/${this.$route.path.split('/')['1']}`)
                    })
                    .catch((e) => {
                        let errors = {}
                        for (let key in e.data.errors) {
                            errors[key] = e.data.errors[key][0]
                        }
                        this.errors = errors
                    })
                    .finally(() => {
                        this.loading = false
                    })
            },
        }
    };
</script>
