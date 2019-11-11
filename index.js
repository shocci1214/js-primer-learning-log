// console.log('hello world');



// Arrow Functionを使った関数定義
// const 関数名 = () => {
//   // 関数を呼び出した時の処理
//   // ...
//   return 関数の返す値;
// };

// const array = [1, 2, 3];
// // 1,2,3と順番に値が渡されコールバック関数（匿名関数）が処理する
// const doubleArray = array.map(function (value){
//   return value * 2; // 返した値をまとめた配列ができる
// });
// console.log(doubleArray); // => [2, 4, 6]

const array = [1, 2, 3];
// 仮引数が1つなので`()`を省略できる
// 関数の処理が1つの式なので`return`文を省略できる
const doubleArray = array.map(value => value * 2);
console.log(doubleArray); // => [2, 4, 6]