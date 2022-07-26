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
              Lenders
            </MenuButton>
          </Menu>
        </div>
        <div class="flex-auto">
          <p class="mt-2 text-sm text-gray-700">
            A list of all the Lenders in your account including their name,
            title, email.
          </p>
        </div>
        <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-lg font-bold text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:w-auto"
            ref="CreateStaff"
            @click="setIsOpen(true)"
          >
            Create Lender
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
                      Username
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Office Id
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Office Name
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      First Name
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Last Name
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Email Address
                    </th>
                    <!-- <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Email
                    </th> -->
                    <!-- <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Role
                    </th> -->
                    <th
                      scope="col"
                      class="relative py-3.5 pl-3 pr-4 sm:pr-6 lg:pr-8"
                    >
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 bg-white">
                  <tr
                    v-for="(lender, index) in lenders"
                    :key="index"
                    @click="setIsTable(true, lender.id)"
                  >
                    <td
                      class="whitespace-nowrap py-3.5 pl-4 pr-3 text-sm text-left font-medium text-gray-500 sm:pl-6 lg:pl-8"
                      @click="setIsTable(true)"
                    >
                      {{ lender.id }}
                    </td>
                    <td
                      class="whitespace-nowrap py-3.5 pl-4 pr-3 text-sm text-left font-medium text-gray-900 sm:pl-6 lg:pl-8"
                      @click="setIsTable(true)"
                    >
                      {{ lender.username }}
                    </td>
                    <td
                      class="whitespace-nowrap px-3 py-3.5 text-sm text-left text-gray-500"
                      @click="setIsTable(true)"
                    >
                      {{ lender.officeId }}
                    </td>
                    <td
                      class="whitespace-nowrap px-3 py-3.5 text-sm text-left text-gray-500"
                      @click="setIsTable(true)"
                    >
                      {{ lender.officeName }}
                    </td>
                    <td
                      class="whitespace-nowrap px-3 py-3.5 text-sm text-left text-gray-500"
                      @click="setIsTable(true)"
                    >
                      {{ lender.firstname }}
                    </td>
                    <td
                      class="whitespace-nowrap px-3 py-3.5 text-sm text-left text-gray-500"
                      @click="setIsTable(true)"
                    >
                      {{ lender.lastname }}
                    </td>
                    <td
                      class="whitespace-nowrap px-3 py-3.5 text-sm text-left text-gray-500"
                      @click="setIsTable(true)"
                    >
                      {{ lender.email }}
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
                            <DialogTitle
                              class="text-lg font-medium text-gray-900"
                            >
                              view Lender's details
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
                                        Account Number
                                      </label>
                                      <p>{{ acc_details.accountNo }}</p>
                                    </div>
                                    <div class="col-span-6 md:col-span-3">
                                      <label
                                        for="mobilenumber"
                                        class="block text-sm font-medium text-gray-700"
                                        >Status</label
                                      >
                                      <p>{{ acc_details.active }}</p>
                                    </div>
                                    <div class="col-span-6 md:col-span-3">
                                      <label
                                        for="full-name"
                                        class="block text-sm font-medium text-gray-700"
                                        >First Name</label
                                      >
                                      <p>{{ acc_details.firstName }}</p>
                                    </div>
                                    <div class="col-span-6 md:col-span-3">
                                      <label
                                        for="full-name"
                                        class="block text-sm font-medium text-gray-700"
                                        >Last Name</label
                                      >
                                      <p>{{ acc_details.lastName }}</p>
                                    </div>
                                    <div class="col-span-6 md:col-span-3">
                                      <label
                                        for="full-name"
                                        class="block text-sm font-medium text-gray-700"
                                        >Mobile Number</label
                                      >
                                      <p>{{ acc_details.mobileNo }}</p>
                                    </div>
                                    <div class="col-span-6 md:col-span-3">
                                      <label
                                        for="full-name"
                                        class="block text-sm font-medium text-gray-700"
                                      >
                                        Staff</label
                                      >
                                      <p>{{ acc_details.isStaff }}</p>
                                    </div>
                                    <div class="col-span-6 md:col-span-3">
                                      <label
                                        for="full-name"
                                        class="block text-sm font-medium text-gray-700"
                                      >
                                        Office Id</label
                                      >
                                      <p>{{ acc_details.officeId }}</p>
                                    </div>
                                    <div class="col-span-6 md:col-span-3">
                                      <label
                                        for="full-name"
                                        class="block text-sm font-medium text-gray-700"
                                      >
                                        Office Name</label
                                      >
                                      <p>{{ acc_details.officeName }}</p>
                                    </div>
                                    <div class="col-span-6 md:col-span-3">
                                      <label
                                        for="mobilenumber"
                                        class="block text-sm font-medium text-gray-700"
                                        >Savings Account Id</label
                                      >
                                      <p>{{ acc_details.savingsAccountId }}</p>
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
            :initialFocus="CreateBorrower"
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
                              Create New Lender
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
                                <form>
                                  <div class="grid grid-cols-6 gap-6">
                                    <div class="col-span-6 md:col-span-3">
                                      <label
                                        for="first-name"
                                        class="block text-sm font-medium text-gray-700"
                                        >First name</label
                                      >
                                      <input
                                        v-model="create.firstname"
                                        type="text"
                                        name="firstname"
                                        id="firstname"
                                        autocomplete="firstname"
                                        class="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                      />
                                    </div>

                                    <div class="col-span-6 md:col-span-3">
                                      <label
                                        for="lastname"
                                        class="block text-sm font-medium text-gray-700"
                                        >Last name</label
                                      >
                                      <input
                                        v-model="create.lastname"
                                        type="text"
                                        name="lastname"
                                        id="lastname"
                                        autocomplete="lastname"
                                        class="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                      />
                                    </div>

                                    <div class="col-span-6 md:col-span-3">
                                      <label
                                        for="emailaddress"
                                        class="block text-sm font-medium text-gray-700"
                                        >Email address</label
                                      >
                                      <input
                                        v-model="create.emailaddress"
                                        type="text"
                                        name="emailaddress"
                                        id="emailaddress"
                                        autocomplete="email"
                                        class="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                      />
                                    </div>
                                    <div class="col-span-6 md:col-span-3">
                                      <label
                                        for="mobilenumber"
                                        class="block text-sm font-medium text-gray-700"
                                        >Mobile Number</label
                                      >
                                      <input
                                        v-model="create.mobilenumber"
                                        type="text"
                                        name="mobilenumber"
                                        id="mobilenumber"
                                        autocomplete="number"
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
                                    </div> -->

                                    <!-- <div
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
                                    </div> -->

                                    <!-- <div
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
                                    </div> -->

                                    <!-- <div
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
                                        @click.prevent="createBorrower"
                                      >
                                        Create Borrower
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
import axios from "axios";
import { ref } from "vue";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
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
import LocalStorageService from "../APIs/token";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Lenders",
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
        firstname: "",
        lastname: "",
        emailaddress: "",
        mobilenumber: "",
      },
      lenders: [],
    };
  },
  methods: {
    getLenders() {
      const lendersAPI = axios.create({
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

      lendersAPI
        .get("/api/users")
        .then((response) => {
          this.lenders = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          console.log("There was an error:", error.data);
        });
    },
    // getBorrowersId() {
    //   const borrowersIDAPI = axios.create({
    //     baseURL: "http://sandbox.pavelon.com",
    //     headers: {
    //       // Authorization: "Bearer " + localStorage.getItem("xbs_token"),
    //       Authorization: "Bearer " + LocalStorageService.getAccessToken(),
    //       "x-api-key": "x64cRjHA3240SSdfdk",
    //       "x-api-version": "v3",
    //       "xbs-token": LocalStorageService.getXbsToken(),
    //     },
    //   });

    //   // extAPI.interceptors.request.use((config) => {
    //   //   config.headers["Authorization"] =
    //   //     "Bearer " + localStorage.getItem("token");
    //   // });

    //   borrowersIDAPI
    //     .get("/api/customers/{clientId}")
    //     .then((response) => {
    //       this.borrowers = response.data.pageItems;
    //       console.log(response.data);
    //     })
    //     .catch((error) => {
    //       console.log("There was an error:", error.data);
    //     });
    // },
    async createBorrower() {
      const createBAPI = axios.create({
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

      await createBAPI
        .post("/api/users", {
          firstname: this.create.firstname,
          lastname: this.create.lastname,
          fullname: this.create.firstname + this.create.lastname,
          emailaddress: this.create.emailaddress,
          mobileNo: this.create.mobilenumber,
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log("There was an error:", error.data);
        });
    },
    updateBorrowers() {
      const updateBAPI = axios.create({
        baseURL: "https://api.sandbox.pavelon.com",
        headers: {
          // Authorization: "Bearer " + localStorage.getItem("xbs_token"),
          Authorization: "Bearer " + LocalStorageService.getAccessToken(),
          "x-api-key": "x64cRjHA3240SSdfdk",
          "x-api-version": "v3",
          "xbs-token": LocalStorageService.getXbsToken(),
        },
      });
      updateBAPI
        .put("/api/users/id")
        .then((response) => {
          this.borrowers = response.data.pageItems;
          console.log(response.data);
        })
        .catch((error) => {
          console.log("There was an error:", error.data);
        });
    },
    deleteBorrowers() {
      const deleteBAPI = axios.create({
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

      deleteBAPI
        .delete("/api/users/id")
        .then((response) => {
          this.borrowers = response.data.pageItems;
          console.log(response.data);
        })
        .catch((error) => {
          console.log("There was an error:", error.data);
        });
    },
  },
  mounted() {
    this.getLenders();
    console.log(this.lenders);
  },
  setup() {
    let isOpen = ref(false);
    let CreateBorrower = ref(null);
    let isTable = ref(false);
    let checkDetails = ref(null);
    let acc_details = ref(Object);

    return {
      isOpen,
      CreateBorrower,
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
          .get(`/api/users/${c_id}`)
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
