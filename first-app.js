// const fs = require('fs');

// fs.writeFileSync('hello.text', 'Hello from Node.js');

//화살표 함수
const add = (a,b) => a + b ;

//객체
const person = {
    name: 'Choi',
    age: 31,
    greet(){    // 화살표 함수를 사용시 this가 바인딩 되지 않음, 화살표 함수 사용시 undefined
        console.log('Hi, I am ' + this.name);
    }
};

//구조분해할당
const printName = ({name}) =>{
    console.log(name);
};


const arr = ["Apple", "nana"];

const [arr1, arr2] = arr;

console.log(arr1, arr2)
// // for (let a of arr) {
// //     console.log(a);
// // }

// // console.log(arr.map(a => 'a: ' + a))

// //스프레드: 배열이나 객체에서 원소나 속성을 추출하는데 사용
// const copiedArr = [...arr];

// //레스트: 인수나 목록에서 여러 인수를 하나의 배열로 묶는데 사용
// const toArray = (...args) =>{
//     return args;
// };

// console.log(toArray(1,2,3,4,5))

