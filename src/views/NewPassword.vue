<template>
  <div class="container"></div>
  <div
    class="max-w-md my-52 mx-auto w-auto bg-white rounded-lg border border-gray-200 items-center"
  >
    <div
      class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
      <div class="max-w-md w-full space-y-8">
        <div>
          <img
            class="mx-auto h-12 w-auto"
            src="@/assets/PavelonLogo.png"
            alt="Workflow"
          />
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Enter your new password
          </h2>
          <!-- <p class="mt-2 text-center text-sm text-gray-600">
         A reset link would be sent to your email account.
        </p> -->
        </div>
        <form class="mt-10 space-y-4" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div class="rounded-md shadow-sm -space-y-px">
            <div class="mx-auto h-20 w-auto">
              <label for="email-address" class="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required=""
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
            <div class="mx-auto h-20 w-auto">
              <label for="email-address" class="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required=""
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
              />
            </div>

            <div>
              <button
                type="submit"
                class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-slate-900 hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                </span>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewPassword",
  components: {},
};
</script>

<style scoped>
/* .container {
    background-image: url('@/assets/bg.png');
} */
</style>
