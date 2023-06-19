import { buffer, timer } from "rxjs";

/**
 * 500ms로 이벤트를 버퍼링함
 * 500/50 -> 10개의 이벤트가 한 번에 방출
 * 결과 : buffer:0,1,2,3,4,5,6,7,8,9
 */
timer(0, 50)
  .pipe(buffer(timer(500)))
  .subscribe((item) => {
    console.log(`buffer:${item}`);
  });
