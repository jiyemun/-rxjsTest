<template>
  <Card title="Comment">
    <List :data-source="state.data">
      <template #renderItem="{ item }">
        <ListItem>{{ item.name }}</ListItem>
      </template>
    </List>
    <Pagination v-model:current="currentPage" :total="50"></Pagination>
  </Card>
</template>

<script lang="ts" setup>
import { ajax } from "rxjs/ajax";
import { map, catchError, of, debounceTime, Subject, mergeMap } from "rxjs";
import { Pagination, List, ListItem, Card } from "ant-design-vue";
import { reactive, ref, watch } from "vue";

const currentPage = ref(1);
const state = reactive({
  data: [] as any,
});
const currentPageSubject = new Subject();

currentPageSubject
  .pipe(
    debounceTime(50),
    mergeMap((page: any) =>
      ajax(`https://jsonplaceholder.typicode.com/comments?postId=${page}`).pipe(
        map((res) => res.response),
        catchError((error) => {
          console.log("error: ", error);
          return of(error);
        })
      )
    )
  )
  .subscribe((list) => {
    state.data = [...list];
  });

watch(
  currentPage,
  (newValue) => {
    currentPageSubject.next(newValue);
  },
  { immediate: true }
);
</script>

<style scoped></style>
