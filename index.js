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
  const newDrivers =[...drivers, name];
}
function prependDriver(name){
  const newDrivers =[...drivers, name];
}
function removeLastDriver(){
  const newDrivers =[...drivers, name];
}
function removeFirstDriver(){
  drivers.slice(1);
}
