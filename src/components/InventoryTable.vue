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
                        class="px-4 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-40"
                ></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, i) in tableData.data" :key="item.id">
                <td class="px-4 py-2 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap">{{ i + tableData.from }}</p>
                </td>
                <td class="px-4 py-2 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap">{{ item.name }}</p>
                </td>
                <td class="px-4 py-2 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap">
                        {{ item.quantity }}<span class="ml-1">шт</span>
                    </p>
                </td>
                <td class="px-4 py-2 border-b border-gray-200 bg-white text-sm">
                    <div v-if="item.image" v-viewer="{ movable: false, navbar: false, toolbar: false }"
                         class="w-8 h-8 rounded-full border-2 border-gray-50 shadow overflow-hidden cursor-pointer">
                        <img :src="asset(item.image)" alt="..."/>
                    </div>
                    <div class="rounded-full shadow overflow-hidden w-8 h-8" v-else>
                        <icon name="default-image" class="fill-current text-gray-300"/>
                    </div>
                </td>
                <td class="px-4 py-2 border-b border-gray-200 bg-white text-sm w-40">
                    <div class="flex item-center justify-end pr-2">
                        <router-link
                                :to="`/inventories/show/${item.id}`"
                                class="w-5 text-gray-600 mr-3 transition duration-200 hover:text-blue-300"
                        >
                            <icon class="fill-current" name="eye"/>
                        </router-link>
                        <router-link
                                :to="`/inventories/edit/${item.id}`"
                                class="w-5 text-gray-600 mr-3 transition duration-200 hover:text-blue-300"
                        >
                            <icon class="fill-current" name="edit"/>
                        </router-link>
                        <button
                                class="w-5 text-gray-600 transition duration-200 hover:text-blue-300"
                                @click.prevent="$modal.question().then(() => deleteItem(item.id))"
                        >
                            <icon class="fill-current" name="basket"/>
                        </button>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        props: {
            tableData: {
                type: Object,
            }
        },
        methods: {
            deleteItem(id) {
                this.$emit('delete', id)
            },
        }
    }
</script>
