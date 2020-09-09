// const message: string = 'hello world';
// console.log(message);

/* 기본 타입 */
// let count = 0; // 숫자
// count += 1;
// count = "갑자기 분위기 문자열"; // 이러면 에러가 납니다!

// const message: string = "hello world"; // 문자열

// const done: boolean = true; // 불리언 값

// const numbers: number[] = [1, 2, 3]; // 숫자 배열
// const messages: string[] = ["hello", "world"]; // 문자열 배열

// message.push(1); // 숫자 넣으려고 하면.. 안된다!

// let mightBeUndefined: string | undefined = undefined; // string 일수도 있고 undefined 일수도 있음
// let nullableNumber: number | null = null; // number 일수도 있고 null 일수도 있음

// let color: "red" | "orange" | "yellow" = "red"; // red, orange, yellow
// color = "yellow";
// color = "green"; // 에러 발생!

/* 함수에서 타입 정의하기 */
// // 가장 우측의 : number 는, 해당 함수의 결과물이 숫자라는것을 명시
// function sum(x: number, y: number): number {
//   return x + y;
//   // 결과물이 number 라는 것을 명시해놓고 갑자기 null 을 반환한다면 오류가 뜨게 됩니다.
//   // return null;
// }
// sum(1, 2);

// function sumArray(numbers: number[]): number {
//   return numbers.reduce((acc, current) => acc + current, 0);
// }
// // 배열의 내장함수를 사용 할 때에도 타입 유추가 매우 잘 이루어진다.
// const total = sumArray([1, 2, 3, 4, 5]);

// // 함수에서 만약 아무것도 반환하지 않아야 한다면 이를 반환 타입을 void 로 설정
// function returnNothing(): void {
//   console.log("I am just saying hello world");
// }

// /* interface 사용해보기 */
// // interface는 클래스 또는 객체를 위한 타입을 지정 할 때 사용되는 문법입니다.
// // Shape 라는 interface 를 선언합니다.
// interface Shape {
//   getArea(): number; // Shape interface 에는 getArea 라는 함수가 꼭 있어야 하며 해당 함수의 반환값은 숫자입니다.
// }

// class Circle implements Shape {
//   // `implements` 키워드를 사용하여 해당 클래스가 Shape interface 의 조건을 충족하겠다는 것을 명시합니다.

//   //   radius: number; // 멤버 변수 radius 값을 설정합니다. (constructor 의 파라미터 쪽에 public 또는 private accessor 를 사용하면 직접 하나하나 설정해주는 작업을 생략해줄 수 있습니다.)

//   constructor(public radius: number) {
//     this.radius = radius;
//   }

//   // 너비를 가져오는 함수를 구현합니다. (필수 조건)
//   getArea() {
//     return this.radius * this.radius * Math.PI;
//   }
// }

// class Rectangle implements Shape {
//   //   width: number;
//   //   height: number;
//   constructor(private width: number, private height: number) {
//     this.width = width;
//     this.height = height;
//   }
//   getArea() {
//     return this.width * this.height;
//   }
// }

// const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

// shapes.forEach((shape) => {
//   console.log(shape.getArea());
// });

/* 일반 객체를 interface 로 타입 설정하기 */
// interface Person {
//   name: string;
//   age?: number; // 물음표가 들어갔다는 것은, 설정을 해도 되고 안해도 되는 값이라는 것을 의미합니다.
// }
// interface Developer extends Person {
//   // Person 과 Developer 가 형태가 유사할 땐, 다른 interface 를 extends 키워드를 사용해서 상속받을 수 있습니다.
//   //   name: string;
//   //   age?: number;
//   skills: string[];
// }

// const person: Person = {
//   name: "김사람",
//   age: 20,
// };

// const expert: Developer = {
//   name: "김개발",
//   skills: ["javascript", "react"],
// };

/* Type Alias 사용하기 */
// // type 은 특정 타입에 별칭을 붙이는 용도로 사용합니다.
// // 이를 사용하여 객체를 위한 타입을 설정할 수도 있고, 배열, 또는 그 어떤 타입이던 별칭을 지어줄 수 있습니다.
// type Person = {
//   name: string;
//   age?: number; // 물음표가 들어갔다는 것은, 설정을 해도 되고 안해도 되는 값이라는 것을 의미합니다.
// };

// // & 는 Intersection 으로서 두개 이상의 타입들을 합쳐줍니다.
// // 참고: https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types
// type Developer = Person & {
//   skills: string[];
// };

// const person: Person = {
//   name: "김사람",
// };

// const expert: Developer = {
//   name: "김개발",
//   skills: ["javascript", "react"],
// };

// type People = Person[]; // Person[] 를 이제 앞으로 People 이라는 타입으로 사용 할 수 있습니다.
// const people: People = [person, expert];

// type Color = 'red' | 'orange' | 'yellow';
// const color: Color = 'red';
// const colors: Color[] = ['red', 'orange', 'yellow'];

// // 클래스와 관련된 타입의 경우엔 interface 를 사용하는게 좋고,
// // 일반 객체의 타입의 경우엔 그냥 type을 사용해도 무방합니다.
// // 사실 객체를 위한 타입을 정의할때 무엇이든 써도 상관 없는데 일관성 있게만 쓰시면 됩니다.

/* Generics */
// 제너릭(Generics)은 타입스크립트에서 함수, 클래스, interface, type alias 를 사용하게 될 때 여러 종류의 타입에 대하여 호환을 맞춰야 하는 상황에서 사용하는 문법입니다.
// 함수에서 Generics 사용하기(A 와 B 가 어떤 타입이 올 지 모르기 떄문에 이런 상황에서는 any 라는 타입을 쓸 수도 있습니다.)
// 그런데, 이렇게 하면 타입 유추가 모두 깨진거나 다름이 없습니다.
// 결과가 any 라는 것은 즉 merged 안에 무엇이 있는지 알 수 없다는 것 입니다.
// function merge(a: any, b: any): any {
//     return {
//         ...a;
//         ...b
//     };
// }

// const merged = merge({ foo: 1 }, { bar: 1 });

// // Generics 예시1
// function merge<A, B>(a: A, b: B): A & B {
//     return {
//       ...a,
//       ...b
//     };
// }

// const merged = merge({ foo: 1 }, { bar: 1 });

// // Generics 예시2
// function wrap<T>(param: T) {
//     return {
//       param
//     }
// }

// const wrapped = wrap(10);

// // interface 에서 Generics 사용하기
// interface Items<T> {
//     list: T[];
// }

// const items: Items<string> = {
//     list: ['a', 'b', 'c']
// };

// // type 에서 Generics 사용하기
// type Items<T> = {
//     list: T[];
// };

// const items: Items<string> = {
//     list: ['a', 'b', 'c']
// }

// 클래스에서 Generics 사용하기
class Queue<T> {
  list: T[] = [];
  get length() {
    return this.list.length;
  }
  enqueue(item: T) {
    this.list.push(item);
  }
  dequeue() {
    return this.list.shift();
  }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
