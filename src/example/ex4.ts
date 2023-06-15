import { Observable, Observer } from "rxjs";

export const observable = Observable.create((ob: Observer<any>) => {
  const OFFSET = 3000;
  const SPEED = 50;

  let val = 0;
  function progress() {
    if (++val <= 100) {
      ob.next(val);
      console.log("next");
      setTimeout(progress, SPEED);
    } else {
      ob.complete();
    }
  }

  setTimeout(progress, OFFSET);
});

window.onload = function () {
  const label = document.querySelector("#test");
  if (label) {
    observable.subscribe(
      (val: any) =>
        (label.textContent = Number.isInteger(val) ? val + "%" : val),
      (error: Error) => console.log(error.message),
      () => (label.textContent = "Complate!")
    );

    /*
    아래와 같이 변형 가능
    observable.subscribe({
      next(val: any) {
        label.textContent = Number.isInteger(val) ? val + "%" : val;
      },
      error(err: Error) {
        console.log(err.message);
      },
      complete() {
        label.textContent = "Complate!";
      },
    });
     */
  }
};
