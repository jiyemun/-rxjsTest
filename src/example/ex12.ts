/*
import { Button } from "ant-design-vue";
<Button id="test">click!</Button>
 */
import { fromEvent, throttleTime } from "rxjs";
import { onMounted } from "vue";

onMounted(() => {
  const BTN = document.querySelector("#test");
  if (BTN) {
    fromEvent(BTN, "click")
      .pipe(throttleTime(2000))
      .subscribe((e) => {
        console.log(e, "click~~");
      });
  }
});
