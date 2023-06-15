import { of, map, from, filter } from "rxjs";

of(1, 2, 3)
  .pipe(map((x) => x * x))
  .subscribe((v) => console.log(`value: ${v}`));

const array = [10, 20, 30];
const result = from(array);

result.subscribe((x) => console.log(x));

// 나이 제한하기
const age = (item: number) => item >= 20 && item < 30;

of(10, 20, 63, 22, 26, 27, 32, 33).pipe(filter(age)).subscribe(console.log);
