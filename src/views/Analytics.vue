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
              Analytics
            </MenuButton>
          </Menu>
        </div>
      </div>
    </div>
    <div>
      <h3 class="text-lg leading-6 font-medium text-gray-900">Last 30 days</h3>

      <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="item in stats"
          :key="item.id"
          class="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
        >
          <dt>
            <div class="absolute bg-indigo-500 rounded-md p-3">
              <component
                :is="item.icon"
                class="h-6 w-6 text-white"
                aria-hidden="true"
              />
            </div>
            <p class="ml-16 text-sm font-medium text-gray-500 truncate">
              {{ item.name }}
            </p>
          </dt>
          <dd class="ml-16 pb-6 flex items-baseline sm:pb-7">
            <p class="text-2xl font-semibold text-gray-900">
              {{ item.stat }}
            </p>
            <p
              :class="[
                item.changeType === 'increase'
                  ? 'text-green-600'
                  : 'text-red-600',
                'ml-2 flex items-baseline text-sm font-semibold',
              ]"
            >
              <ArrowSmUpIcon
                v-if="item.changeType === 'increase'"
                class="self-center flex-shrink-0 h-5 w-5 text-green-500"
                aria-hidden="true"
              />
              <ArrowSmDownIcon
                v-else
                class="self-center flex-shrink-0 h-5 w-5 text-red-500"
                aria-hidden="true"
              />
              <span class="sr-only">
                {{ item.changeType === "increase" ? "Increased" : "Decreased" }}
                by
              </span>
              {{ item.change }}
            </p>
            <div
              class="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6"
            >
              <div class="text-sm">
                <a
                  href="#"
                  class="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  View all<span class="sr-only"> {{ item.name }} stats</span></a
                >
              </div>
            </div>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script>
import { ArrowSmDownIcon, ArrowSmUpIcon } from "@heroicons/vue/solid";
import {
  CursorClickIcon,
  MailOpenIcon,
  UsersIcon,
} from "@heroicons/vue/outline";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";

const stats = [
  {
    id: 1,
    name: "Total Subscribers",
    stat: "71,897",
    icon: UsersIcon,
    change: "122",
    changeType: "increase",
  },
  {
    id: 2,
    name: "Avg. Open Rate",
    stat: "58.16%",
    icon: MailOpenIcon,
    change: "5.4%",
    changeType: "increase",
  },
  {
    id: 3,
    name: "Avg. Click Rate",
    stat: "24.57%",
    icon: CursorClickIcon,
    change: "3.2%",
    changeType: "decrease",
  },
];
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Analytics",
  components: {
    stats,
    ArrowSmDownIcon,
    ArrowSmUpIcon,
    CursorClickIcon,
    MailOpenIcon,
    UsersIcon,
    SideBar,
    Footer,
  },
};
</script>
