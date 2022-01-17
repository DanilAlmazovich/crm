<template>
    <div>
        <table class="min-w-full leading-normal" v-if="tableData">
            <thead>
            <tr>
                <th
                        class="px-4 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                    #
                </th>
                <th
                        class="px-4 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                    Название
                </th>
                <th
                        class="px-4 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                    Количество
                </th>
                <th
                        class="px-4 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                    Изображение
                </th>
                <th
                        class="px-4 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                ></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in tableData.data" :key="item.id">
                <td class="px-4 py-4 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap">{{ item.id }}</p>
                </td>
                <td class="px-4 py-4 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap">{{ item.name }}</p>
                </td>
                <td class="px-4 py-4 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap">
                        {{ item.quantity }}<span class="ml-1">шт</span>
                    </p>
                </td>
                <td class="px-4 py-4 border-b border-gray-200 bg-white text-sm">
                    <div class="flex ml-3">
                        <div
                                v-viewer="{ movable: false, navbar: false, toolbar: false }"
                                v-for="image in images"
                                :key="image"
                                class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow overflow-hidden -ml-3"
                        >
                            <img :src="image" alt="..."/>
                        </div>
                    </div>
                </td>
                <td class="px-4 py-4 border-b border-gray-200 bg-white text-sm">
                    <div class="flex item-center justify-center">
                        <router-link
                                :to="`/inventories/show/${item.id}`"
                                class="w-5 mr-3 transition duration-200 hover:text-blue-300"
                        >
                            <icon name="eye"/>
                        </router-link>
                        <router-link
                                :to="`/inventories/edit/${item.id}`"
                                class="w-5 mr-3 transition duration-200 hover:text-blue-300"
                        >
                            <icon name="edit"/>
                        </router-link>
                        <button
                                class="w-5 transition duration-200 hover:text-blue-300"
                                @click.prevent="$modal.question().then(() => deleteItem(item.id))"
                        >
                            <icon name="basket"/>
                        </button>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
        <modal class="confirmation" name="question">
            <div class="flex flex-col items-center px-10">
                <p class="text-base text-gray-900 flex flex-col items-center mb-4">
                    <span class="leading-none">Вы уверены</span>
                    <span class="leading-none">что хотите выполнить это действие?</span>
                </p>
            </div>
            <div class="flex justify-center items-center px-5">
                <button class="text-orange-400 text-base mr-10" @click.prevent="$modal.confirm()">Да</button>
                <button @click="$modal.close('question')" class="text-orange-400 text-base ml-10">Нет</button>
            </div>
        </modal>
    </div>
</template>

<script>
    export default {
        props: {
            tableData: {
                type: Object,
            }
        },
        data() {
            return {
                images: [
                    "https://i1.wp.com/lavka-flowers.ru/wp-content/uploads/2018/04/avtorskiy-30000.jpg?fit=1456%2C1456&ssl=1",
                ],
            }
        },
        methods: {
            deleteItem(id) {
                this.$emit('delete', id)
            }
        }
    }
</script>
