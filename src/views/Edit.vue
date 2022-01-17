<template>
    <layout>
        <div class="py-8 px-8">
            <h1 class="font-semibold text-lg">
                {{ titles[$route.path.split('/')['1']] }}
            </h1>
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
    import VInputFile from "@/components/InputFile";
    import VDatePicker from "@/components/DatePicker";
    import VSelect from "@/components/Select";
    export default {
        name: "",
        components: {
            VInputFile,
            VDatePicker,
            VSelect,
        },
        data() {
            return {
                form: {},
                loading: false,
                errors: null,
                titles: {
                    orders: "Регистрация заказа",
                    inventory: "Регистрация инвентаря",
                    bouquets: "Создание букета",
                },
                fields: {
                    orders: [
                        {
                            title: "ФИО",
                            component: "input",
                            type: "text",
                        },
                        {
                            title: "Адрес доставки",
                            component: "input",
                            type: "text",
                        },
                        {
                            title: "Номер телефона",
                            component: "input",
                            type: "text",
                            mask: ["+996 (###) ##-##-##", "+996 (###) ##-##-##"],
                        },
                        {
                            title: "Время доставки",
                            component: "date-picker",
                        },
                        {
                            title: "Статус",
                            component: "select",
                            options: [
                                "list",
                                "of",
                                "options1",
                                "list1",
                                "of1",
                                "options2",
                                "list2",
                                "of2",
                                "options3",
                            ],
                        },
                        {
                            title: "ФИО",
                            component: "input-file",
                        },
                    ],
                    inventory: [
                        {
                            name: 'name',
                            title: "Название",
                            component: "input",
                            type: "text",
                            required: true,
                        },
                        {
                            name: 'quantity',
                            title: "Количество",
                            component: "input",
                            type: "text",
                            required: true,
                        },
                        {
                            name: 'image',
                            title: "Изображение",
                            component: "input-file",
                            required: false,
                        },
                    ],
                    bouquets: [
                        {
                            title: "Название",
                            component: "input",
                            type: "text",
                        },
                        {
                            title: "Цена",
                            component: "input",
                            type: "text",
                        },
                        {
                            title: "Цветок",
                            component: "select",
                            options: [
                                "list",
                                "of",
                                "options1",
                                "list1",
                                "of1",
                                "options2",
                                "list2",
                                "of2",
                                "options3",
                            ],
                        },
                        {
                            title: "Количество",
                            component: "input",
                            type: "text",
                        },
                    ],
                },
            };
        },

        created() {
            console.log(this.$route.params.id)
            this.getEditData()
        },

        methods: {
            getEditData() {
                this.$axios
                    .get(`/inventories/${this.$route.params.id}/edit`)
                    .then((response) => {
                        console.log(response)
                        for (let key in response.data) {
                            this.form[key] = response.data[key]
                        }
                    })
                    .catch(() => {

                    })
            },
            updateData() {
                this.loading = true
                let formData = new FormData()
                for (let key in this.form) {
                    formData.append(key, this.form[key])
                }

                this.$axios
                    .post(`/inventories/${this.$route.params.id}/update`, formData)
                    .then(() => {
                        this.$notify("Инвентарь успешно изменен!")
                        this.getEditData()
                        this.loading = false
                        this.errors = null
                    })
                    .catch((e) => {
                        let errors = {}
                        for (let key in e.data.errors) {
                            errors[key] = e.data.errors[key][0]
                        }
                        this.errors = errors
                        this.loading = false
                    })
            },
        }
    };
</script>
