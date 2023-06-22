<template>
  <Card title="RxJS를 공부해보자">
    <List :data-source="state.data">
      <template #renderItem="{ item }">
        <ListItem>{{ item.text }}</ListItem>
      </template>
    </List>
  </Card>
</template>

<script lang="ts" setup>
import { List, ListItem, Card } from "ant-design-vue";
import { reactive } from "vue";

const state = reactive({
  data: [
    {
      text: "RxJS의 핵심은 'Reactive Extensions' 라고 알려진 개념에 기반을 두고 있습니다. RxJs는 이 개념을 Javascript에 적용한 라이브러리 입니다.",
    },
    {
      text: "'Reactive Extensions' 는 함수형 프로그래밍과 옵저버 패턴을 결합한 개념으로 비동기 데이터 스트림을 쉽게 처리하고 조작할 수 있는 방법을 제공합니다. 이를 통해 복잡한 비동기 코드를 간결하고 직관적으로 작성할 수 있습니다.",
    },
    {
      text: "옵저버블(Observable) : 옵저버블은 비동기적으로 발생하는 데이터 스트림을 나타내는 객체 입니다. 이 스트림은 값을 생성하거나, 변경되는 값을 방출하고, 완료 또는 에러를 알리는 등의 동작을 수행합니다.",
    },
    {
      text: "옵저버(Observer) : 옵저버는 옵저버블에서 방출되는 값을 처리하는 객체입니다. 옵저버는 'next' 메서드를 통해 값을 처리하고, 'error' 와 'complete' 메서드를 통해 에러와 완료를 처리합니다.",
    },
    {
      text: "연산자(Operators) : 연산자는 옵저버블을 변환, 조작, 조합하거나 필터링 하는 함수입니다. 연산자를 사용하여 데이터를 반환하거나 조작하여 다양한 비동기 처리 작업을 수행할 수 있습니다.",
    },
    {
      text: "구독(Subscription) : 구독은 옵저버블을 옵저버에 연결하는 과정을 말합니다. 구독을 통해 옵저버는 옵저버블의 값들을 비동기적으로 받아올 수 있습니다. 구독을 해제하면 옵저버블로 부터 더이상 값을 수신하지 않게 됩니다.",
    },
    {
      text: "RxJS는 이러한 핵심 개념과 함께 다양한 기능과 연산자를 제공하여 비동기 데이터 처리를 쉽게 할 수 있도록 도와줍니다. 이를 통해 복잡한 비동기 로직을 간결하게 표현하고, 데이터 흐름을 관리하며, 에러 처리를 용이하게 할 수 있습니다.",
    },
  ],
});
</script>

<style scoped></style>
