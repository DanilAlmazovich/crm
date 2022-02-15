<template>
    <layout>
        <div class="py-8 px-8"  v-cloak>
            <table-header/>
            <div v-if="options[$route.path]?.items?.data?.length && !loading">
                <div class="py-6">
                    <component @delete="deleteItem" :is="`${options[$route.path].component}-table`" :table-data="options[$route.path].items"/>
                </div>
                <div class="flex justify-end pt-8">
                    <pagination :data="options[$route.path]?.items"/>
                </div>
            </div>
            <div class="py-12" v-if="!options[$route.path]?.items?.data?.length && !loading">
                <div class="py-4 px-4 w-full border rounded-lg border-solid border-blue-300">
                    <span class="font-medium text-blue-300">Нет данных</span>
                </div>
            </div>
            <loading-content v-if="loading"/>
            <modal name="filter" class="justify-end" type-menu>
                <template v-slot:menu>
                    <filters/>
                </template>
            </modal>
            <modal class="confirmation justify-center" name="question">
                <confirmation/>
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
    import LoadingContent from "@/components/LoadingContent";
    import Filters from "@/components/Filter";
    import Confirmation from "@/components/Confirmation";

    export default {
        components: {
            OrderTable, // eslint-disable-line
            TableHeader,
            InventoryTable, // eslint-disable-line
            BouquetsTable, // eslint-disable-line
            CustomersTable, // eslint-disable-line
            LoadingContent,
            Filters,
            Confirmation
        },
        data() {
            return {
                loading: false,
                options: {
                    '/inventories': {
                        component: 'inventory',
                        items: null
                    },
                    '/bouquets': {
                        component: 'bouquets',
                        items: null
                    },
                    '/customers': {
                        component: 'customers',
                        items: null
                    },
                    '/orders': {
                        component: 'order',
                        items: null
                    },
                },
            }
        },

        created() {
            this.initData()
        },

        updated() {
            this.initData()
        },

        methods: {
            initData() {
                this.loading = true
                this.$axios
                    .get(this.$route.path, {params: this.$route.query})
                    .then((response) => {
                        this.options[this.$route.path].items = response.data
                    })
                    .catch((e) => {
                        console.log(e)
                    })
                    .finally(() => {
                        this.loading = false
                    })
            },
            deleteItem(id) {
                this.$axios
                    .delete(`${this.$route.path}/${id}/delete`)
                    .then(() => {
                        this.initData()
                        this.$notify({title: 'Инвентарь успешно удалён!', type: 'success'})
                    })

            }
        },
    };
</script>
