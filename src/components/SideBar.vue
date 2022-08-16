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
                      <p class="text-base font-medium text-white">
                        {{ user.name }}
                      </p>
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
    <div class="hidden md:flex md:w-64 md:flex-col z-10 md:fixed md:inset-y-0">
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
        <!-- <div class="flex-shrink-0 flex bg-gray-900 p-4">
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
        </div> -->
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
      <!-- <main class="flex-1">
        <div class="py-6">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1>
          </div>
          <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8"> -->
      <!-- Replace with your content -->
      <!-- <div class="py-4">
              <div
                class="border-4 border-dashed border-gray-200 rounded-lg h-96"
              />
            </div> -->
      <!-- /End replace -->
      <!-- </div>
        </div>
      </main> -->
    </div>
  </div>
</template>

<script>
const navigation = [
  { name: "Application", href: "/dashboard", icon: HomeIcon, current: false },
  { name: "Products", href: "/products", icon: FolderIcon, current: false },
  { name: "Domains", href: "/domains", icon: UsersIcon, current: false },
  { name: "Lenders", href: "/lenders", icon: UsersIcon, current: false },
  { name: "Borrowers", href: "/borrowers", icon: UsersIcon, current: false },
  // {
  //   name: "Disbursment",
  //   href: "/disburse",
  //   icon: LibraryIcon,
  //   current: false,
  // },
  { name: "Analytics", href: "/analytics", icon: ChartBarIcon, current: false },
  {
    name: "Reports",
    href: "/reports",
    icon: DocumentReportIcon,
    current: false,
  },
  { name: "Logout", href: "/", icon: LogoutIcon, current: false },
];

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
} from "@heroicons/vue/outline";
// import { LibraryIcon } from "@heroicons/vue/solid";
import { useRouter } from "vue-router";
import axios from "axios";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Sidebar",
  components: {
    Dialog,
    DialogPanel,
    TransitionChild,
    TransitionRoot,
    MenuIcon,
    XIcon,
    CalendarIcon,
    ChartBarIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon,
  },

  setup() {
    let sidebarOpen = ref(false);
    const router = useRouter();
    const logout = async () => {
      await axios.post("logout", {}, { withCredentials: true });
      axios.defaults.headers.common["Aujthorization"] = "";
      await router.push("/");
    };
    return {
      navigation,
      sidebarOpen,
      logout,
    };
  },
};
</script>
