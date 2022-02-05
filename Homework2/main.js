// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

console.log('Task1')

let time = 36;
if (time >= 0 && time < 15){
    console.log(1);
}
if (time >= 15 && time < 30){
    console.log(2);
}
if (time >= 30 && time < 45){
    console.log(3);
}
if (time >= 45 && time < 60){
    console.log(4);
}


//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

console.log('Task2')

let day1 = 1;
if (day1 >= 0 && day1 < 15){
    console.log(1);
}
if (!(day1 >= 15 && day1 < 30)) {
} else {
    console.log(2);
}

// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

console.log('Task3')

let test = 0;
if (test === true){
    console.log('Вірно')
}
else {
    console.log('Невірно')


//- Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
console.log('Task4')

let aa = 1;
if (aa !== 0){
    console.log('Вірно')
}
else {
    console.log('Невірно')
}}

//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
console.log('Task5')

// let dayOfWeeks = +prompt('Введіть день тижня від 1 до 7')
// switch (dayOfWeeks) {
//     case 1:
//         console.log('Понеділок: піти в зал');
//         break;
//     case 2:
//         console.log('Вівторок: зробити класну роботу');
//         break;
//     case 3:
//         console.log('Середа: зустрітися з друзями');
//         break;
//     case 4:
//         console.log('Четвер: полити квіти');
//         break;
//     case 5:
//         console.log('П"ятниця: зателефонувати Ларисі');
//         break;
//     case 6:
//         console.log('Субота: піти в боулінг');
//         break;
//     case 7:
//         console.log('Неділя: приготувати смачну вечерю');
//         break;
//     default:
//         console.log('Ти щось не то ввів"');
// }




//- Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
console.log('Task6')

let year = 2020;
let LeapYear = year % 4;

if (LeapYear==0) {
    alert("This is Leap Year");
} else {
    alert("This is not leap year");
}

//- Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
console.log('Task7')

// let officialName = prompt('What is the official name? Put it here')
// if (officialName === 'ECMAScript') {
//     console.log('Right')
//     alert('Right')
// } else {
//     console.log('Do not know? ECMAScript')
//     alert('Do not know? ECMAScript')
// }


// Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
console.log('Task8')


 let first = parseInt(prompt('Enter the first number'), 10);
let second = parseInt(prompt('Enter the second number'), 10);
if (first > second){
    console.log(first)
} else if (first === second){
    console.log('The numbers are equal')
} else {
    console.log(second);
}

//- У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
// Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
console.log('Task9')
let flat = 34;
if (flat > 0 && flat <=21){
    console.log(1)
}
if (flat > 21 && flat <=48){
    console.log(2)
}
if (flat > 48 && flat <=90){
    console.log(3)
}
//Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
console.log('Task10')
let number = 10;
if (number === 10){
    console.log('Вірно')
}
else {
    console.log('Невірно')
}
//Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
// якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else
console.log('Task11')

// let x = prompt('Enter your value: ','');
// if (typeof x === "boolean") {
//     console.log(1)
// }
//  else if (typeof x === "string") {
//     console.log(2)
// }
//  else if (typeof x === "number") {
//     console.log(3)
// }
//  else if (typeof x === "object") {
//     console.log(4)
// } else console.log('Невірно')


// Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
// Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
// Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
    console.log('Task12')

// let weatherTemp = +prompt('What is the weather today? Put temperature')
// if (weatherTemp >= 10 && weatherTemp <= 22) {
//     console.log('I go to school')
//     alert('I go to school')
// } else {
//     console.log('I stay at home')
//     alert('I stay at home')
// }


// За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
// числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
    console.log('Task13')

// let quizGame = +prompt('Введіть число від 1 до 5')
// switch (quizGame) {
//     case 1:
//         alert ('Congratulations! Car is yours.');
//         break;
//     case 2:
//         alert ('Congratulations! Bike is yours.');
//         break;
//     case 3:
//         alert ('Congratulations! Book is yours.');
//         break;
//     case 4:
//         alert ('Congratulations! Wine is yours.');
//         break;
//     case 5:
//         alert ('Congratulations! Postcard is yours.');
//         break;
//     default:
//         alert('Number is wrong');
// }
