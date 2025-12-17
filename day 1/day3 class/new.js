// Get value from user
var fullName = prompt("Tell me your name?");

console.log(fullName);
console.log(fullName + ", Welcome to BCS!");

var noofperson = prompt("tell me count person");

if (noofperson <= 2){
    console.log(" they will by scooter 🛵");
}
else if (noofperson == 3){
    console.log("they will go by auto 🛺 ");
}
else if (noofperson == 4 || noofperson == 5){
    console.log("they will go by car 🚓");
}
else {
    console.log("they will go by bus 🚐");
}





var celsius = prompt("Enter the value of celsius");
var fahrenheit = (celsius * 9/5) + 32;

    console.log(fahrenheit + "°f");



var R = prompt("enter the value of R");
var A = 3.14 * R**2;

    console.log(A);




var celsius = prompt("Enter the value of celsius");
var fahrenheit = (celsius*9)/5 +32;


    console.log(`${fahrenheit} °f`);



    
var number  = prompt(" enter a number 1-7 and other will wrong ");

if (number = 1){
    console.log(" sunday ");
}
else if (number = 2){
    console.log(" Monday ");
}
else if (number = 3){
    console.log(" Tuesday ");
}
else if (number = 4){
    console.log(" Wednesday ");
}
else if (number = 5){
    console.log(" Thursday ");
}
else if (number = 6){
    console.log(" friday ");
}
else if (number = 7){
    console.log(" saturday");

}

else {
    console.log(" wrong");
}