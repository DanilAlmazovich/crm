<template>
    <div class="flex m-auto min-h-screen px-52">
        <div class="w-1/2 flex items-center justify-center">
            <form action="">
                <div class="mb-5">
                    <v-input
                            id="email"
                            type="email"
                            labelText="Email"
                            v-model="form.email"
                            :errorMessage="errors ? errors['email'] : ''"
                            required
                    />
                </div>
                <div class="mb-8">
                    <div class="flex justify-between items-center">
                        <label
                                for="password"
                                class="text-sm ml-2 mb-1 text-gray-800 font-medium cursor-pointer"
                        ><span class="after:content-star after:ml-0.5 after:text-red-500">Password</span></label
                        >
                        <!--<button class="text-sm mb-1 text-gray-800">Forgot password?</button>-->
                    </div>
                    <v-input
                            id="password"
                            type="password"
                            error-message="Invalid password"
                            v-model="form.password"
                            :errorMessage="errors ? errors['password'] : ''"
                    />
                </div>
                <v-button class="bg-blue-300 p-3 w-80 rounded-lg" :disabled="loading" @click.prevent="login"
                >Log in
                </v-button
                >
            </form>
        </div>
        <div class="w-1/2 px-20 flex items-center">
            <img src="../../assets/crm-image.png"/>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value: "",
                form: {
                    email: "",
                    password: "",
                },

                loading: false,
                errors: null,
            };
        },
        methods: {
            login() {
                this.loading = true;
                let formData = new FormData();

                for (let key in this.form) {
                    formData.append(key, this.form[key]);
                }
                this.$axios
                    .get(`${process.env.VUE_APP_URL}/sanctum/csrf-cookie`)
                    .then((res) => {
                        console.log(res);
                        this.$axios
                            .post("/login", formData)
                            .then((res) => {
                                if (res.data.token) {
                                    localStorage.setItem("access-token", res.data.token);
                                this.$router.push({name: "Index"});
                                    this.$store.dispatch("loadMe");
                                }
                            })
                            .catch((e) => {
                                let errors = {}
                                if (e.data.errors) {
                                    for (let key in e.data.errors) {
                                        errors[key] = e.data.errors[key][0]
                                    }
                                } else {
                                    errors['password'] = e.data.message[0]
                                }
                                this.errors = errors
                            })

                    })
                    .finally(() => {
                        this.loading = false;
                    })
            },
        },
    };
</script>