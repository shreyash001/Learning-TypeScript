"use strict";
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
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
// console.log(merge({name:'Max'},{age:25}));
const mergeObj = merge({ name: 'Max' }, { age: 25 });
console.log(mergeObj.age);
console.log(mergeObj.name);
