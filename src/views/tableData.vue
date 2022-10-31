<template>
  <div class="mt-2 flex ml-24 flex-col">
    <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle">
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
                  Account No
                </th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Name
                </th>
                <!-- <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Client ID
                </th> -->
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Mobile No
                </th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Client Office ID
                </th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Principal Amount
                </th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Status
                </th>
                <!-- <th
                      scope="col"
                      class="relative py-3.5 pl-3 pr-4 sm:pr-6 lg:pr-8"
                    >
                      <span class="sr-only">Edit</span>
                    </th> -->
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 bg-white">
              <tr
                v-for="(credit, index) in tableData[pagination]"
                :key="index"
                @click="setIsTable(true, credit.id)"
              >
                <td
                  class="whitespace-nowrap py-3.5 pl-4 pr-3 text-sm text-left font-medium text-gray-500 sm:pl-6 lg:pl-8"
                  @click="setIsTable(true)"
                >
                  {{ credit.id }}
                </td>
                <td
                  class="whitespace-nowrap py-3.5 pl-4 pr-3 text-sm text-left font-medium text-gray-900 sm:pl-6 lg:pl-8"
                  @click="setIsTable(true)"
                >
                  {{ credit.accountNo }}
                </td>
                <td
                  class="whitespace-nowrap px-3 py-3.5 text-sm text-left text-gray-500"
                  @click="setIsTable(true)"
                >
                  {{ credit.client }}
                </td>
                <td
                  class="whitespace-nowrap px-3 py-3.5 text-sm text-left text-gray-500"
                  @click="setIsTable(true)"
                >
                  {{ credit.mobileNo }}
                </td>
                <td
                  class="whitespace-nowrap px-3 py-3.5 text-sm text-left text-gray-500"
                  @click="setIsTable(true)"
                >
                  {{ credit.productId }}
                </td>
                <td
                  class="whitespace-nowrap px-3 py-3.5 text-sm text-left text-gray-500"
                  @click="setIsTable(true)"
                >
                  {{ credit.productName }}
                </td>
                <td
                  class="whitespace-nowrap px-3 py-3.5 text-sm text-left text-gray-500"
                  @click="setIsTable(true)"
                >
                  {{ credit.principal }}
                </td>
                <td
                  class="whitespace-nowrap px-3 py-3.5 text-sm text-left text-gray-500"
                  @click="setIsTable(true)"
                >
                  {{ credit.refStatus }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <!-- view staff details -->
  <div>
    <TransitionRoot as="template" :show="isTable">
      <Dialog
        as="div"
        :initialFocus="checkDetails"
        class="relative z-10"
        :open="isTable"
        @close="setIsTable = false"
      >
        <div class="fixed inset-0" />

        <div class="fixed inset-0 overflow-hidden">
          <div class="absolute inset-0 overflow-hidden">
            <div
              class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16"
            >
              <TransitionChild
                as="template"
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enter-from="translate-x-full"
                enter-to="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leave-from="translate-x-0"
                leave-to="translate-x-full"
              >
                <DialogPanel class="pointer-events-auto w-screen max-w-2xl">
                  <div
                    class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl"
                  >
                    <div class="px-4 sm:px-6">
                      <div class="flex items-start justify-between">
                        <DialogTitle class="text-lg font-medium text-gray-900">
                          view Application details
                        </DialogTitle>
                        <div class="ml-3 flex h-7 items-center">
                          <div
                            class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                            @click="setIsTable(false)"
                          >
                            <span class="sr-only">Close panel</span>
                            <XIcon class="h-6 w-6" aria-hidden="true" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="relative mt-6 flex-1 px-4 sm:px-6">
                      <!-- Replace with your content -->

                      <div
                        class="bg-white shadow px-4 py-5 sm:rounded-lg lg:p-6"
                      >
                        <div class="lg:grid lg:grid-cols-2 lg:gap-6">
                          <div class="mt-5 md:mt-0 md:col-span-2">
                            <form>
                              <div class="grid grid-cols-6 gap-6">
                                <div class="col-span-6 md:col-span-3">
                                  <label
                                    for="clientId"
                                    class="block text-sm font-medium text-gray-700"
                                    >Client Id</label
                                  >
                                  <p>{{ acc_details.clientId }}</p>
                                </div>
                                <div class="col-span-6 md:col-span-3">
                                  <label
                                    for="accountNo"
                                    class="block text-sm font-medium text-gray-700"
                                  >
                                    Account Number
                                  </label>
                                  <p>{{ acc_details.accountNo }}</p>
                                </div>
                                <div class="col-span-6 md:col-span-3">
                                  <label
                                    for="mobilenumber"
                                    class="block text-sm font-medium text-gray-700"
                                    >Client Account Numbber</label
                                  >
                                  <p>{{ acc_details.clientAccountNo }}</p>
                                </div>
                                <div class="col-span-6 md:col-span-3">
                                  <label
                                    for="full-name"
                                    class="block text-sm font-medium text-gray-700"
                                    >Client Name</label
                                  >
                                  <p>{{ acc_details.clientName }}</p>
                                </div>
                                <div class="col-span-6 md:col-span-3">
                                  <label
                                    for="full-name"
                                    class="block text-sm font-medium text-gray-700"
                                    >Client Office Id</label
                                  >
                                  <p>{{ acc_details.clientOfficeId }}</p>
                                </div>
                                <div class="col-span-6 md:col-span-3">
                                  <label
                                    for="full-name"
                                    class="block text-sm font-medium text-gray-700"
                                  >
                                    Loan Product Id</label
                                  >
                                  <p>{{ acc_details.loanProductId }}</p>
                                </div>
                                <div class="col-span-6 md:col-span-3">
                                  <label
                                    for="full-name"
                                    class="block text-sm font-medium text-gray-700"
                                  >
                                    Loan Product Name</label
                                  >
                                  <p>{{ acc_details.loanProductName }}</p>
                                </div>
                                <div class="col-span-6 md:col-span-3">
                                  <label
                                    for="full-name"
                                    class="block text-sm font-medium text-gray-700"
                                  >
                                    Loan Product Description</label
                                  >
                                  <p>
                                    {{ acc_details.loanProductDescription }}
                                  </p>
                                </div>
                                <div class="col-span-6 md:col-span-3">
                                  <label
                                    for="full-name"
                                    class="block text-sm font-medium text-gray-700"
                                  >
                                    Principal Amount</label
                                  >
                                  <p>{{ acc_details.principal }}</p>
                                </div>
                                <div class="col-span-6 md:col-span-3">
                                  <label
                                    for="mobilenumber"
                                    class="block text-sm font-medium text-gray-700"
                                    >Approved Principal Amount</label
                                  >
                                  <p>{{ acc_details.approvedPrincipal }}</p>
                                </div>
                                <div class="col-span-6 md:col-span-3">
                                  <label
                                    for="mobilenumber"
                                    class="block text-sm font-medium text-gray-700"
                                    >Proposed Principal Amount</label
                                  >
                                  <p>{{ acc_details.proposedPrincipal }}</p>
                                </div>
                                <div class="col-span-6 md:col-span-3">
                                  <label
                                    for="mobilenumber"
                                    class="block text-sm font-medium text-gray-700"
                                    >Net Disbursal Amount</label
                                  >
                                  <p>
                                    {{ acc_details.netDisbursalAmount }}
                                  </p>
                                </div>
                                <div class="col-span-6 md:col-span-3">
                                  <label
                                    for="mobilenumber"
                                    class="block text-sm font-medium text-gray-700"
                                    >Term Frequency</label
                                  >
                                  <p>{{ acc_details.termFrequency }}</p>
                                </div>
                                <div class="col-span-6 md:col-span-3">
                                  <label
                                    for="mobilenumber"
                                    class="block text-sm font-medium text-gray-700"
                                    >Number of Repayments</label
                                  >
                                  <p>{{ acc_details.numberOfRepayment }}</p>
                                </div>
                                <div class="col-span-6 md:col-span-3">
                                  <label
                                    for="mobilenumber"
                                    class="block text-sm font-medium text-gray-700"
                                    >Repayment Every</label
                                  >
                                  <p>{{ acc_details.repaymentEvery }}</p>
                                </div>
                                <div class="col-span-6 md:col-span-3">
                                  <label
                                    for="mobilenumber"
                                    class="block text-sm font-medium text-gray-700"
                                    >Interest Rate Per Period</label
                                  >
                                  <p>
                                    {{ acc_details.interestRatePerPeriod }}
                                  </p>
                                </div>
                                <div class="col-span-6 md:col-span-3">
                                  <label
                                    for="mobilenumber"
                                    class="block text-sm font-medium text-gray-700"
                                    >Annual Interest Rate</label
                                  >
                                  <p>
                                    {{ acc_details.annualInterestRate }}
                                  </p>
                                </div>
                                <div class="col-span-6 md:col-span-3">
                                  <label
                                    for="mobilenumber"
                                    class="block text-sm font-medium text-gray-700"
                                    >Loan Type</label
                                  >
                                  <!-- <p>{{ acc_details.loanType["value"] }}</p> -->
                                </div>

                                <div
                                  class="col-span-6 lg:col-span-6"
                                  style="position: relative: z-index: 900;"
                                >
                                  <button
                                    type="button"
                                    @click="approveLoan()"
                                    class="mx-2 inline-flex items-center justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-lg font-bold text-white shadow-sm hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:w-auto"
                                  >
                                    Approve
                                  </button>
                                  <button
                                    type="button"
                                    class="mx-2 inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-lg font-bold text-white shadow-sm hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:w-auto"
                                    @click="rejectLoan()"
                                  >
                                    Reject
                                  </button>
                                  <button
                                    type="button"
                                    class="mx-2 inline-flex items-center justify-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-lg font-bold text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:w-auto"
                                    @click="setIsTable(false)"
                                  >
                                    Close
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>

                      <!-- <div class="absolute inset-0 px-4 sm:px-6">
                            <div
                              class="h-full border-2 border-dashed border-gray-200"
                              aria-hidden="true"
                            />
                          </div>
                          <div class="absolute inset-0 px-4 sm:px-6">
                            <div
                              class="h-full border-2 border-dashed border-gray-200"
                              aria-hidden="true"
                            />
                          </div> -->
                      <!-- /End replace -->
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import LocalStorageService from "../APIs/token";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { XIcon } from "@heroicons/vue/outline";

export default {
  name: "TableData",
  components: {
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    XIcon,
  },
  data() {
    return {
      // credit_details: null,
      credit: [],
      savings: [],
      tableData: [],
    };
  },
  props: { pagination: { type: Object, required: true } },
  methods: {
    createChunk(array, chunkSize) {
      let index = 0;
      let arrayLength = array.length;
      let tempArray = [];
      for (index = 0; index < arrayLength; index += chunkSize) {
        tempArray.push(array.slice(index, index + chunkSize));
      }
      return tempArray;
    },
    getCreditApp() {
      const creditAPI = axios.create({
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

      creditAPI
        .get("/api/credits")
        .then((response) => {
          // this.getCreditApp = response.data.pageItems;
          this.credit = response.data.data;
          this.tableData = this.createChunk(this.credit, 50);
          // console.log(this.tableData[0]);
          // this.tableData = this.temp[0];
        })
        .catch((error) => {
          console.log("There was an error:", error.data);
        });
    },
    getCreditTrans() {
      const transAPI = axios.create({
        baseURL: "https://api.sandbox.pavelon.com",
        headers: {
          Authorization: "Bearer " + LocalStorageService.getAccessToken(),
          "x-api-key": "x64cRjHA3240SSdfdk",
          "x-api-version": "v3",
          "xbs-token": LocalStorageService.getXbsToken(),
        },
      });
      transAPI
        .get("/api/savings")
        .then((response) => {
          this.getCreditTrans = response.data.pageItems;
        })
        .catch((error) => {
          console.log("There was an error:", error.data);
        });
    },
    disburseLoan(loadId) {
      const apiData = axios.create({
        baseURL: "https://api.sandbox.pavelon.com",
        headers: {
          Authorization: "Bearer " + LocalStorageService.getAccessToken(),
          "x-api-key": "x64cRjHA3240SSdfdk",
          "x-api-version": "v3",
          "xbs-token": LocalStorageService.getXbsToken(),
        },
      });

      // isTable.value = false;
      apiData
        .post(`/api/credit/${loadId}/disburse`)
        .then((response) => {
          this.acc_details = response.data;
        })
        .then(this.getCreditApp())
        .catch((error) => {
          console.log("There was an error:", error.data);
        });
    },
    approveLoan(loadId) {
      const approveData = axios.create({
        baseURL: "https://api.sandbox.pavelon.com",
        headers: {
          Authorization: "Bearer " + LocalStorageService.getAccessToken(),
          "x-api-key": "x64cRjHA3240SSdfdk",
          "x-api-version": "v3",
          "xbs-token": LocalStorageService.getXbsToken(),
        },
      });

      // isTable.value = false;
      approveData
        .post(`/api/credit/${loadId}`)
        .then((response) => {
          this.acc_details = response.data;
        })
        .then(this.getCreditApp())
        .catch((error) => {
          console.log("There was an error:", error.data);
        });
    },
    rejectLoan(loadId) {
      const rejectData = axios.create({
        baseURL: "https://api.sandbox.pavelon.com",
        headers: {
          Authorization: "Bearer " + LocalStorageService.getAccessToken(),
          "x-api-key": "x64cRjHA3240SSdfdk",
          "x-api-version": "v3",
          "xbs-token": LocalStorageService.getXbsToken(),
        },
      });

      // isTable.value = false;
      rejectData
        .post(`/api/creditApplication/${loadId}`)
        .then((response) => {
          this.acc_details = response.data;
        })
        .then(this.getCreditApp())
        .catch((error) => {
          console.log("There was an error:", error.data);
        });
    },
  },
  mounted() {
    this.getCreditApp();
  },
  setup() {
    let checkDetails = ref(null);
    let acc_details = ref(Object);
    let isTable = ref(false);

    return {
      checkDetails,
      acc_details,
      isTable,
      // // eslint-disable-next-line vue/no-dupe-keys
      // message,
      setIsTable(value, c_id) {
        // if (value == true) {
        const apiData = axios.create({
          baseURL: "https://api.sandbox.pavelon.com",
          headers: {
            Authorization: "Bearer " + LocalStorageService.getAccessToken(),
            "x-api-key": "x64cRjHA3240SSdfdk",
            "x-api-version": "v3",
            "xbs-token": LocalStorageService.getXbsToken(),
          },
        });

        // eslint-disable-next-line no-undef
        isTable.value = value;
        // if (c_id) {
        apiData
          .get(`/api/credit/${c_id}/details`)
          .then((response) => {
            this.acc_details = response.data;
          })
          .catch((error) => {
            console.log("There was an error:", error.data);
          });
      },
    };
  },
};
</script>

<style></style>
