import { delay, of, map, from } from "rxjs";

from([1, 2, 3, 4, 5])
  .pipe(
    map((x) => {
      console.log(`Emitted: ${x}`);
      return x;
    }),
    map((x) => {
      console.log(`2Emitted: ${x}`);
      return x;
    }),
    delay(2000)
  )
  .subscribe((x) => console.log(`Received: ${x}`));
/*
    Emitted: 1
    2Emitted: 1
    Emitted: 2
    2Emitted: 2
    Emitted: 3
    2Emitted: 3
    Emitted: 4
    2Emitted: 4
    Emitted: 5
    2Emitted: 5
    Received: 1
    Received: 2
    Received: 3
    Received: 4
    Received: 5
 */

of([1, 2, 3, 4, 5])
  .pipe(
    map((x) => {
      console.log(`Emitted: ${x}`);
      return x;
    }),
    map((x) => {
      console.log(`2Emitted: ${x}`);
      return x;
    }),
    delay(2000)
  )
  .subscribe((x) => console.log(`Received: ${x}`));
/*
    Emitted: 1,2,3,4,5
    2Emitted: 1,2,3,4,5
    Received: 1,2,3,4,5
 */
