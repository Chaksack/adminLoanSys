<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-gray-50">
    <body class="h-full">
    ```
  -->
  <div
    class="max-w-md my-52 mx-auto w-auto bg-white rounded-lg border border-gray-200 items-center"
  >
    <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          class="mx-auto h-12 w-auto"
          src="../assets/PavelonLogo.png"
          alt="Workflow"
        />
        <p>"Buy Now, Pay Later"</p>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div>
          <form
            class="space-y-6"
            method="POST"
            v-on:submit.prevent="handleSubmit"
          >
            <div>
              <label
                for="email"
                class="block text-sm font-medium text-gray-900"
              >
              </label>
              <div class="mt-1">
                <input
                  placeholder="Email address"
                  id="email"
                  name="email"
                  type="email"
                  v-model="login.email"
                  autocomplete="email"
                  required=""
                  class="form-control appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                for="password"
                class="block text-sm font-medium text-gray-700"
              >
              </label>
              <div class="mt-1">
                <input
                  placeholder="Password"
                  id="password"
                  name="password"
                  type="password"
                  v-model="login.password"
                  autocomplete="current-password"
                  required=""
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  for="remember-me"
                  class="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div class="text-sm">
                <a
                  href="#"
                  class="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  data() {
    return {
      login: { email: "", password: "" },
    };
  },
  methods: {
    handleSubmit() {
      const extAPI = axios.create({
        baseURL: "https://api.sandbox.pavelon.com",
        headers: {
          "x-api-key": "x64cRjHA3240SSdfdk",
          "x-api-version": "v3",
          "ALLOW-ORIGIN": "*",
          "control-allow-headers": "*",
          "control-allow-origin": "*",
        },
      });

      extAPI
        .post("/api/auth/login", {
          email: this.login.email,
          password: this.login.password,
        })
        .then((response) => {
          console.log(response.data);
          localStorage.setItem("xbs_token", response.data.xbs_token);
          localStorage.setItem("token", response.data.access_token);

          this.$router.push("/dashboard");
        })
        .catch((error) => {
          console.log("There was an error:", error.data);
        });
    },
    //   return {
    //   handleSubmit,
    // }
  },
};
</script>

<style></style>
