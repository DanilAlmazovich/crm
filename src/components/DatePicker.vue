<template>
    <div>
        <label
                for="date"
                class="mb-1 ml-2 text-sm text-gray-800 font-medium cursor-pointer"
        >Время доставки</label
        >
        <datepicker
                class="w-120 date-picker"
                v-model="date"
                locale="ru"
                :enableTimePicker="false"
                autoApply
                showNowButton
                format="dd-MM-yyyy"
        >
            <template #dp-input="{ value }">
                <div>
                    <input
                            type="text"
                            id="date"
                            class="border border-solid border-gray-300 rounded-lg p-3 text-sm focus:border-gray-400 transition duration-150 w-full text-gray-800"
                            :value="value"
                    />
                </div>
            </template>
        </datepicker>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                date: new Date(),
            }
        },
    };
</script>

<style scoped lang="scss">

</style>