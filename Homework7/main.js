// Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
console.log('Task1')
function Cars (model, plant, year, maxspeed, power){

   this.model = model;
   this.plant = plant;
   this.year = year;
   this.maxspeed = maxspeed;
   this.power = power;
   this.drive = function (){
       console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
   };
   this.info = function (){
       for (const key in this){
           if (typeof this[key] !== 'function') console.log(`${key} - ${this[key]}`)
   }
   };
this.newMaxSpeed = function (newSpeed){
       this.maxspeed = this.maxspeed + newSpeed;
   };
this.changeYear = function (newPower){
    this.year = newPower;
};
this.addDriver = function (driver){
    this.driver = driver;
};
}

let addCar =new Cars ('Swift', 'Suzuki', 2021, 200, 1.6);
console.log(addCar);
addCar.drive();
addCar.info();
addCar.newMaxSpeed(250);
addCar.drive();
addCar.changeYear(2022);
addCar.info();
addCar.addDriver('Iryna');
addCar.drive();
console.log(addCar)
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
console.log('Task2')
// class Cars2 {
//         constructor(model, producer, year, maxspeed, engineVal) {
//             this.model = model;
//             this.producer = producer;
//             this.year = year;
//             this.maxspeed = maxspeed;
//             this.engineVal = engineVal;
//         }
//         drive() {
//             console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
//         }
//         info() {
//             for (const key in this) {
//                 console.log(`${key} - ${this[key]}`)
//             }
//         }
//         newMaxSpeed (newSpeed) {
//             this.maxspeed = this.maxspeed + newSpeed;
//         }
//         changeYear (newValue) {
//             this.year = newValue;
//         }
//         addDriver (driver) {
//             this.driver = driver;
//         }
//     }
//
//     let addCar2 = new Cars2('Peugeot', 'France', 2000, 270, 2.0);
//     console.log(addCar2);
//     addCar2.drive();
//     addCar2.info();
//     addCar2.newMaxSpeed(20);
//     addCar2.drive();
//     addCar2.changeYear(2010)
//     addCar2.info();
//     addCar2.addDriver('Vasil')
//     console.log(addCar2)
//

class Cars2 {
    constructor(model, plant, year, maxspeed, power) {
        this.model = model;
        this.plant = plant;
        this.year = year;
        this.maxspeed = maxspeed;
        this.power = power;
    }
    drive() {
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
    }

    info() {
        for (const key in this) {
            console.log(`${key} - ${this[key]}`)
        }
    }

    newMaxSpeed(newSpeed) {
        this.maxspeed = this.maxspeed + newSpeed;
    }
    changeYear(newPower) {
        this.year = newPower;
    }
    addDriver(driver) {
        this.driver = driver;
    }
}

let addCar2 = new Cars2 ('Sportage', 'KIA', 2009, 198, 1.8);
console.log(addCar2);
addCar2.drive();
addCar2.info();
addCar2.newMaxSpeed(50);
addCar2.drive();
addCar2.changeYear(2022);
addCar2.info();
addCar2.addDriver('Iryna');
console.log(addCar2)


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

console.log('Task3')
class Cinderella {
    constructor(name, age, footsize) {
        this.name = name;
        this.age = age;
        this.footsize = footsize;
    }
}

const cinderellaArray = [
    new Cinderella ('dasha', 23, 37),
    new Cinderella ('ira', 43, 39),
    new Cinderella ('sasha', 33, 37),
    new Cinderella ('katia', 53, 39),
    new Cinderella ('masha', 40, 37),
    new Cinderella ('zhanna', 28, 38),
    new Cinderella ('lora', 55, 40),
    new Cinderella ('oksana', 29, 38),
    new Cinderella ('hanna', 23, 37),
    new Cinderella ('erika', 25, 36),
];
console.log(cinderellaArray);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

console.log('Task4')
class Prince{
    constructor(name, age, shoeFound) {
        this.name = name;
        this.age = age;
        this.shoeFound = shoeFound;
    }
}
const prince = new Prince ('Oleksandr', 50, 39);
console.log(prince);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
const newPair = (cinderellaArray, prince) => {
        for (const item of cinderellaArray) {
            if (item.footsize === prince.shoeFound) {
                return `your cinderella: ${item.name}`
            }
        }
    };
    console.log(newPair(cinderellaArray, prince));

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
const newPrincess = cinderellaArray.find((item) => item.footsize === prince.shoeFound);
console.log(newPrincess);

// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
console.log('Task6')
function User (id, name, surname, email, phone){
    this.id = id,
        this.name = name,
        this.surname = surname,
        this.email = email,
        this.phone = phone
}

let user = new User (1, 'kolya', 'sokolov','s@soft.com', 0991565655)
console.log (user);
const userArray = [
        new User(14, 'Stepan', 'Giga', 'san@ukr.com', 30680000001),
        new User(2, 'Olko', 'Atb', 'av@gmail.com', 30680000002),
        new User(36, 'Nina', 'Ola', 'ddf@gmail.com', 30680000003),
        new User(43, 'Stepan', 'Btn', 'gtr@gmail.com', 30680000004),
        new User(5, 'Stecia', 'Luziv', 'sde@gmail.com', 30680000005),
        new User(61, 'Stepan', 'Misko', 'ashh@gmail.com', 30680000006),
        new User(78, 'Yozef', 'Liga', 'uj7@gmail.com', 30680000007)
    ];
    console.log(userArray);
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log('Task7')
let filterUser = userArray.filter((item) => {
        if (item.id % 2 === 0){
        return item
        }});
    console.log(filterUser);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log('Task8')

let sortUser = userArray.sort((a, b) => a.id - b.id);
console.log(sortUser)


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
console.log('Task9')

class Client {
        constructor(id, name, surname, email, phone, order) {
            this.id = id;
            this.name = name;
            this.surname = surname;
            this.email = email;
            this.phone = phone;
            this.order = order;
        }
    }

// створити пустий масив, наповнити його 10 об'єктами Client
console.log('Task10')
let emptyArray = [
        new Client(1, 'Liga', 'Giga', 'sg@gmail.com', 30680000001, ['book', 'game', 'ps4']),
        new Client(2, 'Smeha', 'Rony', 'oli@gmail.com', 30680000002, ['magasine', 'shop', 'ps3']),
        new Client(3, 'Zipko', 'Tevez', 'zeru@gmail.com', 30680000003, ['football', 'ps5']),
        new Client(4, 'Study', 'Olivie', 'kosmos@gmail.com', 30680000004, ['hobbis']),
        new Client(5, 'Ben', 'Bokov', 'boko@gmail.com', 30680000789, ['Cards','sad', 'pole', 'kop']),
        new Client(6, 'San', 'Okolar', 'kolo@gmail.com', 30680908004, ['Party', 'sad', 'pole', 'kop','sad', 'pole', 'kop']),
        new Client(7, 'OLia', 'Dollat', 'dol@gmail.com', 30680111104, ['cars', 'sad', 'pole', 'kop', 'sad', 'pole', 'kop', 'sad', 'pole', 'kop']),
        new Client(8, 'Stas', 'Mokder', 'mok@gmail.com', 30680002204, ['books', 'sad', 'pole', 'sad', 'pole', 'kop']),
        new Client(9, 'Sonia', 'Molki', 'mol@gmail.com', 30680000567, ['hats', 'sad', 'pole', 'kop', 'sad', 'pole']),
        new Client(10, 'Kostya', 'Danty', 'dan@gmail.com', 3068000123, ['codes']),
    ];
    console.log(emptyArray);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log('Task11')
let sortCLients = emptyArray.sort((a, b) => a.order.length - b.order.length);
console.log(sortCLients)