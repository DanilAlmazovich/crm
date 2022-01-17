<template>
    <layout>
        <div class="py-8 px-8" v-cloak>
            <table-header></table-header>
            <div class="py-6">
                <component @delete="deleteItem" :is="`${options[$route.path].component}-table`" :table-data="options[$route.path].items"/>
            </div>
            <pagination :data="options[$route.path].items" load-event="bla"/>
            <modal name="filter" class="justify-end" type-menu>
                <template v-slot:menu>
                    <div class="h-screen bg-white px-4 py-4 flex flex-col justify-between">
                        <div>
                            <div class="flex justify-between mb-8 items-center">
                                <h1 class="mr-8 font-bold text-lg text-gray-800">Фильтр</h1>
                                <button @click="$modal.close('filter')"
                                        class="button-close close flex items-center">
                                    <icon name="close"/>
                                </button>
                            </div>
                            <div>
                                <div class="mb-4">
                                    <v-date-picker labelText="От" />
                                </div>
                                <div class="mb-4">
                                    <v-date-picker labelText="До" />
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-center">
                            <v-button class="bg-blue-300 py-3 px-8 rounded-lg mr-6" @click="$modal.close('filter')">
                                Применить
                            </v-button>
                            <v-button class="border-gray-800 border text-gray-800 py-3 px-8 rounded-lg" @click="$modal.close('filter')">
                                Отмена
                            </v-button>
                        </div>
                    </div>
                </template>
            </modal>
        </div>
    </layout>
</template>

<script>
    import OrderTable from "@/components/OrderTable"; // eslint-disable-line
    import InventoryTable from "@/components/InventoryTable"; // eslint-disable-line
    import BouquetsTable from "@/components/BouquetsTable"; // eslint-disable-line
    import CustomersTable from "@/components/CustomersTable"; // eslint-disable-line
    import TableHeader from "@/components/TableHeader";
    import VDatePicker from "@/components/DatePicker";

    export default {
        components: {
            OrderTable, // eslint-disable-line
            TableHeader,
            InventoryTable, // eslint-disable-line
            BouquetsTable, // eslint-disable-line
            CustomersTable, // eslint-disable-line
            VDatePicker
        },
        data() {
            return {
                options: {
                    "/inventories": {
                        title: "Новый инвентарь",
                        url: "/inventories",
                        component: "inventory",
                        items: null
                    },
                    "/bouquets": {
                        title: "Новый букет",
                        url: "/bouquets",
                        component: "bouquets",
                        items: null
                    },
                    "/customers": {
                        title: "Постоянные клиенты",
                        url: "/customers",
                        component: "customers",
                        items: null
                    },
                    "/": {
                        title: "Новый заказ",
                        url: "/orders",
                        component: "order",
                    },
                },
            }
        },
        created() {
            this.initData()
        },
        methods: {
            initData() {
                this.$axios
                    .get(this.$route.path) // eslint-disable-line
                    .then((response) => {
                        this.options[this.$route.path].items = response.data
                    })
            },
            deleteItem(id) {
                this.$axios
                    .delete(`/inventories/${id}/delete`)
                    .then(() => {
                        this.initData()
                        this.$notify("Инвентарь успешно удалён!")
                    })
            }
        },
    };
</script>
