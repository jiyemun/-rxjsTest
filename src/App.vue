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
        <MenuItem key="1">nav 1</MenuItem>
        <MenuItem key="2">nav 2</MenuItem>
        <MenuItem key="3">nav 3</MenuItem>
      </Menu>
    </LayoutHeader>
    <LayoutContent>
      <div :style="{ background: '#fff', padding: '24px', height: '100%' }">
        Content
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

const selectedKeys = ref<string[]>(["1"]);
</script>

<style scoped></style>
