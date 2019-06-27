// import person from "./hello"
// console.log(person)

let {person,data,sayHello} =require('./hello')

var personData =require('./person')



if(sayHello){
  console.log(person)
  console.log(data)

  console.log(personData)
}