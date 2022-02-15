//без return ! створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
console.log('Task 1')

let a = 10;
let b = 15;
let c = 30;
function lessNum (a, b, c){

  if (a < b && a < c)  {
      document.write(a);
      console.log(a);
  } else if (b < c && b < a){
      document.write(b);
      console.log(b);
  } else {
      document.write(c);
      console.log(c);
  }
}
lessNum(a, b, c);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
console.log('Task 2')

let o = 10;
let l = 15;
let z = 30;
function moreNum (o, l, z){

    if (o > l && o > z)  {
        document.write(o);
        console.log(o);
    } else if (l > z && l > o){
        document.write(k);
        console.log(k);
    } else {
        document.write(z);
        console.log(z);
    }
}
moreNum(o, l, z);

// - створити функцію яка повертає найбільше число з масиву
console.log('Task 3')

let maxArray = [258,45,9008,2,3904]
function arrayMax(array) {
     let max = array[0];
    for (const element of array) {
      if (element > max) {
          max = element;
      }
    }
    return max;
}
document.write(`<h2>The biggest of massive: ${arrayMax(maxArray)}</h2>`);

// - створити функцію яка повертає найменьше число з масиву
console.log('Task 4')

// let minArray = [258,45,9008,2,3904]
// function arrayMin(array) {
//     let min = array[0];
//     for (const element of array) {
//         if (element < min) {
//             min = element;
//         }
//     }
//     return min;
// }
// document.write(`<h1>The less of massive: ${arrayMin(minArray)}</h1>`);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
console.log('Task 5')

function summary(arrayNums){
    let result = 0;
    for (const num of arrayNums){
result = result + num;}
    return result;
}
let summary1 = summary([100, 200, 300, 1000]);
console.log(summary1);
document.write(summary1);

 // - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
console.log('Task 6')

// let middleArray = [10,21,20];
// function middle (array){
//     let sum = 0;
//     for (const arrayElement of array) {
//
//         sum = arrayElement + sum;
//     }
//     return sum/array.length;
// }
// console.log(middle(middleArray));
// document.write(middle(middleArray));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
console.log('Task 7')

function minMax(arg) {
        let min = arguments[0];
        let max = arguments[0];
        for (const element of arguments) {
            if (element > max) {
                max = element;
            }
            if (element < min) {
                min = element;
            }
        }
        console.log("max ", max);
        return min;
    }
    document.write('Мінімальне число з введених: ' + minMax(542, 2, 59, 1200, 207))

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
console.log('Task 8')
function random(length){
let arr2 = [];
for ( i = 0; i < 20; i++ ) {
    arr2.push( Math.round( Math.random() * 100 ));

}
return arr2};
document.write( random (20) );


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
console.log('Task 9')
function randomNoLimit(length, limit){
    let arr3 = [];
    for (let i = 0; i < length; i++) {
     arr3.push(Math.round(Math.random() * limit));
    }
    return arr3;
}
document.write(randomNoLimit(5,200));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
console.log('Task 10')

const array1 = [1, 2, 3];
console.log('array1:', array1);

const reversed = array1.reverse();
console.log('reversed:', reversed);


// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
console.log('Task 11')

function area (a,b){
    console.log(a*b);
    return (a*b);
}
area (5,10);

// - створити функцію яка обчислює та повертає площу кола з радіусом r
console.log('Task 12')

function circle (r){
    let s = Math.round(Math.PI*(r**2));
    console.log(s);
    return s;
}
circle(6);


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
console.log('Task 13')
function calcCylinder(h, r){
    let s = 2*Math.PI*r*(h+r);
    console.log(s);
    return s;
}
calcCylinder(5,9);

// - створити функцію яка приймає масив та виводить кожен його елемент
console.log('Task 14')
let array = [23, 56, 34, true, 'fock'];
function showEl(arr){
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}
showEl(array);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
console.log('Task 15')
function createText(text) {
    document.write(`<p>${text}</p>`);
}
let someTxt = 'Цей код працює. Але як саме?!';
createText(someTxt);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
console.log('Task 16')
function listCreator(text){
    document.write(`<ul>`);
    for (let i = 0; i < 3; i++){
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
listCreator('Wonderful!');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
console.log('Task 17')

function newListCreator(text, rowNum){
    document.write(`<ul>`);
    for (let i = 0; i < rowNum; i++){
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
newListCreator('Song', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
console.log('Task 18')
let oneArrow = ['grow', 12, true, 45, 'apples'];
function mixedList (arr){
    document.write(`<ul>`);
    for( let mixed of arr){
        document.write(`<li> ${mixed} </li>`)
    }

    document.write(`<ul>`)
}
mixedList(oneArrow);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
console.log('Task 19')
function userList (users){
    for (let user of users) {
        document.write(`<div> id: ${user.id} name: ${user.name} age: ${user.age} </div>`)
    }
}

let users = [
    {id: 0, name: 'vasya', age: 31},
    {id: 1, name: 'petya', age: 30},
    {id: 2, name: 'kolya', age: 29},
    {id: 3, name: 'olya', age: 28}
]
userList(users)