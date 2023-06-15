import { Observable, Observer } from "rxjs";

export const observable = Observable.create((observer: Observer<string>) => {
  console.log(observer, "observer");
  observer.next("11111111111111111111");
  observer.next("22222222222222222222");
  observer.next("33333333333333333333");
  observer.next("44444444444444444444");
  observer.complete();
}); // 이 시점에서 옵저버블은 유휴 상태이며 어떠한 데이터도 옵저버로 방출되거나 전달되지 않음

export const subscribe = (): void => {
  observable.subscribe(console.log); // subscribe() 를 사용하면 옵저버 로직이 실행. 이 경우에는 콘솔에 출력됨
};
