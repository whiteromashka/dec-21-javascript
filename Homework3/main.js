// 1. зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
    console.log('Task1')
let arrayItems = [2,17,13,6,22,31,45,66,100,-18];
console.log(arrayItems);

    // 2. перебрати його циклом while
console.log('Task2')

// let i=0;
// while (i<arrayItems.length){
//     console.log(arrayItems[i]);
//     i++;
// }
    // 3. перебрати його циклом for
console.log('Task3')

// for (let j = 0; j < arrayItems.length; j++) {
//     console.log(arrayItems[j]);
//
// };
    // 4. перебрати циклом while та вивести  числа тільки з непарним індексом
console.log('Task4')
d = 0;
while (d < arrayItems.length){
    if (d%2 !== 0){
        console.log(arrayItems[d]);
    }
    d++
}

// 5. перебрати циклом for та вивести  числа тільки з непарним індексом
console.log('Task5')

for (let x = 0; x < arrayItems.length; x++){
    if (x%2 != 0){
        console.log(arrayItems[x]);
    }
}
// 6. перебрати циклом while та вивести  числа тільки парні  значення
console.log('Task6')
l = 0;
while (l < arrayItems.length){
    if (l%2 === 0){
        console.log(arrayItems[l]);
    }
    l++
}
// 7. перебрати циклом for та вивести  числа тільки парні  значення
console.log('Task7')
let i;
for(i = 1; i <=arrayItems.length; i++) {
    if (i%2 != 0) {
        continue;
    }
    console.log(arrayItems[i]);
}
// 8. замінити кожне число кратне 3 на слово "okten"
console.log('Task8')

for (let z = 0; z < arrayItems.length; z++){
    if (arrayItems[z]%3 === 0){
        arrayItems[z] = "okten";
        console.log(arrayItems[z]);
    }
}
console.log(arrayItems);
// 9. вивести масив в зворотньому порядку.
console.log('Task9')

let arrayItemsBack = [2,17,13,6,22,31,45,66,100,-18];
for (let i = arrayItems.length-1; i >= 0; i--){
    console.log(arrayItemsBack[i]);
}
// 10. --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
console.log('Task10')

let numbers = [23, 17, 87, 45, 98];
let words = ['happy', 'merry', 'fine', 'warm', 'sunny'];
let mixed = [true, false, 'cosy', 78, 90];

console.log(numbers);
console.log(words);
console.log(mixed);


// 11-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
console.log('Task11')
let array = [];
array[0] = 'What';
array[1] = 'is';
array[2] = 'Mike';
array[3] = 'doing?';
console.log(array);
document.write(array);


// 12 - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
console.log('Task12')

for (let i = 0; i < 10; i++){
    document.write(`<div>Hello Kyiv</div>`)
}

for (let i = 0; i < 10; i++){
    document.write(`<div>${i} - Hello Kyiv with index</div>`)
}

let a = 0;
while (a<20){
    document.write(`<div>Hello Kyiv</div>`);
    a++;
}
let b = 0;
while (b<20){
    document.write(`<div>${b} - Hello Kyiv</div>`);
    b++;
}

// 13 - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
console.log('Task13')

let numArray = [1,3,5,7,8,9,34,56,34,87];
for (i = 0; i < numArray.length; i++) {
    console.log(numArray[i])
}

let stringArray = ['all', 'people', 'like', 'true', 'feeling', '67', '98', 'times', 'false'];
for (i = 0; i < stringArray.length; i++){
    console.log(stringArray[i])
}
let wholeArray = ['all', 'people', 'like',7,8,9,34, true,[], false];
for (i = 0; i < wholeArray.length; i++){
    console.log(wholeArray[i])
}

let booleanText = ['all', 'people', 'like',7,8,9,34, true,[], false];
for (i = 0; i < booleanText.length; i++) {
    if (typeof booleanText[i] === 'boolean') {
        console.log(booleanText[i]);
    }
}

let numText = ['all', 'people', 'like',7,8,9,34, true,[], false];
for (i = 0; i < numText.length; i++) {
    if (typeof numText[i] === 'number') {
        console.log(numText[i]);
    }
}

let stringText = ['all', 'people', 'like',7,8,9,34, true,[], false];
for (i = 0; i < stringText .length; i++) {
    if (typeof stringText [i] === 'string') {
        console.log(stringText [i]);
    }
}

// 14 - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
console.log('Task14')

let myNewArray = [];
    myNewArray [0] = 'all';
    myNewArray [1] = 'people';
    myNewArray [2] = 'like';
    myNewArray [3] = true;
    myNewArray [4] = 78;
    myNewArray [5] = false;
    myNewArray [6] = 987;
    myNewArray [7] = 3009;
    myNewArray [8] = 'Happy';
    myNewArray [9] = 'Merry';

    for (let i = 0; i < myNewArray.length; i++) {
        console.log(myNewArray[i]);
    }

for (let i = 0; i < 10; i++) {
    console.log('step : ' + i + ' ');
    document.write('step : ' + i + ' ');
}
for (let = 0; i <100; i++){
    console.log('step : ' + i + ' ');
    document.write('step : ' + i + ' ');
}
for (let i = 0; i < 100; i+=2) {
    console.log('step : ' + i + ' ');
    document.write('step : ' + i + ' ');
}
for (let i = 0; i < 100; i++) {
    if(i % 2 === 0){
        console.log('step : ' + i + ' ');
        document.write('step : ' + i + ' ');
    }
}

for (let i = 0; i < 100; i++) {
    if(i % 2 === 1){
        console.log('step : ' + i + ' ');
        document.write('step : ' + i + ' ');
    }
}
