// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд

// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
console.log('Task1')

let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'

console.log(n1.replaceAll('..', ' '));
console.log(n2.replaceAll('---', ' '));
console.log(n3.replaceAll('__', ' '));


//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
console.log('Task2')

let random100 = (length, num) => {
        let newArray = [];
         for (let i = 0; i < length; i++) {
             newArray.push(Math.floor(Math.random() * num));
        }
         return newArray;
     };
     let result = random100(10, 100);
     console.log(result);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
console.log('Task3')
result.sort((a, b) => a-b);
console.log(result)
result.sort((a, b) => b-a);
console.log(result)


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
console.log('Task4')

// let filterArr = (length, num) => {
//     let newArray = [];
//     for (let i = 0; i < length; i++){
//         newArray.push(Math.floor(Math.random() * num));
//     }
//     return newArray.filter(value => value % 2 === 0);
// };
// console.log(filterArr(48, 100));

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
console.log('Task5')

let stringArr = (length, num) => {
    let newArray = [];
    for (let i = 0; i < length; i++) {
        newArray.push(Math.floor(Math.random() * num));
    }
    return newArray.map(value => value.toString());
};
console.log(stringArr(48, 100));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меншого, або навпаки в залежності від значення аргументу direction.

console.log('Task6')

// Array.prototype.sortNumbers = function() {
//     return this.sort(function(a,b) {
//         return a - b;
//     });
// };
//
// function randomArray(arr) {
//     let temp = [];
//     for(let i = 0; i < 25; i++) {
//         temp.push(Math.floor(Math.random() * 100));
//     }
//     return temp;
// }
// let ran = randomArray();
//
// console.log( ran.sortNumbers());

// - є масив
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log('Task7')

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let newSort = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(newSort);

let filterMonthDuration = coursesAndDurationArray.filter((element)=>{
    return element.monthDuration > 5
})

let newFilter = coursesAndDurationArray.filter((value) => {
        return value.monthDuration > 5;
    });
    console.log(newFilter);


// - Знайти та вивести довжину настyпних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log('Task8')
let length1 = 'hello world';
console.log(length1.length);

let length2 = 'lorem ipsum';
console.log(length2.length);

let length3 = 'javascript is cool';
console.log(length3.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log('Task9')

let s = 'hello world';
console.log(s.toUpperCase());

let g = 'lorem ipsum';
console.log(g.toUpperCase());

let k = 'javascript is cool';
console.log(k.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log('Task10')

let text1 = 'HELLO WORLD';
console.log(text1.toLowerCase());

let text2 = 'LOREM IPSUM';
console.log(text2.toLowerCase());

let text3 = 'JAVASCRIPT IS COOL';
console.log(text3.toLowerCase());


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
console.log('Task11')

let string = ' dirty string   ';
console.log(string.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
console.log('Task12')

let str1 = 'Каждый охотник желает знать';

const split_string = str1.split(' ');
console.log(split_string);
document.write(split_string);

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
console.log('Task13')

// let delete_characters = (str, index) => {
//     return str.substr (0, index);
// };
// let str = 'Каждый охотник желает знать';
// document.writeIn(delete_characters(str, 7));


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.

console.log('Task14')

// let insert_dash = (string) => {
//     let splitJoinUpper = string.split(' ').join('-').toUpperCase();
//     return splitJoinUpper;
// }
//
//     let str = "HTML JavaScript PHP";
// console .log(insert_dash(str));
// document.writeln(insert_dash(str));


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
console.log('Task15')

// let firstToUp = (str) => {
//     if (!str) return str;
//     return str[0].toUpperCase() + str.slice(1)
// };
// document.write(firstToUp('happy New Year'));
// console.log(firstToUp('happy New Year'));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
console.log('Task16')

let capitalize = (str) => {
  return str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
  };
document.write(capitalize('merry christmas'));
console.log(capitalize('merry christmas'));