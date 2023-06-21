/**
 * merge() 이벤트가 도착한 순서대로 단일 스트림에 배치
 */
import { merge, interval, map, of } from "rxjs";

const timer1 = interval(1000).pipe(
  map(() => {
    return "x1";
  })
);
const timer2 = interval(1000).pipe(
  map(() => {
    return "x2";
  })
);
const clicksOrTimer = merge(timer1, timer2);
clicksOrTimer.subscribe((x) => console.log(x));
/*
	x1
	x2
	x1
	x2
*/

const data1 = of(1, 2, 3);
const data2 = of("a", "b", "c");
merge(data1, data2).subscribe(console.log);
/*
	1
	2
	3
	a
	b
	c
*/
