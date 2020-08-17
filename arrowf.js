// regular function
// const name = function(){
//   console.log('Hello');
// }
  // best practice
  // const name = () =>{
  //   console.log('hello');
  // }
  //more best
  // const name = () => console.log('hello');


// returning a string value
// const name = function(){
//   return 'Whatsup'
// }
  //best practice
  //const name = () => 'Whatsdown';

// returning an object literal
// const name = function(){
//   talk: 'Nosa';
// }
  //best practice
// const name = () => ({names:'Nosa'});

//Returning Single Parameter
// const name = function(firstName){
//   return ` Hello ${firstName}`;
// }
  // best practice
// const name = (firstName) => `Hello ${firstName}`;
//better practice
// const name = firstName => `Hello ${firstName}`;

//returning multiple parameter
// const name = function(fName,lName){
//   return `${fName} ${lName}`;
// }
  //Best practice
  // const name = (fname, lname) => `${lname} ${fname}`;

//returnong callbacks()
const users = ['Nathaniel','Nosa','Mc'];

// const nameLength = users.map(function(name){
//   return name.length;
// });
  //best practice
  const nameLength = users.map(name => name.length
  );
console.log(nameLength);