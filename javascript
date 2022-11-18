Задание 1.
Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.
const student = { // объект student
   name: 'Maxim',
   progLang: 'JavaScript',
};
function getStudentData (student) { // функция принимает объект student
for (let key in student) {
   console.log(key); // выводит ключи объекта
   console.log(student[key]); // выводит значения объекта
    if (student.hasOwnProperty(key)) { // coбств значения функции
        console.log(key); 
   } 
}
};
getStudentData (student);

Задание 2. Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.
const str = "danger";
const obj = {color: "white", legs: 8, danger: "no"};
function objFeature (str, obj) {
  return (str in obj);
}
console.log (objFeature ("danger", obj));

 3. Написать функцию, которая создает пустой объект, но без прототипа.
let obj = Object.create(null);
function createObjProtoFree() {
  return Object.create(null);
}
console.log (Object.getPrototypeOf(obj));

4. Определить иерархию электроприборов, включить в сеть, посчитать суммарную мощность.

function ElectricDevice(name, power) {
  this.name = name;
  this.power = power;
  this.isPlugged = false; // пока еще не вкл
}

// метод, который определяет прибор как включенный в розетку
ElectricDevice.prototype.plugIn = function () {
  console.log(this.name + " включен в сеть");
  this.isPlugged = true;
};

// метод, который определяет прибор как выключеный из розетки
ElectricDevice.prototype.unPlug = function () {
  console.log(this.name + " выключен");
  this.isPlugged = false;
};

function tableElectricDevice(name, brand, power) {
    this.name = name;
    this.brand = brand;
    this.isPlugged = true;
    this.power = power;
  }
  
  tableElectricDevice.prototype = new ElectricDevice();

  const lamp = new tableElectricDevice ("Лампа", "Sony", 50);
  //lamp.unPlug();
  lamp.plugIn();
  console.log(lamp)
  
  const  computer = new tableElectricDevice ("Компьютер", "IBM", 300);
  computer.plugIn();
  console.log(computer)


 const powerSum = lamp.power + computer.power
 console.log(`Общая мощность включенных в сеть приборов - ${powerSum} Ватт в час`)

5. Переписать задание выше с помощью классов.
class ElectricDevice{
constructor (name, power) {
  this.name = name;
  this.power = power;
  this.isPlugged = false; // пока еще не вкл
}

// метод, который определяет прибор как включенный в розетку
plugIn () {
  console.log(this.name + " включен в сеть");
  this.isPlugged = true;
};

// метод, который определяет прибор как выключеный из розетки
unPlug() {
  console.log(this.name + " выключен");
  this.isPlugged = false;
};
}

class TableElectricDevice extends ElectricDevice {
       constructor (name, brand, power) {
    super (name, power);
    this.name = name;
    this.brand = brand;
    this.isPlugged = true;
    this.power = power;
  };
  }

  //TableElectricDevice.prototype = new ElectricDevice();

  const lamp = new TableElectricDevice ("Лампа", "Sony", 50);
  //lamp.unPlug();
  lamp.plugIn();
  console.log(lamp)
  
  const  computer = new TableElectricDevice ("Компьютер", "IBM", 300);
  computer.plugIn();
  console.log(computer)


 const powerSum = lamp.power + computer.power
 console.log(`Общая мощность включенных в сеть приборов - ${powerSum} Ватт в час`)
