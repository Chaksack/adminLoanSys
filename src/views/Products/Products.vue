/* eslint-disable no-undef */
<template>
  <div class="flex min-h-full">
    <div>
      <SideBar />
    </div>
    <div class="relative top-16 right-11 px-10 sm:px-6 lg:px-8 flex-1">
      <div class="sm:flex sm:items-center">
        <div class="mt-4 sm:mt-0 sm:ml-11 sm:flex-none">
          <Menu>
            <MenuButton
              class="inline-flex justify-center w-full font-sans font-bold text-2xl rounded-md border-none border-white px-4 py-2 bg-white text-gray-700 hover:bg-gray-200 focus:outline-none"
            >
              Products
            </MenuButton>
          </Menu>
        </div>
        <div class="flex-auto">
          <p class="mt-2 text-sm text-gray-700">
            A list of all the Products in your account including Principal
            Amount.
          </p>
        </div>
        <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-lg font-bold text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:w-auto"
            ref="CreateProduct"
            @click="setIsOpen(true)"
          >
            Create Product
          </button>
        </div>
      </div>
      <form class="w-full ml-16 max-w-sm">
        <div class="flex items-center border-b border-gray-500 py-2">
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
      <div>
        <div
          class="sm:hidden relative top-16 right-11 px-10 sm:px-6 lg:px-8 flex-1"
        >
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
              <p
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
                    tab.current,
                    //   ? 'bg-indigo-100 text-indigo-600'
                    //   : 'bg-gray-100 text-gray-900',
                    // 'hidden ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block',
                  ]"
                  >{{ tab.count }}</span
                >
              </p>
            </nav>
          </div>
        </div>
      </div>
      <div class="mt-8 flex ml-16 flex-col">
        <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle">
            <div
              class="overflow-hidden shadow-sm ring-1 ring-black ring-opacity-5"
            >
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
                      Name
                    </th>
                    <th
                      scope="col"
                      class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8"
                    >
                      Short Name
                    </th>
                    <th
                      scope="col"
                      class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8"
                    >
                      Principal
                    </th>
                    <th
                      scope="col"
                      class="relative py-3.5 pl-3 pr-4 sm:pr-6 lg:pr-8"
                    >
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody
                  class="divide-y divide-gray-200 bg-white"
                  @click="setIsTable(true)"
                >
                  <tr v-for="(product, index) in tableData" :key="index">
                    <td
                      class="whitespace-nowrap py-3.5 pl-4 pr-3 text-sm text-left font-medium text-gray-500 sm:pl-6 lg:pl-8"
                      @click="setIsTable(true)"
                    >
                      {{ product.id }}
                    </td>
                    <td
                      class="whitespace-nowrap py-3.5 pl-4 pr-3 text-sm text-left font-medium text-gray-900 sm:pl-6 lg:pl-8"
                      @click="setIsTable(true)"
                    >
                      {{ product.name }}
                    </td>
                    <td
                      class="whitespace-nowrap px-3 py-3.5 text-sm text-left text-gray-500"
                      @click="setIsTable(true)"
                    >
                      {{ product.shortName }}
                    </td>
                    <td
                      class="whitespace-nowrap px-3 py-3.5 text-sm text-left text-gray-500"
                      @click="setIsTable(true)"
                    >
                      {{ product.status }}
                    </td>
                    <td
                      class="whitespace-nowrap px-3 py-3.5 text-sm text-left text-gray-500"
                      @click="setIsTable(true)"
                    >
                      {{ product.principal }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <!-- view product details -->
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
                            <DialogTitle
                              class="text-lg font-medium text-gray-900"
                            >
                              view Product's details
                            </DialogTitle>
                            <div class="ml-3 flex h-7 items-center">
                              <button
                                type="button"
                                class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                                @click="setIsTable(false)"
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
                                <form>
                                  <div class="grid grid-cols-6 gap-6">
                                    <div class="col-span-6 md:col-span-3">
                                      <label
                                        for="accountNo"
                                        class="block text-sm font-medium text-gray-700"
                                      >
                                        Name
                                      </label>
                                      <p>{{ acc_details.name }}</p>
                                    </div>
                                    <div class="col-span-6 md:col-span-3">
                                      <label
                                        for="mobilenumber"
                                        class="block text-sm font-medium text-gray-700"
                                        >Short Name</label
                                      >
                                      <p>{{ acc_details.shortName }}</p>
                                    </div>
                                    <div class="col-span-6 md:col-span-3">
                                      <label
                                        for="full-name"
                                        class="block text-sm font-medium text-gray-700"
                                        >Status</label
                                      >
                                      <p>{{ acc_details.status }}</p>
                                    </div>
                                    <div class="col-span-6 md:col-span-3">
                                      <label
                                        for="full-name"
                                        class="block text-sm font-medium text-gray-700"
                                      >
                                        Principal</label
                                      >
                                      <p>{{ acc_details.principal }}</p>
                                    </div>
                                    <div class="col-span-6 md:col-span-3">
                                      <label
                                        for="full-name"
                                        class="block text-sm font-medium text-gray-700"
                                        >Min Principal</label
                                      >
                                      <p>{{ acc_details.minPrincipal }}</p>
                                    </div>
                                    <div class="col-span-6 md:col-span-3">
                                      <label
                                        for="full-name"
                                        class="block text-sm font-medium text-gray-700"
                                        >Max Principal</label
                                      >
                                      <p>{{ acc_details.maxPrincipal }}</p>
                                    </div>
                                    <div class="col-span-6 md:col-span-3">
                                      <label
                                        for="full-name"
                                        class="block text-sm font-medium text-gray-700"
                                        >Number Of Repayments</label
                                      >
                                      <p>{{ acc_details.numberOfRepayment }}</p>
                                    </div>
                                    <div class="col-span-6 md:col-span-3">
                                      <label
                                        for="full-name"
                                        class="block text-sm font-medium text-gray-700"
                                        >Max Number Of Repayments</label
                                      >
                                      <p>
                                        {{ acc_details.maxNumberOfRepayment }}
                                      </p>
                                    </div>
                                    <div class="col-span-6 md:col-span-3">
                                      <label
                                        for="full-name"
                                        class="block text-sm font-medium text-gray-700"
                                        >Min Number Of Repayments</label
                                      >
                                      <p>
                                        {{ acc_details.minNumberOfRepayment }}
                                      </p>
                                    </div>
                                    <div class="col-span-6 md:col-span-3">
                                      <label
                                        for="full-name"
                                        class="block text-sm font-medium text-gray-700"
                                      >
                                        Repayment Every</label
                                      >
                                      <p>{{ acc_details.repaymentEvery }}</p>
                                    </div>
                                    <div class="col-span-6 md:col-span-3">
                                      <label
                                        for="full-name"
                                        class="block text-sm font-medium text-gray-700"
                                      >
                                        Interest Rate Per Period</label
                                      >
                                      <p>
                                        {{ acc_details.interestRatePerPeriod }}
                                      </p>
                                    </div>
                                    <div class="col-span-6 md:col-span-3">
                                      <label
                                        for="full-name"
                                        class="block text-sm font-medium text-gray-700"
                                      >
                                        Min Interest Rate Per Period</label
                                      >
                                      <p>
                                        {{
                                          acc_details.minInterestRatePerPeriod
                                        }}
                                      </p>
                                    </div>
                                    <div class="col-span-6 md:col-span-3">
                                      <label
                                        for="full-name"
                                        class="block text-sm font-medium text-gray-700"
                                      >
                                        Max Interest Rate Per Period</label
                                      >
                                      <p>
                                        {{
                                          acc_details.maxInterestRatePerPeriod
                                        }}
                                      </p>
                                    </div>
                                    <div class="col-span-6 md:col-span-3">
                                      <label
                                        for="full-name"
                                        class="block text-sm font-medium text-gray-700"
                                      >
                                        Annual Interest Rate</label
                                      >
                                      <p>
                                        {{ acc_details.annualInterestRate }}
                                      </p>
                                    </div>
                                    <div class="col-span-6 lg:col-span-6">
                                      <div
                                        class="mx-2 inline-flex items-center justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-lg font-bold text-white shadow-sm hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:w-auto"
                                      >
                                        Edit
                                      </div>
                                      <button
                                        type="button"
                                        class="mx-2 inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-lg font-bold text-white shadow-sm hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:w-auto"
                                        @click.prevent="createBorrower"
                                      >
                                        Delete
                                      </button>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>

                          <div class="absolute inset-0 px-4 sm:px-6">
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
                          </div>
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
      <!-- create slider  -->
      <div>
        <TransitionRoot as="template" :show="isOpen">
          <Dialog
            as="div"
            :initialFocus="CreateProduct"
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
                              Create New Product
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
                                        for="name"
                                        class="block text-sm font-medium text-gray-700"
                                        >Name</label
                                      >
                                      <input
                                        v-model="create.name"
                                        type="text"
                                        name="name"
                                        id="name"
                                        class="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                      />
                                    </div>
                                    <div class="col-span-6 lg:col-span-3">
                                      <label
                                        for="shortName"
                                        class="block text-sm font-medium text-gray-700"
                                        >Short Name</label
                                      >
                                      <input
                                        v-model="create.shortName"
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
                                        for="minPrincipal"
                                        class="block text-sm font-medium text-gray-700"
                                        >Min Principal</label
                                      >
                                      <input
                                        v-model="create.minPrincipal"
                                        type="number"
                                        name="name"
                                        id="name"
                                        class="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                      />
                                    </div>
                                    <div class="col-span-6 lg:col-span-2">
                                      <label
                                        for="maxPrincipal"
                                        class="block text-sm font-medium text-gray-700"
                                        >Max Principal</label
                                      >
                                      <input
                                        v-model="create.maxPrincipal"
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
                                        for="minNumberOfRepayments"
                                        class="block text-sm font-medium text-gray-700"
                                        >Min Number Of Repayments</label
                                      >
                                      <input
                                        v-model="create.minNumberOfRepayments"
                                        type="number"
                                        name="name"
                                        id="name"
                                        class="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                      />
                                    </div>
                                    <div class="col-span-6 lg:col-span-3">
                                      <label
                                        for="maxNumberOfRepayments"
                                        class="block text-sm font-medium text-gray-700"
                                        >Max Number Of Repayments</label
                                      >
                                      <input
                                        v-model="create.maxNumberOfRepayments"
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
                                        for="interestRatePerPeriod"
                                        class="block text-sm font-medium text-gray-700"
                                        >Interest Rate Per Period</label
                                      >
                                      <input
                                        v-model="create.interestRatePerPeriod"
                                        type="number"
                                        name="name"
                                        id="name"
                                        class="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                      />
                                    </div>
                                    <div class="col-span-6 lg:col-span-3">
                                      <label
                                        for="minInterestRatePerPeriod"
                                        class="block text-sm font-medium text-gray-700"
                                        >Min Interest Rate Per Period</label
                                      >
                                      <input
                                        v-model="
                                          create.minInterestRatePerPeriod
                                        "
                                        type="number"
                                        name="name"
                                        id="name"
                                        class="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                      />
                                    </div>
                                    <div class="col-span-6 lg:col-span-3">
                                      <label
                                        for="maxInterestRatePerPeriod"
                                        class="block text-sm font-medium text-gray-700"
                                        >Max Interest Rate Per Period</label
                                      >
                                      <input
                                        v-model="
                                          create.maxInterestRatePerPeriod
                                        "
                                        type="number"
                                        name="name"
                                        id="name"
                                        class="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                      />
                                    </div>
                                    <div class="col-span-6 lg:col-span-3">
                                      <label
                                        for="annualInterestRate"
                                        class="block text-sm font-medium text-gray-700"
                                        >Annual Interest Rate</label
                                      >
                                      <input
                                        v-model="create.annualInterestRate"
                                        type="number"
                                        name="name"
                                        id="name"
                                        class="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                      />
                                    </div>

                                    <!-- <div class="col-span-6 sm:col-span-3">
                <label for="country" class="block text-sm font-medium text-gray-700">Country</label>
                <select id="country" name="country" autocomplete="country-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div> -->

                                    <!-- <div class="col-span-6">
                                      <label
                                        for="street-address"
                                        class="block text-sm font-medium text-gray-700"
                                        >Street address</label
                                      >
                                      <input
                                        type="text"
                                        name="street-address"
                                        id="street-address"
                                        autocomplete="street-address"
                                        class="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                      />
                                    </div>

                                    <div
                                      class="col-span-6 md:col-span-6 lg:col-span-2"
                                    >
                                      <label
                                        for="city"
                                        class="block text-sm font-medium text-gray-700"
                                        >City</label
                                      >
                                      <input
                                        type="text"
                                        name="city"
                                        id="city"
                                        autocomplete="address-level2"
                                        class="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                      />
                                    </div>

                                    <div
                                      class="col-span-6 md:col-span-3 lg:col-span-2"
                                    >
                                      <label
                                        for="region"
                                        class="block text-sm font-medium text-gray-700"
                                        >State / Province</label
                                      >
                                      <input
                                        type="text"
                                        name="region"
                                        id="region"
                                        autocomplete="address-level1"
                                        class="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                      />
                                    </div>

                                    <div
                                      class="col-span-6 md:col-span-3 lg:col-span-2"
                                    >
                                      <label
                                        for="postal-code"
                                        class="block text-sm font-medium text-gray-700"
                                        >ZIP / Postal code</label
                                      >
                                      <input
                                        type="text"
                                        name="postal-code"
                                        id="postal-code"
                                        autocomplete="postal-code"
                                        class="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                      />
                                    </div> -->
                                    <div class="col-span-6 lg:col-span-4">
                                      <button
                                        type="button"
                                        class="inline-flex items-center justify-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-lg font-bold text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:w-auto"
                                        @click.prevent="createProduct"
                                      >
                                        Create Product
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
</template>

<script>
import { ref } from "vue";
import SideBar from "../../components/SideBar.vue";
import Footer from "../../components/Footer";
import { Menu, MenuButton } from "@headlessui/vue";
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
import LocalStorageService from "../../APIs/token";
import axios from "axios";
// const tabs = [
//   { name: "Savings", current: true },
//   { name: "Credit", current: false },
// ];
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
    Menu,
    MenuButton,
    // MenuItem,
    // MenuItems,
  },
  data() {
    return {
      create: {
        name: "",
        shortName: "",
        principal: "",
        minPrincipal: "",
        maxPrincipal: "",
        numberOfRepayments: "",
        minNumberOfRepayments: "",
        maxNumberOfRepayments: "",
        repaymentEvery: "",
        interestRatePerPeriod: "",
        minInterestRatePerPeriod: "",
        maxInterestRatePerPeriod: "",
        annualInterestRate: "",
      },
      credit: [],
      savings: [],
      tableData: [],
      index: "Credit",
      tabs: [
        { name: "Credit", current: true },
        { name: "Savings", current: false },
      ],
    };
  },
  methods: {
    showData(e) {
      console.log(e);
      if (e == "Credit") {
        this.tabs[0].current = true;
        this.tabs[1].current = false;
        this.index = "Credit";
        this.tableData = this.credit;
      } else {
        this.tabs[0].current = false;
        this.tabs[1].current = true;
        this.index = "Savings";
        this.tableData = this.savings;
        console.log(this.tableData);
      }
    },
    getCredit() {
      const creditAPI = axios.create({
        baseURL: "https://api.sandbox.pavelon.com",
        headers: {
          // Authorization: "Bearer " + localStorage.getItem("xbs_token"),
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
        .get("/api/creditproduct")
        .then((response) => {
          this.credit = response.data;
          this.tableData = this.credit;
          console.log(response.data);
        })
        .catch((error) => {
          console.log("There was an error:", error.data);
        });
    },
    getSavings() {
      const savingsAPI = axios.create({
        baseURL: "https://api.sandbox.pavelon.com",
        headers: {
          // Authorization: "Bearer " + localStorage.getItem("xbs_token"),
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

      savingsAPI
        .get("/api/savingsproduct")
        .then((response) => {
          this.savings = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          console.log("There was an error:", error.data);
        });
    },
    async createProduct() {
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
        .post("/api/creditProduct", {
          name: this.create.name,
          shortName: this.create.shortName,
          principal: this.create.principal,
          minPrincipal: this.create.minPrincipal,
          maxPrincipal: this.create.maxPrincipal,
          numberOfRepayments: this.create.numberOfRepayments,
          minNumberOfRepayments: this.create.minNumberOfRepayments,
          maxNumberOfRepayments: this.create.maxNumberOfRepayments,
          repaymentEvery: this.create.repaymentEvery,
          interestRatePerPeriod: this.create.interestRatePerPeriod,
          minInterestRatePerPeriod: this.create.minInterestRatePerPeriod,
          maxInterestRatePerPeriod: this.create.maxInterestRatePerPeriod,
          annualInterestRate: this.create.annualInterestRate,
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
    this.getCredit();
    this.getSavings();
  },
  setup() {
    let isOpen = ref(false);
    let CreateProduct = ref(null);
    let isTable = ref(false);
    let checkDetails = ref(null);
    let acc_details = ref(Object);

    return {
      // tabs,
      isOpen,
      CreateProduct,
      isTable,
      checkDetails,
      acc_details,
      setIsOpen(value) {
        isOpen.value = value;
      },
      setIsTable(value, c_id) {
        const apiData = axios.create({
          baseURL: "https://api.sandbox.pavelon.com",
          headers: {
            Authorization: "Bearer " + LocalStorageService.getAccessToken(),
            "x-api-key": "x64cRjHA3240SSdfdk",
            "x-api-version": "v3",
            "xbs-token": LocalStorageService.getXbsToken(),
          },
        });
        isTable.value = value;
        apiData
          .get(`/api/creditproduct/${c_id}`)
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
