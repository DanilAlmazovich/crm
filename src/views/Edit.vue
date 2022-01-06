<template>
    <layout>
        <div class="py-8 px-8">
            <h1 class="font-semibold text-lg">Регистрация заказа</h1>
            <button @click="$modal.open('auth')">fdsfsdfs</button>
            <form action="" class="py-8">
                <div class="mb-8" v-for="field in fields[$route.path.split('/')['1']]" :key="field.title">
                    <component class="w-120" :options="field.options" :type="field.type" :maska="field.mask"
                               :labelText="field.title" :is="`v-${field.component}`"/>
                </div>
                <div class="py-8">
                    <v-button class="bg-blue-300 p-3 w-44 rounded-lg">Сохранить</v-button>
                </div>
            </form>
            <modal name="auth">
                <template #title>
                    <h1>Here might be a page title</h1>
                </template>
                <div>fdsfdsfdsf</div>
            </modal>
        </div>
    </layout>
</template>

<script>
    import VInputFile from '@/components/InputFile'
    import VDatePicker from '@/components/DatePicker'
    import VSelect from '@/components/Select'
    export default {
        name: "",
        components: {
            VInputFile,
            VDatePicker,
            VSelect
        },
        mounted() {
            console.log(this.$route.path.split('/')['1'])
        },
        data() {
            return {
                fields: {
                    orders: [
                        {
                            title: 'ФИО',
                            component: 'input',
                            type: 'text',
                        },
                        {
                            title: 'Адрес доставки',
                            component: 'input',
                            type: 'text',
                        },
                        {
                            title: 'Номер телефона',
                            component: 'input',
                            type: 'text',
                            mask: ['+996 (###) ##-##-##', '+996 (###) ##-##-##'],
                        },
                        {
                            title: 'Время доставки',
                            component: 'date-picker',
                        },
                        {
                            title: 'Статус',
                            component: 'select',
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
                            ]
                        },
                        {
                            title: 'ФИО',
                            component: 'input-file',
                        },
                    ],
                    inventory: [
                        {
                            title: 'Название',
                            component: 'input',
                            type: 'text',
                        },
                        {
                            title: 'Количество',
                            component: 'input',
                            type: 'text',
                        },
                        {
                            title: 'Изображение',
                            component: 'input-file',
                        }
                    ],
                    bouquets: [
                        {
                            title: 'Название',
                            component: 'input',
                            type: 'text',
                        },
                        {
                            title: 'Цена',
                            component: 'input',
                            type: 'text',
                        },
                        {
                            title: 'Цветок',
                            component: 'select',
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
                            ]
                        },
                        {
                            title: 'Количество',
                            component: 'input',
                            type: 'text',
                        },

                    ]
                }
            }
        },
    };
</script>
