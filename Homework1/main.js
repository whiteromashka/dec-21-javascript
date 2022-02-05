
//1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
console.log('Task1')

let numbers = [2, 5, 56, 34, 76, 89, 11, 43, 68, 90];
let result = 0;
for (let number of numbers) {
    result += number;
}
console.log(result);

//2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
console.log('Task2')

let book = {
    title: `Song`,
    pages: 167,
    genre: 'lyric'
}
console.log(book);
document.write('<div>'+ book.title + '</div>');

//3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
console.log('Task3')

let book2 = {
    title: 'Ukraine',
    pages: 216,
    genre: 'history',
    authors: ['a', 'b', 'c']
}
console.log(book2);
console.log(book2.authors.at(2));

//4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
console.log('Task4')

let book3 = {
    title: 'UFO',
    pages: 616,
    genre: 'fiction',
    authors: ['av', 'bd', 'ce']
}
let books = [book2, book3]
console.log(books[0]);
console.log(books[1]);
//5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
//    Значення площі зберігати в змінній s.
console.log('Task5')

let height = 23;
let width = 10;
let s = height * width;
console.log(s);

//6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
//         результат помістіть у змінну v.
console.log('Task6')

let heightC = 10;
let dC = 4;
let pi = 3.14;
let r = dC/2;
let v = pi * (r ** 2) * heightC;
console.log(v);

//7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
//        Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).

console.log('Task7')

let n = 3;
let m = 4;
let k = Math.sqrt(n**2 + m**2);
console.log(k);

// 1.Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write
console.log('Task8')

let greet = 'hello';
let school = 'owu';
let house = 'com';
let state = 'ua';
let number1 = 1;
let number2 = 10;
let number3 = -999;
let number4 = 123;
let number5 = 3.14;
let number6 = 2.7;
let number7 = 16;
let truth = true;
let fault = false;

console.log(greet);
console.log(school);
console.log(house);
console.log(state);
console.log(number1);
console.log(number2);
console.log(number3);
console.log(number4);
console.log(number5);
console.log(number6);
console.log(number7);
console.log(truth);
console.log(fault);

document.write('<div>'+ greet + '</div>');
document.write('<div>'+ school + '</div>');
document.write('<div>'+ house + '</div>');
document.write('<div>'+ state + '</div>');
document.write('<div>'+ number1 + '</div>');
document.write('<div>'+ number2 + '</div>');
document.write('<div>'+ number3 + '</div>');
document.write('<div>'+ number4 + '</div>');
document.write('<div>'+ number5 + '</div>');
document.write('<div>'+ number6 + '</div>');
document.write('<div>'+ number7 + '</div>');
document.write('<div>'+ truth + '</div>');
document.write('<div>'+ fault + '</div>');

// alert(greet);
// alert(school);
// alert('com');
// alert('ua');
// alert('1');
// alert('10');
// alert('true');
// alert('false');

//Переприсвоїти кожній змінній з завдання значення на довільне.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write
console.log('Task9')

let a1 = 'hello';
a1 = 'see you'
let a2 = 'owu';
a2 = 'cool'
let a3 = 'com';
a3 = 'dot'
let a4 = 'ua';
a4 = 'usa'
let a5 = 1;
a5 = 5
let a6 = 10;
a6 = 20
let a7 = -999;
a7 = 1000
let a8 = 123;
a8 = 1239
let a9 = 3.14;
a9 = 65
let a10 = 2.7;
a10 = 45.9
let a11 = 16;
a11 = 345
let a12 = true;
a12 = false
let a13 = false;
a13 = true

console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);
console.log(a6);
console.log(a7);
console.log(a8);
console.log(a9);
console.log(a10);
console.log(a11);
console.log(a12);
console.log(a13);

document.write('<div>'+ a1 + '</div>');
document.write('<div>'+ a2 + '</div>');
document.write('<div>'+ a3 + '</div>');
document.write('<div>'+ a4 + '</div>');
document.write('<div>'+ a5 + '</div>');
document.write('<div>'+ a6 + '</div>');
document.write('<div>'+ a7 + '</div>');
document.write('<div>'+ a8 + '</div>');
document.write('<div>'+ a9 + '</div>');
document.write('<div>'+ a10 + '</div>');
document.write('<div>'+ a11 + '</div>');
document.write('<div>'+ a12 + '</div>');
document.write('<div>'+ a13 + '</div>');




//Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)

 console.log('Task10')

let firstName = 'Iryna';
let lastName = 'Romashchenko';
let middleName = 'Oleksiivna';
let person = firstName + ' ' + middleName + ' ' + lastName;

console.log(person);

//За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
console.log('Task11')

let userName = prompt("What is your name?", "flower");
let secondName = prompt("What is your second name?", "");
let yourAge = prompt("How old are you?", "");
let greeting = 'Вітаю '+ userName + ' ' + secondName  + ' тобі ' + yourAge + ' років';
console.log(greeting);

// За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;

console.log('Task12')

let a = 100;
let b = '100';
let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

//- Визначити відповідний оператор в виразах що б вийшов відповідний результат.
// В однакових виразах не використовувати однакові оператори!!!

console.log('Task13')
  // 5 < 6 -> true
  // 5 > 6 -> false
  // 5 >= 6 -> false
  // 5 === 6 -> false
  // 10 === 10 -> true
  // 10 >= 10 -> true
  // 10 > 10 -> false
  // 10 < 10 -> false
  // 10 !== 10 -> false
  // 123 === '123' -> false
  // 123 == '123' -> true



