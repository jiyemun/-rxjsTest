/*
    <input id="formField" />
    <ul id="history"></ul>
    <Button id="showBtn">기록보기</Button>
*/
import { fromEvent, map, bufferTime, combineLatest, take } from "rxjs";
import { onMounted } from "vue";

/**
 * 버튼을 누르면 3초 간격으로 비밀번호를 체크함
 */
onMounted(() => {
  const field = document.querySelector("#formField");
  const historyPanel = document.querySelector("#history");
  const showBtn = document.querySelector("#showBtn");

  const password = fromEvent(field, "keyup").pipe(
    map(({ keyCode }) => keyCode)
  );

  const submit = fromEvent(showBtn, "click");

  combineLatest(password.pipe(bufferTime(3000)), submit)
    .pipe(take(3))
    .subscribe(
      ([maybePassword]) => {
        console.log(maybePassword.join(""), "password");
        // 96 = 숫자 0
        if (maybePassword.join("") === "96969696") {
          historyPanel.innerHTML = "Correct Password!";
        } else {
          historyPanel.innerHTML = "Wrong Password!";
        }
      },
      null,
      () => (historyPanel.innerHTML += "\n No more tries accepted!")
    );
});
