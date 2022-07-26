<template>
  <div class="justify-start">
    <button
      type="button"
      class="inline-flex mx-4 px-4 rounded-md border border-transparent bg-gray-400 py-2 text-lg font-bold text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:w-auto"
      ref="CreateApplication"
      @click="getUploadApp()"
    >
      Active
    </button>
    <button
      type="button"
      class="inline-flex rounded-md border border-transparent bg-gray-400 px-4 py-2 text-lg font-bold text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:w-auto"
      ref="CreateApplication"
      @click="getInactiveUpload()"
    >
      Inactive
    </button>
  </div>
  <div class="mt-2 flex ml-24 flex-col">
    <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle">
        <diV class="sr-only"> {{ uploads }}</diV>
        <div class="overflow-hidden">
          <table class="min-w-full divide-y divide-gray-300">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8"
                >
                  Id
                </th>
                <th
                  scope="col"
                  class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8"
                >
                  NUMBER
                </th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  LOAN_STATE_DATE
                </th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  STAFF_NO
                </th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  STAFF_STATUS
                </th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  AMOUNT_RECOMMEND
                </th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  DURATION_RECOMMEND
                </th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  FULL_NAME
                </th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  CREDIT_MALL
                </th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  STATUS
                </th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 bg-white">
              <tr v-for="(uploads, index) in uploadData" :key="index">
                <td
                  class="whitespace-nowrap py-3.5 pl-4 pr-3 text-sm text-left font-medium text-gray-500 sm:pl-6 lg:pl-8"
                >
                  {{ uploads.id }}
                </td>
                <td
                  class="whitespace-nowrap py-3.5 pl-4 pr-3 text-sm text-left font-medium text-gray-900 sm:pl-6 lg:pl-8"
                >
                  {{ uploads.number }}
                </td>
                <td
                  class="whitespace-nowrap px-3 py-3.5 text-sm text-left text-gray-500"
                >
                  {{ uploads.loan_start_date }}
                </td>
                <td
                  class="whitespace-nowrap px-3 py-3.5 text-sm text-left text-gray-500"
                >
                  {{ uploads.staff_no }}
                </td>
                <td
                  class="whitespace-nowrap px-3 py-3.5 text-sm text-left text-gray-500"
                >
                  {{ uploads.staff_status }}
                </td>
                <td
                  class="whitespace-nowrap px-3 py-3.5 text-sm text-left text-gray-500"
                >
                  {{ uploads.amount_recommended }}
                </td>
                <td
                  class="whitespace-nowrap px-3 py-3.5 text-sm text-left text-gray-500"
                >
                  {{ uploads.duration_recommended }}
                </td>
                <td
                  class="whitespace-nowrap px-3 py-3.5 text-sm text-left text-gray-500"
                >
                  {{ uploads.full_name }}
                </td>
                <td
                  class="whitespace-nowrap px-3 py-3.5 text-sm text-left text-gray-500"
                >
                  {{ uploads.credit_mall }}
                </td>
                <td
                  class="whitespace-nowrap px-3 py-3.5 text-sm text-left text-gray-500"
                >
                  {{ uploads.status }}
                </td>
                <!-- <td
                  class="whitespace-nowrap px-3 py-3.5 text-sm text-left text-gray-500"
                  @click="setIsTable(true)"
                >
                  {{ uploads.request_status }}
                </td> -->
                <td
                  class="whitespace-nowrap px-3 py-3.5 text-sm text-left text-gray-500"
                >
                  <button
                    type="button"
                    class="rounded-md border border-transparent bg-gray-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:w-auto"
                    ref="CreateApplication"
                    @click="submitApp()"
                  >
                    Submit
                  </button>
                </td>
                <!-- <td
                  class="whitespace-nowrap px-3 py-3.5 text-sm text-left text-gray-500"
                  @click="setIsTable(true)"
                ></td> -->
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import LocalStorageService from "../APIs/token";
export default {
  name: "UploadData",
  data() {
    return {
      uploads: [],
      UploadData: [],
      sub: {
        eligible: [1, 2, 3],
      },
    };
  },
  props: ["appUploadData"],

  methods: {
    getUploadApp() {
      const uploadAPI = axios.create({
        baseURL: "https://api.sandbox.pavelon.com",
        headers: {
          Authorization: "Bearer " + LocalStorageService.getAccessToken(),
          "x-api-key": "x64cRjHA3240SSdfdk",
          "x-api-version": "v3",
          "xbs-token": LocalStorageService.getXbsToken(),
        },
      });

      // extAPI.interceptors.request.use((config) => {
      //   config.headers["Authorization"] =
      //     "Bearer " + localStorage.getItem("token");
      // });

      uploadAPI
        .get("api/cmlcredit/Active")
        .then((response) => {
          // this.getCreditApp = response.data.pageItems;
          this.uploads = response.data;
          this.uploadData = this.uploads;
        })
        .catch((error) => {
          console.log("There was an error:", error.data);
        });
    },
    getInactiveUpload() {
      const inactiveUploadAPI = axios.create({
        baseURL: "https://api.sandbox.pavelon.com",
        headers: {
          Authorization: "Bearer " + LocalStorageService.getAccessToken(),
          "x-api-key": "x64cRjHA3240SSdfdk",
          "x-api-version": "v3",
          "xbs-token": LocalStorageService.getXbsToken(),
        },
      });

      // extAPI.interceptors.request.use((config) => {
      //   config.headers["Authorization"] =
      //     "Bearer " + localStorage.getItem("token");
      // });

      inactiveUploadAPI
        .get("api/cmlcredit/Inactive")
        .then((response) => {
          // this.getCreditApp = response.data.pageItems;
          this.uploads = response.data;
          this.uploadData = this.uploads;
        })
        .catch((error) => {
          console.log("There was an error:", error.data);
        });
    },
    submitApp() {
      const submitAPI = axios.create({
        baseURL: "https://api.sandbox.pavelon.com",
        headers: {
          Authorization: "Bearer " + LocalStorageService.getAccessToken(),
          "x-api-key": "x64cRjHA3240SSdfdk",
          "x-api-version": "v3",
          "xbs-token": LocalStorageService.getXbsToken(),
        },
      });

      // isTable.value = false;
      submitAPI
        .post(`/api/cmlcredit`, this.sub)
        .then((response) => {
          this.sub = response.data;
        })
        .catch((error) => {
          console.log("There was an error:", error.data);
        });
    },
  },
  mounted() {
    this.getUploadApp();
  },
};
</script>

<style></style>
