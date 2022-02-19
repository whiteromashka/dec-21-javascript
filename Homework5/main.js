// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
console.log('Task 1')

// let minNum = (num1, num2, num3) => {
//     if (num1 <num2 && num1 < num3){
//        return num1
//     } else if (num2< num1 && num2 < num3){
//         return num2
//     } else if (num3< num1 && num3<num1) {
//         return num3
//      }
//  }
// console.log(minNum(10,45,15))

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
console.log('Task 2')

// let maxNum = (num1, num2, num3) => {
//     if (num1 > num2 && num1 > num3){
//         return num1
//     } else if (num2 > num1 && num2 > num3){
//         return num2
//     } else if (num3 > num1 && num3 > num2){
//         return num3
//     }
// }
// console.log(maxNum(56, 67,98))

// - створити функцію яка повертає найбільше число з масиву
console.log('Task 3')

// let maxNumInArr = (arr) =>{
//     let maxElemNum = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]>maxElemNum){
//             maxElemNum=arr[i]
//         }
//     }
//     return maxElemNum;
// }
// let mixArr = [5, 33,293,506,70]
// console.log(maxNumInArr(mixArr));

// - створити функцію яка повертає найменьше число з масиву
console.log('Task 4')
// let minNumInArr = (arr) =>{
//     let minElemNum = arr[0];
//     for (let i = 0; i > arr.length; i++) {
//         if (arr[i]<minElemNum){
//             minElemNum = arr[i]
//         }
//     } return minElemNum
// }
// let mixArr = [5, 33,293,506,70]
// console.log(minNumInArr(mixArr));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// console.log('Task 5')
// let sumOfNum = (sum) =>{
//     let result = 0;
//     for (let i= 0; i < sum.length; i++) {
//      result = result + arr [i]
//     }
//     return result
// }
// let arr = [34,67,98,409,40]
// console.log(sumOfNum(arr));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
console.log('Task 6')

// let serednie = (arr) =>{
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++){
//      let element = arr[i]   ;
//      sum = sum + element;
//     }
//     return sum/arr.length
// }
// let arr = [34,67,98,409,40]
// console.log(serednie(arr));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
console.log('Task 7')

// let reMinLogMax = (...arguments) =>{
//     let min = arguments[0];
//     let max = arguments[0];
//     for (let i = 0; i < arguments.length; i++) {
//        if (arguments[i]>max){
//             max = arguments[i]
//         } else if (arguments[i]<min){
//             min = arguments[i]
//          }
//      }
//      console.log(max)
//     return min
//  }
//  console.log(reMinLogMax(55,1011,29,7,9));
//  document.write('Мінімальне число з введених: ' + reMinLogMax(55,1011,29,7,9));

// // - створити функцію яка заповнює масив рандомними числами
// // (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// console.log('Task 8')
// const randomMas = (length)=> {
//         let array = [];
//         for (let i = 0; i < length; i++){
//              array.push(Math.floor(Math.random()*100));
//         }
//      return array
//      };
//
//      document.write(randomMas(5))


// // - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
console.log('Task 9')

// let ranLimit = (size, limit) => {
//     let randArray = [];
//     for (let i = 0; i < size; i++) {
//         randArray[i] = Math.round(Math.random() * limit);
//     }
//     return randArray;
// }
//
// console.log(ranLimit(10, 10));
// document.write(ranLimit(10,10));

// // - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3]-> [3, 2, 1].
console.log('Task 10')

// let array = [3,6,78,23,50];
// const makeReverse = (arr) => {
//     let revArray = [];
//     for (let i = arr.length - 1, ri = 0; i >= 0; i--, ri ++){
//         revArray[ri] = arr[i];
//     }
//     return revArray;
// }
// console.log(makeReverse(array));


//     // Всі функції повинні бути описані стрілочним типом!!!!
// // - створити функцію яка обчислює та повертає площу прямокутника
console.log('Task 11')

// const area = (a, b) => {
//    return a * b;
// }
//  console.log(area(5, 17));
// document.write('Площа прямокутника: ' + area(5, 17));

// // - створити функцію яка обчислює та повертає площу кола
console.log('Task 12')

// const circle = (r) => {
// let radius = r**2;
// return 3.14 * radius;
// }
// console.log(circle(4));
// document.write('Площа круга: ' + circle(4));

// // - створити функцію яка обчислює та повертає площу циліндру
console.log('Task 13')
// const cylinder = (r,h) =>{
//     return 2*3.14*r*h;
// }
// console.log(cylinder(5, 12));
// document.write('Площа циліндра: ' + cylinder(5, 12));
// // - створити функцію яка приймає масив та виводить кожен його елемент
console.log('Task 14')

// let array = ['morning', 'afternoon', 'evening'];
// let everyElem = (arr) => {
//     for (let arrElement of arr) {
//         console.log(arrElement);
//     }
// }
// everyElem(array);
// document.write(array);

// // - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
console.log('Task 15')
// let paragr = text => {
//     document.write(`<p>${text}</p>`);
// };
//
// let someTxt = 'объем цилиндра формула';
// paragr(someTxt);

// // - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
console.log('Task 16')
// const list = (arg) => {
//     document.write(`<ul>`);
//     document.write(`<li>${arg}</li>`);
//      document.write(`<li>${arg}</li>`);
//      document.write(`<li>${arg}</li>`);
//      document.write(`</ul>`);
//  }
//  list('Flower');

// // - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
console.log('Task 17')
// let list = (text, size) => {
//     document.write(`<ul>`)
//         for (let i = 0; i < size; i++){
//             document.write(`<li> ${text}</li>`)
//         }
//    document.write(`</ul>`)
// }
// list ('Master', 10)
// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
console.log('Task 18')
// let mixedArray = [false, 2022, 18, true, 'song'];
// let allItems = (array) => {
//     document.write(`<ol>`)
//     for (let i = 0; i < array.length; i++){
//         document.write(`<li>${array[i]}</li>`);
//     }
//     document.write(`</ol>`)
// }
// allItems(mixedArray);
// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
console.log('Task 19');

let objects = (arr) =>{
    for (let arrElement of arr) {
            document.write(`<div> id:${arrElement.id} | name: ${arrElement.name} | ${arrElement.age} </div>`)
     }
}
 let users = [
     {id: 0,name: 'vasya', age: 31, status: false},
     {id: 1,name: 'petya', age: 30, status: true},
     {id: 2,name: 'kolya', age: 29, status: true},
 ];
 objects(users);