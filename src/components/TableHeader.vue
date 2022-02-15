<template>
    <div>
        <div class="flex items-start justify-between mb-6">
            <h1 class="font-bold text-lg mr-4">{{ title[$route.path].title }}</h1>
            <div class="flex items-center">
                <div
                        class="border border-solid border-gray-300 rounded-lg flex items-center overflow-hidden">
                    <input  v-model="query"
                            type="text"
                            class="py-2 px-3 text-gray-800 text-sm font-semibold border-0 border-r border-solid border-gray-300 focus:border-gray-300"
                            placeholder="Поиск"/>
                    <v-button class="py-2 px-4 text-sm font-semibold border-0 bg-blue-300 text-white flex"
                              @click.prevent="search()">Поиск
                    </v-button>
                </div>
            </div>
        </div>
        <div class="flex justify-between items-center">
            <router-link
                    :to="`${title[$route.path].url}/create`"
                    append
                    class="py-2 px-4 font-semibold border-0 bg-blue-300 text-white flex rounded-lg flex items-center"
            >
                <icon name="plus" class="w-3 h-3 fill-current text-white mr-2"/>
                <span class="text-sm">{{ title[$route.path].createButton }}</span>
            </router-link>
            <div class="flex items-center">
                <v-button
                        class="py-2 px-4 bg-blue-300 rounded-lg mr-4"
                        @click.prevent="$modal.open('filter')"
                >
                    <icon class="w-5 h-5 fill-current text-white" name="excel"
                    />
                </v-button>
                <v-button
                        class="py-2 px-4 bg-blue-300 rounded-lg"
                        @click.prevent="$modal.open('filter')"
                >
                    <icon class="w-5 h-5 fill-current text-white" name="filter"
                    />
                </v-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                query: '',
                title: {
                    '/inventories': {
                        createButton: 'Новый инвентарь',
                        url: '/inventories',
                        title: 'Список инвентаря',
                    },
                    '/bouquets': {
                        createButton: 'Новый букет',
                        url: '/bouquets',
                        title: 'Список готовых букетов',
                    },
                    '/customers': {
                        createButton: 'Новый клиент',
                        url: '/customers',
                        title: 'Список постоянных клиентов',
                    },
                    '/orders': {
                        createButton: 'Новый заказ',
                        url: '/orders',
                        title: 'Список заказов',
                    },
                },
            };
        },
        created() {
            this.query = this.$route.query.keywords
        },
        methods: {
            search() {
                let query = null
                if(this.query.length) {
                    query = {
                        page: 1,
                        keywords: this.query
                    }
                }
                this.$router.push({query})
            }
        }
    };
</script>