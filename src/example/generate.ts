/**
 * 제너레이터
 * 일반 함수는 하나의 값(혹은 0개의 값)만을 반환
 * 여러 개의 값을 필요에 따라 하나씩 반환(yield)할 수 있음
 * 함수를 호출하면 실행을 처리하는 특별 객체가 반환됨
 */
function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

let generator = generateSequence();

/**
 * next()를 호출하면 가장 가까운 yield <value>문을 만날 때까지 실행이 지속
 */
let one = generator.next();

console.log(one.value, "generator1");

let two = generator.next();
console.log(two.value, "generator2");

let tree = generator.next();
console.log(tree.value, "generator3");
