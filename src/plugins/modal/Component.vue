<template>
    <transition name="modal-fade">
        <div class="modal-container fixed h-screen w-full top-0 left-0 flex items-center"
                v-if="show"
                :class="confirmed ? 'z-40' : 'z-100'">
            <div v-if="typeMenu">
                <slot name="menu"/>
            </div>
            <div v-if="!typeMenu" class="modal-block relative rounded-xl bg-white mb-8 py-5 px-6 max-h-full overflow-y-auto scrollbar">
                <div class="flex justify-between items-center">
                    <div class="mr-4">
                        <slot name="title"/>
                    </div>
                    <button v-if="closeButton"
                            @click="confirmed ? $modal.question().then(() => close()) : close()"
                            class="button-close close flex items-center">
                        <icon name="close"/>
                        <span class="text-red-400 ml-3" v-if="closeText">Закрыть</span>
                    </button>
                </div>
                <slot :data="slotData"/>
            </div>
            <div class="absolute h-full w-full z-back blackout top-0"
                    v-if="show"
                    @click="close"/>
        </div>
    </transition>
</template>

<script>
    import modals from "./modals";

    export default {
        props: {
            name: {
                type: String,
                default: "",
            },
            closeButton: {
                type: Boolean,
                default: true,
            },
            closeText: {
                type: Boolean,
                default: false,
            },
            confirmed: {
                type: Boolean,
                default: false,
            },
            typeMenu: {
                type: Boolean,
                default: false,
            }
        },
        data() {
            return {
                show: false,
                slotData: {},
            };
        },
        methods: {
            close() {
                this.$modal.close(this.name);
            },
        },
        mounted() {
            modals.$on("close", (name) => {
                if (name === this.name) {
                    this.show = false;
                }
            });
            modals.$on("open", (name, data) => {
                if (name === this.name) {
                    this.show = true;
                    this.slotData = data;
                }
            });
        },
    };
</script>
<style scoped>
    .z-back {
        z-index: -1;
    }

    .blackout {
        background: rgba(220, 220, 220, 0.45);
    }

    .modal-fade-enter-active,
    .modal-fade-leave-active {
        transition: opacity 0.3s;
    }

    .modal-fade-enter-from,
    .modal-fade-leave-to {
        opacity: 0;
    }
</style>
