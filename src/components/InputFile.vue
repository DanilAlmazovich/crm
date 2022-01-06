<template>
    <div>
        <div class="flex">
            <div class="mb-3 w-120">
                <label
                        for="formFileMultiple"
                        class="mb-1 ml-2 text-sm text-gray-800 font-medium cursor-pointer"
                >Multiple files input example</label
                >
                <input
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        type="file"
                        id="formFileMultiple"
                        multiple
                />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
    };
</script>

<style scoped lang="scss">

</style>