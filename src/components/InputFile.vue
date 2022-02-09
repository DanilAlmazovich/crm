<template>
    <div class="mb-3 w-120">
        <label
                v-if="labelText"
                :for="id"
                class="mb-1 ml-2 text-sm text-gray-800 font-medium cursor-pointer"
        ><span :class="{'after:content-star after:ml-0.5 after:text-red-500': required}">{{
            labelText
            }}</span></label
        >
        <div class="flex items-center">
            <input class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                   type="file"
                   :id="id"
                   multiple="multiple"
                   @change="onChangeFileUpload"
            />
            <div v-if="url || modelValue">
                <img class="w-8 h-8" :src="url || asset(modelValue)" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            modelValue: {
                type: [File, String],
            },
            id: {
                type: String,
                default: "",
            },
            labelText: String,
            required: Boolean
        },

        data() {
            return {
                image: '',
                url: ''
            };
        },

        methods: {
            onChangeFileUpload(e) {
                this.image = e.target.files[0]
                this.url = URL.createObjectURL(e.target.files[0])
                this.$emit('update:modelValue', this.image)
            },
        }
    };
</script>