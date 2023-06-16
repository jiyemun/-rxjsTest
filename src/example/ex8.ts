import { map, timeInterval, timer, delay } from "rxjs";

timer(1000)
  .pipe(
    delay(2000),
    timeInterval(),
    map((int) => Math.floor(int.interval / 1000))
  )
  .subscribe((seconds) => console.log(seconds));

/*
 3
*/
