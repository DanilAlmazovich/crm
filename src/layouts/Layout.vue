<template>
  <div class="flex justify-end">
    <div
      class="sidebar bg-gray-50 overflow-hidden fixed left-0"
      :class="showSidebar ? 'w-14/100' : 'w-0'"
    >
      <div>
        <sidebar />
      </div>
    </div>
    <div class="main" :class="showSidebar ? 'w-86/100' : 'w-full'">
      <v-header
        class="bg-gray-50 fixed header"
        :class="showSidebar ? 'w-86/100' : 'w-full'"
        @toggle="toggleSidebar"
      />
      <div class="mt-10 px-8">
        <slot class="mt-10" />
      </div>
    </div>
    <delete-confirmation />
  </div>
</template>

<script>
import VHeader from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import DeleteConfirmation from "@/components/modals/DeleteConfirmation";
export default {
  components: {
    VHeader,
    Sidebar,
    DeleteConfirmation,
  },
  data() {
    return {
      showSidebar: true,
    };
  },
  mounted() {},
  methods: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    },
  },
};
</script>

<style scoped lang="scss">
.header,
.sidebar,
.main {
  transition: 0.4s ease-in-out;
}
</style>
