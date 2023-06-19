/*
  <textarea id="formField" style="width: 500px; height: 500px" />
  <ul id="history"></ul>
  <Button id="showBtn">기록보기</Button>
*/
import { fromEvent, debounceTime, pluck, bufferWhen, tap } from "rxjs";
import { onMounted } from "vue";

/**
 * 폼에 입력을 하면 debounceTime() 으로 700ms 간격으로 버퍼에 기록을 함
 * bufferWhen() 이 기록보기 버튼을 클릭할 때까지 버퍼링함
 * 기록보기 버튼을 눌렀을 때 이벤트를 방출하고 버퍼의 기록을 지움
 */

onMounted(() => {
  const field = document.querySelector("#formField");
  const historyPanel = document.querySelector("#history");
  const showBtn = document.querySelector("#showBtn");

  const showHistory = fromEvent(showBtn, "click");
  fromEvent(field, "keyup")
    .pipe(
      debounceTime(700),
      pluck("target", "value"),
      bufferWhen(() => showHistory),
      tap((history) => history.pop())
    )
    .subscribe((history) => {
      let contents = "";
      if (history.length > 0) {
        for (let item of history) {
          contents += "<li>" + item + "</li>";
        }
        historyPanel.innerHTML = contents;
      }
    });
});
