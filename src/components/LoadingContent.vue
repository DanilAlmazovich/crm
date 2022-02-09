<template>
    <div class="py-8">
        <div class="w-full mx-auto" v-for="n in 3" :key="n">
            <div class="animate-pulse flex space-x-4">
                <div class="flex-1 space-y-6 py-1">
                    <div class="h-10 bg-gray-100 rounded"></div>
                    <div class="space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                            <div class="h-8 bg-gray-100 rounded col-span-2"></div>
                            <div class="h-8 bg-gray-100 rounded col-span-1"></div>
                        </div>
                        <div class="h-8 bg-gray-100 rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>