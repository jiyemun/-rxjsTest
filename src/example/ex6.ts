import { map, from, filter } from "rxjs";

const original = [1, 2, 3];
const result = original
  .filter((x) => {
    console.log(`filtering ${x}`);
    return x % 2 !== 0;
  })
  .map((x) => {
    console.log(`mapping ${x}`);
    return x * x;
  });
console.log(result);
/*
    filtering 1
    filtering 2
    filtering 3
    mapping 1
    mapping 3
*/

from(original)
  .pipe(
    filter((x) => {
      console.log(`filtering ${x}`);
      return x % 2 !== 0;
    }),
    map((x) => {
      console.log(`mapping ${x}`);
      return x * x;
    })
  )
  .subscribe();
/*
    filtering 1
    mapping 1
    filtering 2
    filtering 3
    mapping 3
 */
