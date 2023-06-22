<template>
  <Layout :style="{ height: '100vh' }">
    <LayoutHeader class="header">
      <div class="logo" />
      <Menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
      >
        <MenuItem
          v-for="(item, index) in menu"
          :key="index"
          style="text-transform: uppercase"
        >
          {{ item.title }}
        </MenuItem>
      </Menu>
    </LayoutHeader>
    <LayoutContent>
      <div :style="{ background: '#fff', padding: '24px', height: '100%' }">
        <template v-for="(item, index) in menu">
          <component
            :is="item.component"
            v-if="selectedKeys == index"
          ></component>
        </template>
      </div>
    </LayoutContent>
    <LayoutFooter> ©2023 Created by Jiye </LayoutFooter>
  </Layout>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import {
  MenuItem,
  Layout,
  LayoutHeader,
  LayoutFooter,
  LayoutContent,
  Menu,
} from "ant-design-vue";
import Home from "./components/Home.vue";
import Example22 from "./components/Example22.vue";

const selectedKeys = ref<number[]>([0]);

const menu = [
  {
    title: "home",
    component: Home,
  },
  {
    title: "ex22",
    component: Example22,
  },
];
</script>

<style scoped></style>
