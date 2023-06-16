import {
  of,
  map,
  from,
  filter,
  interval,
  skip,
  take,
  tap,
  timeInterval,
} from "rxjs";

/**
 * 간단한 주식 시세 표시기 위젯 시뮬레이션
 */
const Money = function (currency: any, val: any) {
  return {
    value: function () {
      return val;
    },
    currency: function () {
      return currency;
    },
    toString: function () {
      return `${currency} ${val}`;
    },
  };
};

const newRandomNumber = () => Math.floor(Math.random() * 100);
const USDMoney = Money.bind(null, "USD");

interval(2000)
  .pipe(
    timeInterval(),
    skip(1),
    take(5),
    tap((int) => console.log(`Checking time ${int.interval}`)),
    map(() => new USDMoney(newRandomNumber())),
    map((usd) => usd.toString())
  )
  .forEach(console.log);
