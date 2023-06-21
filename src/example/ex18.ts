/**
 * 데이터를 정규화 하여 스트림 병합
 * 마우스 클릭이나 터치 이벤트와 같이 완전히 다른 인터페이스를 가져도 구독 영역에서 예상하는 인터페이스로 변환하여 사용하면 더 쉽게 확장 가능
 */
import { merge, fromEvent, map } from "rxjs";

const mouseUp = fromEvent(document, "mouseup").pipe(
  map((data: any) => {
    return {
      x: data.offsetX,
      y: data.offsetY,
    };
  })
);
const mouseDown = fromEvent(document, "mousedown").pipe(
  map((data: any) => {
    return {
      x: data.screenX,
      y: data.screenY,
    };
  })
);

merge(mouseUp, mouseDown).subscribe(console.log);
