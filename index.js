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

function appendDriver(name){
const label1 =  drivers.split(-1, 0, name);
}

function prependDriver(name){
const label2 = drivers.split(0, 0, name);
}

function removeLastDriver(){
const etsArr =  drivers.slice(0, drivers.length - 1);;
}

function removeFirstDriver(){
const etsArr2 = drivers.slice(1);
}
