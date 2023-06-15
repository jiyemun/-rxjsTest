import { Observable, Observer } from "rxjs";

/**
 * create()로 사용자 정의 옵저버블을 생성하고 무한한 간격으로 스트림을 복제하는 경우에는 적절한 구독 취소 동작을 제공해야함.
 * 무한히 실행되어 메모리 누수가 발생함을 방지
 */
export const observable = Observable.create((ob: Observer<any>) => {
  const OFFSET = 3000;
  const SPEED = 50;

  let val = 0;
  let time = 0;
  function progress() {
    if (++val <= 100) {
      ob.next(val);
      console.log(val);
      time = setTimeout(progress, SPEED);
    } else {
      ob.complete();
    }
  }

  time = setTimeout(progress, OFFSET);

  /**
   * unsubscribe 메서드가 호출될 때 실행되는 함수
   */
  return () => {
    clearTimeout(time);
  };
});

export const subscribe = () => {
  observable.subscribe();
};
