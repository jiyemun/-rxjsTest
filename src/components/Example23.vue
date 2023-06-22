<template>
  <Row :gutter="16" type="flex">
    <Col :lg="6" flex="auto">
      <Card
        title="mergeMap()"
        style="margin-bottom: 20px"
        :bodyStyle="{ minHeight: '300px' }"
      >
        <p>
          내부 옵저버블을 다시 단일 옵저버블 구조로 압축, 여러번 클릭시에 바로
          바로 새로 시작됨
        </p>
        <button ref="mergeMapBtn">click!</button>
      </Card>
    </Col>
    <Col :lg="6" flex="auto">
      <Card title="concatMap()" :bodyStyle="{ minHeight: '300px' }">
        <p>
          mergeMap()과 비슷하게 병합이 연속적으로 발생하지만 이벤트를
          인터리빙(끼워넣기) 하지 않고 옵저버블 시퀀스의 순서를 유지하는 로직을
          수행 (각 옵저버블은 이전 옵저버블이 완료될 때 까지 대기함)
        </p>
        <button ref="concatMapBtn">click!</button>
      </Card>
    </Col>
  </Row>
</template>

<script lang="ts" setup>
import { onMounted, ref, unref } from "vue";
import { Card, Button, Row, Col } from "ant-design-vue";
import { fromEvent, concatMap, interval, take, mergeMap } from "rxjs";

const mergeMapBtn = ref<HTMLElement>();

const concatMapBtn = ref<HTMLElement>();

onMounted(() => {
  const el1 = unref(mergeMapBtn);
  if (el1) {
    const clicks = fromEvent(el1, "click");
    const result = clicks.pipe(mergeMap(() => interval(1000).pipe(take(4))));
    result.subscribe((x) => console.log(x));
  }

  const el2 = unref(concatMapBtn);
  if (el2) {
    const clicks = fromEvent(el2, "click");
    const result = clicks.pipe(concatMap(() => interval(1000).pipe(take(4))));
    result.subscribe((x) => console.log(x));
  }
});
</script>

<style scoped></style>
