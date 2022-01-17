<template>
    <nav class="row" v-if="data">
        <ul class="pagination pagination-sm justify-content-end flex">
            <template v-if="data.prev_page_url">
                <li class="page-item">
                    <a class="page-link"
                       aria-label="Previous"
                       @click="changePageTo(data.current_page - 1)">
                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                    </a>
                </li>
            </template>
            <template v-if="!data.prev_page_url">
                <li class="page-item disabled">
                    <a class="page-link"
                       aria-label="Previous"
                       aria-disabled="true">
                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                    </a>
                </li>
            </template>

            <template v-for="page in data.last_page" :key="page">
                <li v-if="page >= (data.current_page - 3)
                        && (page <= (data.current_page + 3) && page <= data.last_page)"
                    class="page-item"
                    :class="{'active' : page === data.current_page}">
                    <a class="page-link"
                       @click="changePageTo(page)">
                        {{ page }}
                    </a>
                </li>
            </template>

            <template v-if="data.next_page_url">
                <li class="page-item">
                    <a class="page-link"
                       aria-label="Next"
                       @click="changePageTo(data.current_page + 1)">
                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                    </a>
                </li>
            </template>
            <template v-if="!data.next_page_url">
                <li class="page-item disabled">
                    <a class="page-link"
                       aria-label="Next"
                       aria-disabled="true">
                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                    </a>
                </li>
            </template>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "pagination",

        props: {
            data: {
                type: Object,
                required: true
            },

            loadEvent: {
                type: String,
                required: true
            }
        },
        created() {
            console.log(this.$root.$emit)
        },
        methods: {
            changePageTo(page) {
                this.$root.$emit(this.loadEvent, {
                    params: {
                        page: page
                    }
                });
            },
        }
    }
</script>

<style lang="scss">

</style>
