<template>
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog
        as="div"
        class="relative z-40 md:hidden"
        @close="sidebarOpen = false"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-gray-900 bg-opacity-75" />
        </TransitionChild>

        <div class="fixed inset-0 flex z-40">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <DialogPanel
              class="relative flex-1 flex flex-col max-w-xs w-full bg-gray-900"
            >
              <TransitionChild
                as="template"
                enter="ease-in-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-300"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <div class="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    @click="sidebarOpen = false"
                  >
                    <span class="sr-only">Close sidebar</span>
                    <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                <div class="flex-shrink-0 flex items-center px-4">
                  <img
                    class="h-8 w-auto"
                    src="../assets/PavelonLogo(white).png"
                    alt="Workflow"
                  />
                </div>
                <nav class="mt-5 px-2 space-y-1">
                  <a
                    v-for="item in navigation"
                    :key="item.name"
                    :href="item.href"
                    :class="[
                      item.current
                        ? 'bg-gray-700 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'group flex items-center px-2 py-2 text-base font-bold rounded-md',
                    ]"
                  >
                    <component
                      :is="item.icon"
                      :class="[
                        item.current
                          ? 'text-gray-300'
                          : 'text-gray-400 group-hover:text-gray-300',
                        'mr-4 flex-shrink-0 h-6 w-6',
                      ]"
                      aria-hidden="true"
                    />
                    {{ item.name }}
                  </a>
                </nav>
              </div>
              <div class="flex-shrink-0 flex bg-gray-900 p-4">
                <a href="#" class="flex-shrink-0 group block">
                  <div class="flex items-center">
                    <div>
                      <img
                        class="inline-block h-10 w-10 rounded-full"
                        src="../assets/profiler.png"
                        alt=""
                      />
                    </div>
                    <div class="ml-3">
                      <p class="text-base font-medium text-white">Chak Sack</p>
                      <p
                        class="text-sm font-medium text-gray-400 group-hover:text-gray-300"
                      >
                        View profile
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </DialogPanel>
          </TransitionChild>
          <div class="flex-shrink-0 w-14">
            <!-- Force sidebar to shrink to fit close icon -->
          </div>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex-1 flex flex-col min-h-0 bg-gray-900">
        <div class="flex-1 flex flex-col pt-8 px-8 pb-4 overflow-y-auto">
          <div class="flex items-center flex-shrink-0 px-4">
            <img
              class="h-10 w-auto"
              src="../assets/PavelonLogo(white).png"
              alt="Workflow"
            />
          </div>
          <nav class="mt-5 flex-1 px-2 space-y-1">
            <a
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              :class="[
                item.current
                  ? 'bg-gray-600 w-64 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'group flex items-center px-2 py-2 text-lg font-bold rounded-md',
              ]"
            >
              <component
                :is="item.icon"
                :class="[
                  item.current
                    ? 'text-gray-300'
                    : 'text-gray-400 group-hover:text-gray-300',
                  'mr-3 flex-shrink-0 h-6 w-6',
                ]"
                aria-hidden="true"
              />
              {{ item.name }}
            </a>
          </nav>
        </div>
        <div class="flex-shrink-0 flex bg-gray-900 p-4">
          <a href="#" class="flex-shrink-0 w-full group block">
            <div class="flex items-center">
              <div>
                <img
                  class="inline-block h-9 w-9 rounded-full"
                  src="../assets/profiler.png"
                  alt=""
                />
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-white">Chak Sack</p>
                <p
                  class="text-xs font-medium text-gray-300 group-hover:text-gray-200"
                >
                  View profile
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="md:pl-64 flex flex-col flex-1">
      <div
        class="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100"
      >
        <button
          type="button"
          class="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          @click="sidebarOpen = true"
        >
          <span class="sr-only">Open sidebar</span>
          <MenuIcon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <main class="flex-1">
        <div class="py-6">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <!-- Replace with your content -->
            <div class="py-4">
              <div class="flex min-h-full">
                <div>
                  <SideBar />
                </div>
                <div
                  class="relative top-16 right-11 px-10 sm:px-6 lg:px-8 flex-1"
                >
                  <div class="sm:flex sm:items-center">
                    <div class="mt-4 sm:mt-0 sm:ml-11 sm:flex-none">
                      <Menu>
                        <MenuButton
                          class="inline-flex justify-center w-full font-sans font-bold text-2xl rounded-md border-none border-white px-4 py-2 bg-white text-gray-700 hover:bg-gray-200 focus:outline-none"
                        >
                          Applications
                          <ChevronDownIcon
                            class="-mr-1 ml-2 h-5 w-5"
                            aria-hidden="true"
                          />
                        </MenuButton>

                        <transition
                          enter-active-class="transition ease-out duration-100"
                          enter-from-class="transform opacity-0 scale-95"
                          enter-to-class="transform opacity-100 scale-100"
                          leave-active-class="transition ease-in duration-75"
                          leave-from-class="transform opacity-100 scale-100"
                          leave-to-class="transform opacity-0 scale-95"
                        >
                          <MenuItems
                            class="origin-top-left absolute left-11 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                          >
                            <div class="py-1">
                              <MenuItem v-slot="{ active }">
                                <a
                                  href="#"
                                  :class="[
                                    active
                                      ? 'bg-gray-100 text-gray-900'
                                      : 'text-gray-700',
                                    'block px-4 py-2 text-sm',
                                  ]"
                                  >Credit Application</a
                                >
                              </MenuItem>
                              <MenuItem v-slot="{ active }">
                                <a
                                  href="#"
                                  :class="[
                                    active
                                      ? 'bg-gray-100 text-gray-900'
                                      : 'text-gray-700',
                                    'block px-4 py-2 text-sm',
                                  ]"
                                  >Savings Application</a
                                >
                              </MenuItem>
                            </div>
                          </MenuItems>
                        </transition>
                      </Menu>
                    </div>
                    <div class="flex-auto">
                      <p class="mt-2 text-sm text-gray-700">
                        A list of all the Loan Applications in your account
                        including their name, title, email.
                      </p>
                    </div>
                    <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                      <button
                        type="button"
                        class="inline-flex items-center justify-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-lg font-bold text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:w-auto"
                        ref="CreateStaff"
                        @click="setIsOpen(true)"
                      >
                        New Application
                      </button>
                    </div>
                  </div>
                  <form class="w-full ml-16 max-w-sm">
                    <div
                      class="flex items-center border-b border-gray-500 py-2"
                    >
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
                                  Name
                                </th>
                                <th
                                  scope="col"
                                  class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                >
                                  ID Number
                                </th>
                                <th
                                  scope="col"
                                  class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                >
                                  Phone Number
                                </th>
                                <th
                                  scope="col"
                                  class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                >
                                  Email
                                </th>
                                <th
                                  scope="col"
                                  class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                >
                                  Role
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
                              <tr v-for="person in loans" :key="person.email">
                                <td
                                  class="whitespace-nowrap py-3.5 pl-4 pr-3 text-sm text-left font-medium text-gray-500 sm:pl-6 lg:pl-8"
                                  @click="setIsTable(true)"
                                >
                                  {{ person.id }}
                                </td>
                                <td
                                  class="whitespace-nowrap py-3.5 pl-4 pr-3 text-sm text-left font-medium text-gray-900 sm:pl-6 lg:pl-8"
                                  @click="setIsTable(true)"
                                >
                                  {{ person.name }}
                                </td>
                                <td
                                  class="whitespace-nowrap px-3 py-3.5 text-sm text-left text-gray-500"
                                  @click="setIsTable(true)"
                                >
                                  {{ person.idnumber }}
                                </td>
                                <td
                                  class="whitespace-nowrap px-3 py-3.5 text-sm text-left text-gray-500"
                                >
                                  {{ person.phonenumber }}
                                </td>
                                <td
                                  class="whitespace-nowrap px-3 py-3.5 text-sm text-left text-gray-500"
                                >
                                  {{ person.email }}
                                </td>
                                <td
                                  class="whitespace-nowrap px-3 py-3.5 text-sm text-left text-gray-500"
                                >
                                  {{ person.role }}
                                </td>
                                <td
                                  class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 lg:pr-8"
                                >
                                  <Menu
                                    as="div"
                                    class="flex-shrink-0 pr-2 py-4"
                                  >
                                    <MenuButton
                                      class="w-8 h-8 bg-gray inline-flex items-center justify-center text-gray-400 rounded-full hover:text-gray-500"
                                    >
                                      <span class="sr-only">Open options</span>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                      >
                                        <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                        />
                                      </svg>
                                    </MenuButton>
                                    <transition
                                      enter-active-class="transition ease-out duration-100"
                                      enter-from-class="transform opacity-0 scale-95"
                                      enter-to-class="transform opacity-100 scale-100"
                                      leave-active-class="transition ease-in duration-75"
                                      leave-from-class="transform opacity-100 scale-100"
                                      leave-to-class="transform opacity-0 scale-95"
                                    >
                                      <MenuItems
                                        class="z-10 mx-3 origin-top-right absolute right-10 top-3 w-48 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none"
                                      >
                                        <div class="py-1">
                                          <MenuItem v-slot="{ active }">
                                            <a
                                              href="#"
                                              :class="[
                                                active
                                                  ? 'bg-gray-100 text-green-900'
                                                  : 'text-green-700',
                                                'block px-4 py-2 text-sm',
                                              ]"
                                            >
                                              Activate Staff</a
                                            >
                                          </MenuItem>
                                          <MenuItem v-slot="{ active }">
                                            <a
                                              href="#"
                                              :class="[
                                                active
                                                  ? 'bg-gray-100 text-red-900'
                                                  : 'text-red-700',
                                                'block px-4 py-2 text-sm',
                                              ]"
                                              >Deactivate Staff</a
                                            >
                                          </MenuItem>
                                        </div>
                                      </MenuItems>
                                    </transition>
                                  </Menu>
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
                                <DialogPanel
                                  class="pointer-events-auto w-screen max-w-2xl"
                                >
                                  <div
                                    class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl"
                                  >
                                    <div class="px-4 sm:px-6">
                                      <div
                                        class="flex items-start justify-between"
                                      >
                                        <DialogTitle
                                          class="text-lg font-medium text-gray-900"
                                        >
                                          view Staff's details
                                        </DialogTitle>
                                        <div class="ml-3 flex h-7 items-center">
                                          <button
                                            type="button"
                                            class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                                            @click="setIsTable(false)"
                                          >
                                            <span class="sr-only"
                                              >Close panel</span
                                            >
                                            <XIcon
                                              class="h-6 w-6"
                                              aria-hidden="true"
                                            />
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      class="relative mt-6 flex-1 px-4 sm:px-6"
                                    >
                                      <!-- Replace with your content -->

                                      <div
                                        class="absolute inset-0 px-4 sm:px-6"
                                      >
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
                                <DialogPanel
                                  class="pointer-events-auto w-screen max-w-2xl"
                                >
                                  <div
                                    class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl"
                                  >
                                    <div class="px-4 sm:px-6">
                                      <div
                                        class="flex items-start justify-between"
                                      >
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
                                            <span class="sr-only"
                                              >Close panel</span
                                            >
                                            <XIcon
                                              class="h-6 w-6"
                                              aria-hidden="true"
                                            />
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      class="relative mt-6 flex-1 px-4 sm:px-6"
                                    >
                                      <!-- Replace with your content -->
                                      <div
                                        class="bg-white shadow px-4 py-5 sm:rounded-lg lg:p-6"
                                      >
                                        <div
                                          class="lg:grid lg:grid-cols-2 lg:gap-6"
                                        >
                                          <div
                                            class="mt-5 md:mt-0 md:col-span-2"
                                          >
                                            <form action="#" method="POST">
                                              <div
                                                class="grid grid-cols-6 gap-6"
                                              >
                                                <div
                                                  class="col-span-6 md:col-span-3"
                                                >
                                                  <label
                                                    for="first-name"
                                                    class="block text-sm font-medium text-gray-700"
                                                    >First name</label
                                                  >
                                                  <input
                                                    type="text"
                                                    name="first-name"
                                                    id="first-name"
                                                    autocomplete="given-name"
                                                    class="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                  />
                                                </div>

                                                <div
                                                  class="col-span-6 md:col-span-3"
                                                >
                                                  <label
                                                    for="last-name"
                                                    class="block text-sm font-medium text-gray-700"
                                                    >Last name</label
                                                  >
                                                  <input
                                                    type="text"
                                                    name="last-name"
                                                    id="last-name"
                                                    autocomplete="family-name"
                                                    class="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                  />
                                                </div>

                                                <div
                                                  class="col-span-6 lg:col-span-4"
                                                >
                                                  <label
                                                    for="email-address"
                                                    class="block text-sm font-medium text-gray-700"
                                                    >Email address</label
                                                  >
                                                  <input
                                                    type="text"
                                                    name="email-address"
                                                    id="email-address"
                                                    autocomplete="email"
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

                                                <div class="col-span-6">
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
                                                </div>
                                                <div
                                                  class="col-span-6 lg:col-span-4"
                                                >
                                                  <button
                                                    type="button"
                                                    class="inline-flex items-center justify-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-lg font-bold text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:w-auto"
                                                    @click="setIsOpen(false)"
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
              <!-- /End replace -->
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
const navigation = [
  { name: "Application", href: "/dashboard", icon: HomeIcon, current: true },
  { name: "Products", href: "/products", icon: FolderIcon, current: false },
  { name: "Borrowers", href: "/borrowers", icon: UsersIcon, current: false },
  {
    name: "Disbursment",
    href: "/disbursment",
    icon: LibraryIcon,
    current: false,
  },
  { name: "Analytics", href: "/analytics", icon: ChartBarIcon, current: false },
  {
    name: "Reports",
    href: "/reports",
    icon: DocumentReportIcon,
    current: false,
  },
  { name: "Logout", href: "/", icon: LogoutIcon, current: false },
];

import Footer from "../components/Footer";
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  CalendarIcon,
  ChartBarIcon,
  LogoutIcon,
  FolderIcon,
  HomeIcon,
  DocumentReportIcon,
  MenuIcon,
  UsersIcon,
  XIcon,
  ChevronDownIcon,
} from "@heroicons/vue/outline";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { LibraryIcon } from "@heroicons/vue/solid";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Test",
  components: {
    ChevronDownIcon,
    Menu,
    MenuButton,
    MenuIcon,
    MenuItem,
    MenuItems,
    Footer,
    Dialog,
    DialogPanel,
    TransitionChild,
    TransitionRoot,
    XIcon,
    CalendarIcon,
    ChartBarIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon,
  },

  setup() {
    let sidebarOpen = ref(false);

    return {
      navigation,
      sidebarOpen,
    };
  },
};
</script>
