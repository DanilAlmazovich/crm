<template>
    <layout>
        <div class="py-8 px-8" v-if="data">
            <breadcrumbs class="py-2" :title="data['name'] || data['full_name']"/>
            <div class="py-8">
                <div v-for="(dataItem, key) in data" :key="dataItem">
                    <div class="flex items-center mb-4 pb-2" v-if="typeof(dataItem) != 'object'">
                        <div class="w-52">
                            <span class="text-gray-500 font-semibold mr-10">{{ fieldsName[$route.path.split('/')['1']][key] }}:</span>
                        </div>
                        <div>
                            <span class="text-black">{{ dataItem }}</span>
                        </div>
                    </div>
                    <div v-else class="py-4">
                        <div class="w-52">
                            <span class="text-gray-800 font-semibold mr-10">{{ itemsTitle[key] }}:</span>
                        </div>
                        <div class="flex py-2 flex-wrap mb-4">
                            <div v-for="(item, k) in dataItem" :key="k" class="border border-blue-300 border-solid px-6 mr-4 py-2 rounded">
                                <div class="flex items-center py-2">
                                    <div class="w-52">
                                        <span class="text-gray-800 font-semibold mr-10">{{ fieldsName[$route.path.split('/')['1']][key][0] }}:</span>
                                    </div>
                                    <div>
                                        <span class="text-black">{{ k }}</span>
                                    </div>
                                </div>
                                <div class="flex items-center py-2">
                                    <div class="w-52">
                                        <span class="text-gray-800 font-semibold mr-10">{{ fieldsName[$route.path.split('/')['1']][key][1] }}:</span>
                                    </div>
                                    <div>
                                        <span class="text-black">{{ item }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </layout>
</template>

<script>
    export default {
        data() {
            return {
                data: null,
                itemsTitle: {
                    inventory_items: 'Список инвентаря',
                    bouquets: 'Список букетов'
                },
                fieldsName: {
                    orders: {
                        created_at: 'Дата создания',
                        id: '№',
                        phone_number: 'Номер телефона',
                        full_name: 'Название',
                        address: 'Адрес доставки',
                        delivery_time: 'Время доставки',
                        status: 'Статус',
                        updated_at: 'Дата изменения',
                        bouquets: {
                            0: 'Букет',
                            1: 'Цена'
                        }
                    },
                    inventories: {
                        created_at: 'Дата создания',
                        id: '№',
                        image_src: 'Изображение',
                        name: 'Название',
                        quantity: 'Количество',
                        updated_at: 'Дата изменения'
                    },
                    bouquets: {
                        created_at: 'Дата создания',
                        id: '№',
                        image_src: 'Изображение',
                        name: 'Название',
                        price: 'Цена',
                        updated_at: 'Дата изменения',
                        inventory_items: {
                            0: 'Цветок',
                            1: 'Количество'
                        }
                    }
                },
            }
        },
        created() {
            this.getItem()

        },
        methods: {
            getItem() {
                this.$axios
                    .get(`/${this.$route.path.split('/')['1']}/${this.$route.params.id}/show`)
                    .then((response) => {
                        this.data = response.data
                        this.data['created_at'] = this.moment(this.data['created_at']).format('LLL')
                        this.data['updated_at'] = this.moment(this.data['updated_at']).format('LLL')
                    })
            }
        },
    };
</script>
