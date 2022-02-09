<template>
  <div
    class="min-h-screen max-h-screen py-2 px-4 flex flex-col items-start justify-between"
  >
    <div>
      <router-link to="/" class="flex justify-start items-end mb-10">
        <img class="w-12 h-12" src="../assets/logo.png" />
        <span class="text-xl font-bold uppercase text-gray-800">CRM</span>
      </router-link>
      <div class="py-6">
        <sidebar-link
          v-for="link in menuLinks"
          :title="link.title"
          :url="link.url"
          :icon="link.icon"
          :key="link.title"
        />
      </div>
    </div>
    <button class="flex text-gray-500 items-center mb-4">
      <icon name="exit" class="w-5 h-5 fill-current mr-2" />
      <span class="text-sm font-medium mt-1">Exit</span>
    </button>
  </div>
</template>

<script>
import SidebarLink from "@/components/SidebarLink";
export default {
  components: {
    SidebarLink,
  },
  data() {
    return {
      menuLinks: [
        {
          title: 'Главное',
          url: 'orders',
          icon: 'home',
        },
        {
          title: 'Статистика',
          url: 'statistic',
          icon: 'statistic',
        },
        {
          title: 'Инвентарь',
          url: 'inventories',
          icon: 'inventory',
        },
        {
          title: 'Готовые букеты',
          url: 'bouquets',
          icon: 'bouquets',
        },
        {
          title: 'Постоянные клиенты',
          url: 'customers',
          icon: 'customers',
        },
      ],
    };
  },
};
</script>
