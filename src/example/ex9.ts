import { delay, of, tap } from "rxjs";

of([1, 2, 3, 4, 5])
  .pipe(
    tap((x) => console.log(`Emitted: ${x}`)),
    delay(2000)
  )
  .subscribe((x) => console.log(`Received: ${x}`));

/*
	Emitted: 1,2,3,4,5
	2초후
	Received: 1,2,3,4,5
*/
