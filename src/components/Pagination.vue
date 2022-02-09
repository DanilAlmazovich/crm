<template>
    <nav class="row" v-if="data?.last_page > 1">
        <ul class="justify-content-end flex">
            <li class="">
                <button class="cursor-pointer inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-600 hover:bg-gray-50 disabled:bg-gray-50 disabled:cursor-not-allowed"
                        :disabled="!data?.prev_page_url"
                        @click="changePageTo(data.current_page - 1)">
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                         aria-hidden="true">
                        <path fill-rule="evenodd"
                              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                              clip-rule="evenodd"/>
                    </svg>
                </button>
            </li>
            <template v-for="page in data?.last_page" :key="page">
                <li v-if="page >= (data?.current_page - 3)
                        && (page <= (data?.current_page + 3) && page <= data?.last_page)"
                    class=""
                >
                    <button class="bg-white border-gray-300  hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                            :class="{'bg-gray-50 hover:bg-gray-50 text-blue-300 disabled:cursor-not-allowed' : page === data?.current_page}"
                            :disabled="page === data?.current_page"
                            @click="changePageTo(page)">
                        {{ page }}
                    </button>
                </li>
            </template>

            <li class="">
                <button class="cursor-pointer inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-600 hover:bg-gray-50 disabled:bg-gray-50 disabled:cursor-not-allowed"
                        :disabled="!data?.next_page_url"
                        @click="changePageTo(data.current_page + 1)">
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                         aria-hidden="true">
                        <path fill-rule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clip-rule="evenodd"/>
                    </svg>
                </button>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "pagination",

        props: {
            data: {
                type: Object,
                required: true,
                default: () => ({})
            },
        },
        methods: {
            changePageTo(page) {
                this.$router.push({path: 'inventories', query: {page: page}})
                this.$emit('change', {page: page})
            },
        }
    }
</script>