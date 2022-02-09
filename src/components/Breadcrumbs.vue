<template>
    <div class="flex items-center">
        <button @click.prevent="$router.go(-1)" class="text-gray-400 font-medium text-sm">Назад</button>
        <span class="px-1 text-gray-800 font-medium text-base">/</span>
        <span class="text-gray-800 font-semibold text-sm">{{ title }}</span>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: ''
            }
        },
    };
</script>