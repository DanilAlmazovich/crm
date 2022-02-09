<template>
    <div>
        <div class="flex flex-col items-center px-10 py-4">
            <p class="text-base text-gray-800 flex flex-col items-center mb-4">
                <span class="leading-none text-lg font-medium mb-1">Вы уверены</span>
                <span class="leading-none text-lg font-medium">что хотите выполнить это действие?</span>
            </p>
        </div>
        <div class="flex justify-center items-center px-5 pb-4">
            <button class="text-white bg-blue-300 rounded-lg text-base mr-10 px-10 py-2" @click.prevent="$modal.confirm()">Да</button>
            <button @click="$modal.close('question')" class="border-gray-300 rounded-lg border text-base ml-10 px-10 py-2">Нет</button>
        </div>
    </div>
</template>