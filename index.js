// Write your solution here!


const drivers = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendDriver(name){
  drivers.push(name);
}

function destructivelyPrependDriver(name){
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(){
  drivers.pop();
}

function destructivelyRemoveFirstDriver(){
  drivers.shift();
}

//function appendDriver(name){
//  drivers.split(-1, 0, name);
//}

//function prependDriver(name){
  //drivers.split(0, 0, name);
//}

function removeLastDriver(){
etsArr =  drivers.slice(0, drivers.length - 1);;
}

function removeFirstDriver(){
  drivers.slice(1);
}
