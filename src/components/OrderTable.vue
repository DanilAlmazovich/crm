<template>
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
                Номер телефона
            </th>
            <th
                    class="px-4 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
            >
                Адрес доставки
            </th>
            <th
                    class="px-4 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
            >
                Время доставки
            </th>
            <th
                    class="px-4 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
            >
                Статус
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
                <p class="text-gray-900 whitespace-no-wrap">{{ item.full_name }}</p>
            </td>
            <td class="px-4 py-2 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">
                    {{ item.phone_number }}
                </p>
            </td>
            <td class="px-4 py-2 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">
                    {{ item.address }}
                </p>
            </td>
            <td class="px-4 py-2 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">
                    {{ item.delivery_time }}
                </p>
            </td>
            <td class="px-4 py-2 border-b border-gray-200 bg-white text-sm">
                <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span aria-hidden class="absolute inset-0 opacity-50 rounded-full" :class="`bg-${status[item.status - 1].color}`"></span>
                    <span class="relative">{{ status[item.status - 1].title }}</span>
                </span>
                <!--<p class="text-gray-900 whitespace-no-wrap">-->
                    <!--{{ item.status }}-->
                <!--</p>-->
            </td>
            <!--<td class="px-4 py-2 border-b border-gray-200 bg-white text-sm">-->
            <!--<div v-if="item.image" v-viewer="{ movable: false, navbar: false, toolbar: false }"-->
            <!--class="w-8 h-8 rounded-full border-2 border-gray-50 shadow overflow-hidden cursor-pointer">-->
            <!--<img :src="asset(item.image)" alt="..."/>-->
            <!--</div>-->
            <!--<div class="rounded-full shadow overflow-hidden w-8 h-8" v-else>-->
            <!--<icon name="default-image" class="fill-current text-gray-300"/>-->
            <!--</div>-->
            <!--</td>-->
            <td class="px-4 py-2 border-b border-gray-200 bg-white text-sm w-40">
                <div class="flex item-center justify-end pr-2">
                    <router-link
                            :to="`/orders/show/${item.id}`"
                            class="w-5 text-gray-600 mr-3 transition duration-200 hover:text-blue-300"
                    >
                        <icon class="fill-current" name="eye"/>
                    </router-link>
                    <router-link
                            :to="`/orders/edit/${item.id}`"
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
                status: [
                    {
                        color: 'green-300',
                        title: 'Новый'
                    },
                    {
                        color: 'blue-300',
                        title: 'В процессе'
                    },
                    {
                        color: 'white',
                        title: 'Завершён'
                    }
                ]
            }
        },
        methods: {
            deleteItem(id) {
                this.$emit('delete', id)
            }
        }
    };
</script>
