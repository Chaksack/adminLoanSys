/* eslint-disable no-undef */
<template>
  <div id="overlay" @click="exitModal"></div>
  <div class="flex min-h-full">
    <div>
      <SideBar />
    </div>
    <div class="relative top-16 right-11 px-10 sm:px-6 lg:px-8 flex-1">
      <div class="sm:flex sm:items-center">
        <div class="mt-4 sm:mt-0 sm:ml-11 sm:flex-none">
          <h3
            class="inline-flex justify-center w-full font-sans font-bold text-4xl text-gray-700"
          >
            Applications
          </h3>
        </div>
        <div class="flex-auto">
          <p class="mt-2 text-sm text-gray-700">
            A list of all the Loan Applications in your account including their
            name, title, email.
          </p>
        </div>
        <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-lg font-bold text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:w-auto"
            ref="CreateApplication"
            @click="setIsOpen(true)"
          >
            New Application
          </button>
        </div>
      </div>
      <form class="w-full ml-16 max-w-sm">
        <div class="flex items-center border-b border-gray-100 py-2">
          <input
            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="search"
            aria-label="Full name"
          />
          <button
            class="flex-shrink-0 bg-gray-500 hover:bg-gray-700 border-gray-500 hover:border-gray-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </form>
      <form class="w-full ml-16 max-w-sm">
        <div class="flex items-center border-b border-gray-100 py-2">
          <input
            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Staff Id"
            aria-label="Staff Id"
            v-model="val.id"
          />
          <button
            class="flex-shrink-0 bg-gray-500 hover:bg-gray-700 border-gray-500 hover:border-gray-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
            @click="validate(val_details.val)"
          >
            Validate
          </button>
        </div>
      </form>
      <div class="mt-2 mb-4 sm:mt-0 flex justify-end">
        <!-- <buttonda
          type="file"
          class="ml-2 inline-flex items-center justify-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:w-auto"
          @click.prevent="createBorrower"
          id="file_input"
        >
          Upload
        </button> -->
        <!-- <label
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          for="file_input"
          >Upload file</label
        > -->
        <input
          class="ml-2 form-control inline-flex items-center justify-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:w-auto"
          id="file_input"
          type="file"
          ref="file"
          v-on:change="handleFileUpload()"
        />
        <button
          class="flex-shrink-0 bg-gray-500 hover:bg-gray-700 border-gray-500 hover:border-gray-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="button"
          @click="postUploadApp()"
        >
          Upload
        </button>
      </div>
      <div>
        <div class="sm:hidden">
          <label for="tabs" class="sr-only">Select a tab</label>
          <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
          <select
            id="tabs"
            name="tabs"
            class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">
              {{ tab.name }}
            </option>
          </select>
        </div>
        <div class="hidden sm:block">
          <div class="border-b border-gray-200">
            <nav class="-mb-px flex space-x-8" aria-label="Tabs">
              <a
                v-for="tab in tabs"
                :key="tab.name"
                @click="showData(tab.name)"
                :class="[
                  tab.current
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200',
                  'whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm',
                ]"
              >
                {{ tab.name }}
                <span
                  v-if="tab.count"
                  :class="[
                    tab.current
                      ? 'bg-indigo-100 text-indigo-600'
                      : 'bg-gray-100 text-gray-900',
                    'hidden ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block',
                  ]"
                  >{{ tab.count }}</span
                >
              </a>
            </nav>
            <div>
              <UploadData v-if="showUpload" />
              <TableData v-if="showTable" />
            </div>
          </div>
        </div>
      </div>

      <!-- create slider  -->
      <div>
        <TransitionRoot as="template" :show="isOpen">
          <Dialog
            as="div"
            :initialFocus="CreateApplication"
            :open="isOpen"
            @close="setIsOpen"
            class="relative z-10"
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
                            <DialogTitle
                              class="text-lg font-medium text-gray-900"
                            >
                              Create New Application
                            </DialogTitle>
                            <div class="ml-3 flex h-7 items-center">
                              <button
                                type="button"
                                class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                                @click="setIsOpen(false)"
                              >
                                <span class="sr-only">Close panel</span>
                                <XIcon class="h-6 w-6" aria-hidden="true" />
                              </button>
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
                                <form action="#" method="POST">
                                  <div class="grid grid-cols-6 gap-6">
                                    <div class="col-span-6 lg:col-span-3">
                                      <label
                                        for="clientId"
                                        class="block text-sm font-medium text-gray-700"
                                        >Client Id</label
                                      >
                                      <input
                                        v-model="create.clientId"
                                        type="text"
                                        name="name"
                                        id="name"
                                        class="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                      />
                                    </div>
                                    <div class="col-span-6 lg:col-span-3">
                                      <label
                                        for="productId"
                                        class="block text-sm font-medium text-gray-700"
                                        >Product Id
                                      </label>
                                      <input
                                        v-model="create.productId"
                                        type="text"
                                        name="name"
                                        id="name"
                                        class="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                      />
                                    </div>
                                    <div class="col-span-6 lg:col-span-2">
                                      <label
                                        for="principal"
                                        class="block text-sm font-medium text-gray-700"
                                        >Principal</label
                                      >
                                      <input
                                        v-model="create.principal"
                                        type="number"
                                        name="name"
                                        id="name"
                                        class="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                      />
                                    </div>

                                    <div class="col-span-6 lg:col-span-2">
                                      <label
                                        for="loanTermFrequency"
                                        class="block text-sm font-medium text-gray-700"
                                        >Loan Term Frequency
                                      </label>
                                      <input
                                        v-model="create.loanTermFrequency"
                                        type="number"
                                        name="name"
                                        id="name"
                                        class="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                      />
                                    </div>
                                    <div class="col-span-6 lg:col-span-3">
                                      <label
                                        for="loanTermFrequencyType"
                                        class="block text-sm font-medium text-gray-700"
                                        >Loan Term Frequency Type</label
                                      >
                                      <input
                                        v-model="create.loanTermFrequencyType"
                                        type="number"
                                        name="name"
                                        id="name"
                                        class="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                      />
                                    </div>
                                    <div class="col-span-6 lg:col-span-3">
                                      <label
                                        for="loanType"
                                        class="block text-sm font-medium text-gray-700"
                                        >Loan Type</label
                                      >
                                      <input
                                        v-model="create.loanType"
                                        type="number"
                                        name="name"
                                        id="name"
                                        class="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                      />
                                    </div>
                                    <div class="col-span-6 lg:col-span-3">
                                      <label
                                        for="numberOfRepayments"
                                        class="block text-sm font-medium text-gray-700"
                                        >Number Of Repayments</label
                                      >
                                      <input
                                        v-model="create.numberOfRepayments"
                                        type="number"
                                        name="name"
                                        id="name"
                                        class="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                      />
                                    </div>
                                    <div class="col-span-6 lg:col-span-3">
                                      <label
                                        for="repaymentEvery"
                                        class="block text-sm font-medium text-gray-700"
                                        >Repayment Every</label
                                      >
                                      <input
                                        v-model="create.repaymentEvery"
                                        type="number"
                                        name="name"
                                        id="name"
                                        class="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                      />
                                    </div>
                                    <div class="col-span-6 lg:col-span-3">
                                      <label
                                        for="repaymentFrequencyType"
                                        class="block text-sm font-medium text-gray-700"
                                        >Repayment Frequency Type</label
                                      >
                                      <input
                                        v-model="create.repaymentFrequencyType"
                                        type="number"
                                        name="name"
                                        id="name"
                                        class="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                      />
                                    </div>
                                    <div class="col-span-6 lg:col-span-3">
                                      <label
                                        for="interestType"
                                        class="block text-sm font-medium text-gray-700"
                                        >Interest Type</label
                                      >
                                      <input
                                        v-model="create.interestType"
                                        type="number"
                                        name="name"
                                        id="name"
                                        class="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                      />
                                    </div>
                                    <div class="col-span-6 lg:col-span-3">
                                      <label
                                        for="linkAccountId"
                                        class="block text-sm font-medium text-gray-700"
                                        >Link Account Id</label
                                      >
                                      <input
                                        v-model="create.linkAccountId"
                                        type="number"
                                        name="name"
                                        id="name"
                                        class="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                      />
                                    </div>
                                    <div class="col-span-6 lg:col-span-3">
                                      <label
                                        for="loanPurposeId"
                                        class="block text-sm font-medium text-gray-700"
                                        >Loan Purpose Id</label
                                      >
                                      <input
                                        v-model="create.loanPurposeId"
                                        type="number"
                                        name="name"
                                        id="name"
                                        class="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                      />
                                    </div>
                                    <div class="col-span-6 lg:col-span-4">
                                      <button
                                        type="button"
                                        class="inline-flex items-center justify-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-lg font-bold text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:w-auto"
                                        @click.prevent="createApplication"
                                      >
                                        Create Application
                                      </button>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                          <!-- <div class="absolute inset-0 px-4 sm:px-6">
                      <div class="h-full border-2 border-dashed border-gray-200" aria-hidden="true" />
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
      <div class="mt-4 mb-4 sm:mt-0 sm:flex-none">
        <button
          type="button"
          class="ml-2 inline-flex items-center justify-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-lg font-bold text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:w-auto"
          @click.prevent="createBorrower"
        >
          Download
        </button>
      </div>

      <!-- end create slider -->
      <!-- pagination -->
      <div>
        <nav
          class="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0"
        >
          <div class="-mt-px ml-16 w-0 flex-1 flex">
            <a
              href="#"
              class="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
            >
              <ArrowNarrowLeftIcon
                class="mr-3 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              Previous
            </a>
          </div>
          <div class="hidden md:-mt-px md:flex">
            <a
              href="#"
              class="border-gray-500 text-gray-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
              aria-current="page"
            >
              1
            </a>
            <a
              href="#"
              class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
            >
              2
            </a>
            <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->
            <a
              href="#"
              class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
            >
              3
            </a>
            <span
              class="border-transparent text-gray-500 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
            >
              ...
            </span>
            <a
              href="#"
              class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
            >
              8
            </a>
            <a
              href="#"
              class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
            >
              9
            </a>
            <a
              href="#"
              class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
            >
              10
            </a>
          </div>
          <div class="-mt-px w-0 flex-1 flex justify-end">
            <a
              href="#"
              class="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
            >
              Next
              <ArrowNarrowRightIcon
                class="ml-3 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </a>
          </div>
        </nav>
      </div>
      <div class="relative bottom-0 left-16">
        <Footer />
      </div>
    </div>
  </div>
  <!-- Modal -->
  <div class="modal fixed my-32 w-[400px] h-[300px] bg-white rounded-xl z-30">
    <p class="info">{{ vResponse.message }}</p>
    <p>{{ vResponse.data }}</p>
  </div>
</template>

<script>
import { ref } from "vue";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
// import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import axios from "axios";
import {
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
} from "@heroicons/vue/solid";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { XIcon } from "@heroicons/vue/outline";
import LocalStorageService from "../APIs/token";
import UploadData from "./uploadData.vue";
import TableData from "./tableData.vue";

const tabs = [
  { name: "Credit Application", current: true },
  { name: "Savings Application", current: false },
  { name: "Upload Application", current: false },
];

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Dashboard",
  components: {
    SideBar,
    Footer,
    ArrowNarrowLeftIcon,
    ArrowNarrowRightIcon,
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    XIcon,
    UploadData,
    TableData,
    // Menu,
    // MenuButton,
    // MenuItem,
    // MenuItems,
  },
  data() {
    return {
      create: {
        clientId: "",
        productId: "",
        principal: "",
        loanTermFrequency: "",
        loanTermFrequencyType: "",
        loanType: "",
        numberOfRepayments: "",
        repaymentEvery: "",
        repaymentFrequencyType: "",
        interestType: "",
        linkAccountId: "",
        loanPurposeId: "",
      },
      // uploadActive: false,
      val: {
        origin: "tf",
        mode: "validate",
        type: "identity",
        id: "",
      },
      vResponse: {},
      tableData: [],
      uploadData: [],
      index: "Credit Application",
      showUpload: false,
      showTable: false,
      message: "",
    };
  },
  // 1245796

  methods: {
    showModal() {
      // this.message = message;
      let body = document.querySelector("body");
      let modal = document.querySelector(".modal");
      let overlay = document.querySelector("#overlay");
      modal.style.display = "block";
      overlay.style.display = "block";
      modal.classList.add("open");
      modal.style.zindex = "1003";
      body.style.overflow = "auto";
    },
    exitModal() {
      let body = document.querySelector("body");
      let modal = document.querySelector(".modal");
      let overlay = document.querySelector("#overlay");
      overlay.style.display = "none";
      modal.style.display = "none";
      modal.classList.remove("open");
      modal.style.zindex = "-1";
      body.style.overflow = "auto";
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
    // submitFile() {
    //   this.loading = !this.loading;
    //   /*
    //     Initialize the form data
    //   */
    //   let formData = new FormData();

    //   /*
    //       Add the form data we need to submit
    //     */
    //   formData.append("file", this.file);
    // },
    showData(e) {
      console.log(e);
      if (e == "Credit Application") {
        this.showUpload = false;
        this.showTable = true;
        this.tabs[0].current = true;
        this.tabs[1].current = false;
        this.tabs[2].current = false;
        this.index = "Credit Applications";
        // this.tableData = this.credit;
      } else if (e == "Savings Application") {
        this.showUpload = false;
        this.showTable = false;
        this.tabs[0].current = false;
        this.tabs[1].current = true;
        this.tabs[2].current = false;
        this.index = "Savings Application";
        // this.tableData = this.savings;
        console.log(this.tableData);
      } else if (e == "Upload Application") {
        this.showUpload = true;
        this.showTable = false;
        this.tabs[0].current = false;
        this.tabs[1].current = false;
        this.tabs[2].current = true;
        this.index = "Upload Application";
        // this.uploadData = this.uploads;
        console.log(this.uploadData);
      }
    },
    postUploadApp() {
      const postUploadAPI = axios.create({
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
      let formData = new FormData();
      formData.append("file", this.file);
      postUploadAPI
        .post("api/upload/doc", formData)
        .then((response) => {
          // this.getCreditApp = response.data.pageItems;
          this.uploads = response.data;
          this.uploadData = this.uploads;
        })
        .catch((error) => {
          console.log("There was an error:", error.data);
        });
    },
    validate() {
      const vapiData = axios.create({
        baseURL: "https://api.sandbox.pavelon.com",
        headers: {
          Authorization: "Bearer " + LocalStorageService.getAccessToken(),
          "x-api-key": "x64cRjHA3240SSdfdk",
          "x-api-version": "v3",
          "xbs-token": LocalStorageService.getXbsToken(),
        },
      });

      // isTable.value = false;
      vapiData
        .post(`/api/domain/verify`, this.val)
        .then((response) => {
          this.val = response.data.message;
          this.vResponse = response.data;
          console.log(this.vResponse);
          this.showModal(this.val);
        })
        // .then(this.val())
        .catch((error) => {
          this.val = error.data;
          this.message = error.response.data.message;
          this.vResponse = error.response.data;
          this.showModal(this.message);
          console.log("There was an error:", error);
        });
    },
    async createApplication() {
      const createPAPI = axios.create({
        baseURL: "https://api.sandbox.pavelon.com",
        // timeout: 10000,
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
      this.setIsOpen(false);

      await createPAPI
        .post("/api/credit", {
          clientId: this.create.clientId,
          productId: this.create.productId,
          principal: this.create.principal,
          loanTermFrequency: this.create.loanTermFrequency,
          loanTermFrequencyType: this.create.loanTermFrequencyType,
          loanType: this.create.loanType,
          numberOfRepayments: this.create.numberOfRepayments,
          repaymentEvery: this.create.repaymentEvery,
          repaymentFrequencyType: this.create.repaymentEvery,
          interestType: this.create.interestType,
          linkAccountId: this.create.minInterestRatePerPeriod,
          loanPurposeId: this.create.maxInterestRatePerPeriod,
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log("There was an error:", error.data);
        });
    },
  },
  mounted() {
    this.showTable = true;
    // this.uploadData = true;
  },
  setup() {
    let isOpen = ref(false);
    let CreateApplication = ref(null);
    // let isTable = ref(false);
    let val_details = ref(Object);
    return {
      tabs,
      isOpen,
      CreateApplication,
      // isTable,
      val_details,
      // // eslint-disable-next-line vue/no-dupe-keys, vue/no-dupe-keys
      setIsOpen(value) {
        isOpen.value = value;
      },
      // setIsTable(value, c_id) {
      //   // if (value == true) {
      //   const apiData = axios.create({
      //     baseURL: "http://sandbox.pavelon.com",
      //     headers: {
      //       Authorization: "Bearer " + LocalStorageService.getAccessToken(),
      //       "x-api-key": "x64cRjHA3240SSdfdk",
      //       "x-api-version": "v3",
      //       "xbs-token": LocalStorageService.getXbsToken(),
      //     },
      //   });

      //   isTable.value = value;
      //   // if (c_id) {
      //   apiData
      //     .get(`/api/credit/${c_id}/details`)
      //     .then((response) => {
      //       this.acc_details = response.data;
      //     })
      //     .catch((error) => {
      //       console.log("There was an error:", error.data);
      //     });
      // },
    };
  },
};
</script>

<style scoped>
.modal {
  top: 35%;
  right: 50%;
  color: #000000;
  transform: translate(50%, -50%);
  display: none;
}

#overlay {
  position: fixed; /* Sit on top of the page content */
  display: none; /* Hidden by default */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
}
</style>
