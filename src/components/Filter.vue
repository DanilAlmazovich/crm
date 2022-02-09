<template>
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
            <button class="border-gray-800 border text-gray-800 py-3 px-8 rounded-lg text-gray-800 text-sm" @click="$modal.close('filter')">
                Отмена
            </button>
        </div>
    </div>
</template>