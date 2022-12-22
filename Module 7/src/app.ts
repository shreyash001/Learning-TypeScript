console.log('App is working');

// // const names = ['Rakesh','Rahul'];

// //below is of generic type 
// const names: Array<string> = []; //same as string[]


// const promise:Promise<string> =  new Promise((resolve,reject) =>{
//     setTimeout(() => {
//         resolve('This is done!')
//         console.log(resolve);
//     }, 2000);
// })

function merge<T extends object, U extends object>(objA: T, objB:U){
    return Object.assign(objA, objB);
}

// console.log(merge({name:'Max'},{age:25}));
// const mergeObj = merge({name:'Max'},{age:25});
// const mergeObj = merge({name:'Max', hobbie:['Sports']},30);
const mergeObj = merge({name:'Max', hobbie:['Sports']},{age:25});


// console.log(mergeObj.age);
console.log(mergeObj);

interface lengthCalculate{
    length:number;
}

function countAndPrint<T extends lengthCalculate>(element:T): [T ,string]{
    let description = 'Got no Value';
    if(element.length === 1 ){
        description = 'Got 1 Value'
    }
    else if(element.length > 1){
        description = 'Got '+ element.length + ' values'
    }
    return [element,description];
}

// console.log(countAndPrint('Hi there !'));
console.log(['Sports','bike']);

