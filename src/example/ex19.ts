/**
 * concat() 스트림을 연결하여 이벤트 순서 유지
 */
import { interval, map, of, delay, concat, take, range } from "rxjs";

/**
 * timer2가 5초 지연된 후 3번 출력 후에 timer1 출력
 */
const timer1 = interval(1000).pipe(
  map(() => {
    return "x1";
  })
);
const timer2 = interval(1000).pipe(
  delay(5000),
  map(() => {
    return "x2";
  }),
  take(3)
);
const clicksOrTimer = concat(timer2, timer1);
clicksOrTimer.subscribe((x) => console.log(x));
/*
  x2
  x2
  x2
  x1
  x1
  x1 ...
 */

/**
 * 첫 번째 스트림이 3초 지연된 출력후 두 번째 스트림 방출
 */
const source1 = range(1, 3).pipe(delay(3000));
const source2 = of("a", "b", "c");
concat(source1, source2).subscribe(console.log);
/*
  1
  2
  3
  a
  b
  c
*/
