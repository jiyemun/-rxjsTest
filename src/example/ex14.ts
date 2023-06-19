/*
    <div>
        <input id="amount" />
        <div id="amount-warning">경고</div>
    </div>
*/
import { onMounted } from "vue";
import { fromEvent, bufferCount, map, filter } from "rxjs";

/**
 * 데이터의 크기가 특정 수에 도달하면 데이터가 방출되고 새 버퍼가 시작됨
 * 결과 : 숫자의 갯수가 5가 넘으면 경고 색상이 바뀜
 */
onMounted(() => {
  const textBox = document.querySelector("#amount");
  const msg = document.querySelector("#amount-warning");

  if (textBox) {
    fromEvent(textBox, "keyup")
      .pipe(
        bufferCount(5),
        map((event) => event[0].target?.value),
        map((val) => parseInt(val, 10)),
        filter((val) => !Number.isNaN(val))
      )
      .subscribe(() => {
        msg?.setAttribute("style", "color:red;");
      });
  }
});
