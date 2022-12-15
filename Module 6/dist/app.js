"use strict";
var _a;
console.log('App is working');
// interface ElevatedEmployee extends Admin,Employee{
// }
const e1 = {
    name: 'Harsh',
    privileges: ['create-server'],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) {
        console.log('Privileges Are : ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('Start Date: ' + emp.startDate);
    }
}
printEmployeeInformation(e1);
//Also we can pass the data which will not have any privileges 
printEmployeeInformation({ name: 'Rahul', startDate: new Date() });
class Car {
    drive() {
        console.log('Driving....');
    }
}
class Truck {
    drive() {
        console.log('Driving a truck.....');
    }
    loadCargo(amount) {
        console.log('Loading cargo ..... ' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVechile(v) {
    v.drive();
    if (v instanceof Truck) {
        v.loadCargo(50);
    }
    //can use both
    // if('loadCargo' in v){
    //     v.loadCargo(5);
    // }
}
useVechile(v1);
useVechile(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingspeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
    }
    console.log('Moving at speed: ' + speed);
}
moveAnimal({
    type: "bird",
    flyingspeed: 50
});
// const paragraph = document.querySelector('p');
// const paragraph = document.getElementById('message-output');
// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
// const userInputElement = document.getElementById('user-input')! as HTMLInputElement;
const userInputElement = document.getElementById('user-input');
if (userInputElement) {
    userInputElement.value = 'Hi there';
}
const errorBag = {
    emial: 'Not a Valid Email!',
    username: 'Must start with  a capital letter'
};
const fetchedUserData = {
    name: 'MAX',
    id: 'u1',
    job: { title: 'CEO', description: 'My Own Company' }
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
// ? is for check purpose 
const UserInput = undefined;
const storedData = UserInput !== null && UserInput !== void 0 ? UserInput : 'DEFAULT';
// ?? is used if the output is not defined or null
console.log(storedData);
