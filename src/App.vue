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
        <MenuItem key="1">HOME</MenuItem>
        <MenuItem key="2">EX22</MenuItem>
        <MenuItem key="3">EX23</MenuItem>
      </Menu>
    </LayoutHeader>
    <LayoutContent>
      <div :style="{ background: '#fff', padding: '24px', height: '100%' }">
        <template v-if="selectedKeys == '1'">
          <Home />
        </template>
        <template v-if="selectedKeys == '2'">
          <Example22 />
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

const selectedKeys = ref<string[]>(["1"]);
</script>

<style scoped></style>
