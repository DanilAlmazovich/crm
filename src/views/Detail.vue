<template>
    <layout>
        <div class="py-8 px-8" v-if="data">
            <h1 class="font-semibold text-lg mb-2">
                {{ data['name'] }}
            </h1>
            <div class="py-8">
                <div class="flex items-center mb-4 pb-2" v-for="(item, key) in data" :key="item.id">
                    <div class="w-52">
                        <span class="text-gray-800 font-semibold mr-10">{{ fieldsName[key] }}</span>
                    </div>
                    <div>
                        <span class="text-gray-900">{{ item }}</span>
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
                fieldsName: {
                    created_at: 'Дата создания',
                    id: '№',
                    image_src: 'Изображение',
                    name: 'Название',
                    quantity: 'Количество',
                    updated_at: 'Дата изменения'
                }
            }
        },
        created() {
            this.getItem()
        },
        methods: {
            getItem() {
                this.$axios
                    .get(`/inventories/${this.$route.params.id}/show`)
                    .then((response) => {
                        this.data = response.data
                        this.data['created_at'] = this.moment(this.data['created_at']).format('LLL')
                        this.data['updated_at'] = this.moment(this.data['updated_at']).format('LLL')
                    })
            }
        },
    };
</script>
