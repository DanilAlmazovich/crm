<template>
  <table class="min-w-full leading-normal">
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
          ФИО
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
          фотографии
        </th>
        <th
          class="px-4 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
        >
          Статус
        </th>
        <th
          class="px-4 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
        ></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="n in 20" :key="n">
        <td class="px-4 py-4 border-b border-gray-200 bg-white text-sm">
          <p class="text-gray-900 whitespace-no-wrap">{{ n }}</p>
        </td>
        <td class="px-4 py-4 border-b border-gray-200 bg-white text-sm">
          <p class="text-gray-900 whitespace-no-wrap">John Snow</p>
        </td>
        <td class="px-4 py-4 border-b border-gray-200 bg-white text-sm">
          <p class="text-gray-900 whitespace-no-wrap">+996 (777) 777 777</p>
        </td>
        <td class="px-4 py-4 border-b border-gray-200 bg-white text-sm">
          <p class="text-gray-900 whitespace-no-wrap">21 Jump Street</p>
        </td>
        <td class="px-4 py-4 border-b border-gray-200 bg-white text-sm">
          <p class="text-gray-900 whitespace-no-wrap">20-12-2021</p>
        </td>
        <td class="px-4 py-4 border-b border-gray-200 bg-white text-sm">
          <div class="flex ml-3">
            <div
              v-viewer="{ movable: false, navbar: false, toolbar: false }"
              v-for="image in images"
              :key="image"
              class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow overflow-hidden -ml-3"
            >
              <img :src="image" alt="..." />
            </div>
          </div>
        </td>
        <td class="px-4 py-4 border-b border-gray-200 bg-white text-sm">
          <span
            class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
          >
            <span
              aria-hidden
              class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
            ></span>
            <span class="relative">Активный</span>
          </span>
        </td>
        <td class="px-4 py-4 border-b border-gray-200 bg-white text-sm">
          <div class="flex item-center justify-center">
            <button
              class="w-5 mr-3 transition duration-200 hover:text-blue-300"
            >
              <icon name="eye" />
            </button>
            <router-link
              :to="`/orders/${n}`"
              class="w-5 mr-3 transition duration-200 hover:text-blue-300"
            >
              <icon name="edit" />
            </router-link>
            <button
              class="w-5 transition duration-200 hover:text-blue-300"
              @click.prevent="$modal.open('delete-confirmation')"
            >
              <icon name="basket" />
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      images: [
        "https://i1.wp.com/lavka-flowers.ru/wp-content/uploads/2018/04/avtorskiy-30000.jpg?fit=1456%2C1456&ssl=1",
        "https://www.roza4u.ru/image/cache/catalog/buket-bombastic/IMG_0207-1400x1400.jpg",
        "https://www.rosemarkt.ru/resources/data/photos/5cd817df83761/big.jpg",
        "https://proprikol.ru/wp-content/uploads/2020/04/bukety-czvetov-krasivye-kartinki-1.jpg",
      ],
    };
  },
};
</script>
