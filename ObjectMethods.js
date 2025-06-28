let person={
  firstname : "Aashi",
  lastname : "Jain",
  age : 19,
  greeting : function()
  {
    console.log("Hello!");
  }
};
console.log(person);
//Syntax -1
person.sayHello=function()
{
  console.log("Say HELLO");
}
person.sayHello();
//syntax -2
function greet()
{
  console.log("greet method is called");
}
person.hello = greet;
person.hello();
//syntax : 3
 person.greeting();
