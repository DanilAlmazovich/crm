<template>
  <layout>
    <div class="py-8 px-8">
      <table-header></table-header>
      <div class="py-6">
        <component :is="`${options[$route.path].component}-table`"/>
      </div>
    </div>
  </layout>
</template>

<script>
import OrderTable from "@/components/OrderTable"; // eslint-disable-line
import InventoryTable from "@/components/InventoryTable"; // eslint-disable-line
import BouquetsTable from "@/components/BouquetsTable"; // eslint-disable-line
import CustomersTable from "@/components/CustomersTable"; // eslint-disable-line
import TableHeader from "@/components/TableHeader";

export default {
  components: {
    OrderTable, // eslint-disable-line
    TableHeader,
    InventoryTable, // eslint-disable-line
    BouquetsTable, // eslint-disable-line
    CustomersTable // eslint-disable-line
  },
  data() {
      return {
          options: {
              '/inventory': {
                  title: 'Новый инвентарь',
                  url: '/inventory',
                  component: 'inventory'
              },
              '/bouquets': {
                  title: 'Новый букет',
                  url: '/bouquets',
                  component: 'bouquets'
              },
              '/customers': {
                  title: 'Постоянные клиенты',
                  url: '/customers',
                  component: 'customers'
              },
              '/': {
                  title: 'Новый заказ',
                  url: '/orders',
                  component: 'order'
              },
          }

      }
  },
  //  created() {
  //    this.initData();
  //  },
  //  methods: {
  //    initData() {
  //      axios.get("/test");
  //    },
  //  },
};
</script>
