console.log('App is working')

type Admin ={
    name: string;
    privileges:string[];
}

type Employee ={
    name:string;
    startDate:Date;
}

// We can use interface insted of type in admin and employee 
// Also we can also write elevatedEmployee with interface 

type ElevatedEmployee = Admin & Employee;

// interface ElevatedEmployee extends Admin,Employee{

// }

const e1:ElevatedEmployee ={
    name:'Harsh',
    privileges:['create-server'],
    startDate: new Date()
}


type Combinable = string | number;
type Numerical = number | boolean;

type Universal = Combinable & Numerical

function add(a:Combinable,b:Combinable){
    if(typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString();
    }
    return a+b;
}

type UnknownEmployee = Employee|Admin;

function printEmployeeInformation(emp:UnknownEmployee){
    console.log('Name: ' + emp.name);

    if('privileges' in emp ){
        console.log('Privileges Are : ' + emp.privileges);
    }

    if('startDate' in emp ){
        console.log('Start Date: ' + emp.startDate);
    }
    
}

printEmployeeInformation(e1);
//Also we can pass the data which will not have any privileges 
printEmployeeInformation({name:'Rahul' , startDate:new Date()});

class Car{
    drive() {
        console.log('Driving....');
    }
}

class Truck{
    drive(){
        console.log('Driving a truck.....');
        
    }

    loadCargo(amount:number){
        console.log('Loading cargo ..... '+ amount);
        
    }
}

type Vechile = Car | Truck

const v1 = new Car();
const v2 = new Truck();

function useVechile(v:Vechile){
    v.drive();
    
    if(v instanceof Truck){
        v.loadCargo(50);
    }

    //can use both

    // if('loadCargo' in v){
    //     v.loadCargo(5);
    // }

}

useVechile(v1);
useVechile(v2);

interface bird{
    type:'bird';
    flyingspeed: number;
}

interface horse{
    type:'horse';
    runningSpeed:number;
}

type Animal = bird|horse;

function moveAnimal(animal:Animal){
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingspeed
            break;
        case "horse":
            speed = animal.runningSpeed
    }
    console.log('Moving at speed: ' + speed);
    
}

moveAnimal({
    type: "bird",
    flyingspeed: 50
})

// const paragraph = document.querySelector('p');
// const paragraph = document.getElementById('message-output');

// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
// const userInputElement = document.getElementById('user-input')! as HTMLInputElement;
const userInputElement = document.getElementById('user-input');

if(userInputElement){
    (userInputElement as HTMLInputElement).value = 'Hi there';
}


interface ErrorContainer{
    //this method is ccalled Indexing 
    [prop:string]:string
    
}

const errorBag:ErrorContainer =  {
    emial:'Not a Valid Email!',
    username:'Must start with  a capital letter'
}


const fetchedUserData ={
    name:'MAX',
    id:'u1',
    job: {title:'CEO', description:'My Own Company'}
}

console.log(fetchedUserData?.job?.title);

// ? is for check purpose 

const UserInput = undefined;
const storedData = UserInput ?? 'DEFAULT';

// ?? is used if the output is not defined or null

console.log(storedData);




