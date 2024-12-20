// Chapter 9-11
// Answer of 1
//  let city=prompt("  Enter the Name of city of lights");
//  if(city.toLowerCase()==="karachi"){
// document.write(`Welcome to the city of light ${city}`);
//  }else{
//     document.write(`Welcome to ${city}`);
//  }

// Answer of 2
// let gender=prompt("ENTER YOUR SEX");
// if( typeof gender.toLowerCase()==="string"){
//     if( gender=="male"){
// document.write("hello Sir!")
//     }else if(gender.toLowerCase()=="female"){
//         document.write("hello Madam!")
//     }else{
//         document.write("hello Adhamard adhi aurt!")
//     }

// }

// // Answer of 3
// // let signalColor=prompt("Enter the color of traffic signal");
// // if(signalColor==="red" ){
// //     document.write(`message <br> ${signalColor}   must stop`)
// // } else if(signalColor==="green"){
// //     document.write(`message <br> ${signalColor}   must go`)
// // }else if(signalColor==="yellow"){
// //     document.write(`message <br> ${signalColor}   must get ready`)
// // }else{
// //     document.write("message <br>There is no rule exist for that color")
// // // }
// // Answer 4
// // let maxAvgOfCarTank = "56 liter";
// // maxAvgOfCarTank = parseFloat(maxAvgOfCarTank.trim()); // Use parseFloat and trim whitespace
// // let currentFuelInCarTank = prompt("Enter current fuel");
// // currentFuelInCarTank = parseFloat(currentFuelInCarTank.trim()); // Use parseFloat and trim whitespace

// // let RemainingFuelInCarTank = (maxAvgOfCarTank - currentFuelInCarTank);
// // if (RemainingFuelInCarTank > 0.25) { // Compare with a number
// //     document.write("You have enough fuel to travel the remaining distance");
// // }
// //  else {
// //     document.write("You don't have enough fuel to travel the remaining distance");
// // }
// // Answer 5
// // a. var a = 4;
// // if (++a === 5){
// // alert("given condition for variable a is true");
// // }
// // displayed true
// //  var b = 82;
// // if (b++ === 83){
// // console.log("given condition for variable  is true " );
// // } 
// // // displayed false
// //  var c = 12;
// // if (c++ === 13){
// // alert("condition 1 is true");
// // }
// // // displayed false
// // if (c === 13){
// //     alert("condition 2 is true");
// //     }
// //     // displayed true
// //     if (++c < 14){
// //         alert("condition 3 is true");
// //         }
// //         // displayed false
// //         if(c === 14){
// //             alert("condition 4 is true");
// //             }

// //             // displayed true


// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//  if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

// // display true
// // var a = "car";
// // var b = "cat";
// //  if("car" < "cat"){
// //     alert("car is smaller than cat");
// //     }
//     // display true
//     // let secretNumber = 5; // You can change this to any number between 1 and 10

//     // // Prompt user to guess the secret number
//     // let userGuess = +prompt("Guess the secret number (between 1 and 10):");
//     // userGuess = parseInt(userGuess.trim());
    
//     // // Check if the user's guess is correct
//     // if (userGuess === secretNumber) {
//     //     document.write("Bingo! Correct answer");
//     // } else if (userGuess + 1 === secretNumber) {
//     //     document.write("Close enough to the correct answer.");
//     // } 
//     // // If the guess is neither correct nor close
//     // else {
//     //     document.write("Better luck next time.");
//     // }
//     // Answer 8
// //     let a=+prompt("enter number");
// //  a=a%3;
// //     if(a==0){
// // document.write("number is divisible by 3");
// //     }
// //     else
// //        {
// //             document.write("number is divisible not by 3"); 
// //     }
// // Answer 9
// // let a = +prompt("enter number");
// // if(a==0){
// //     document.write("number is even");
// // }else if(a%2==0){
// //     document.write("The number is zero, which is neither odd nor even."); 
   
// // }
// // else{
// //     document.write("number is odd");
// // }
// // Answer 10


// let t = +prompt("Enter today's temperature");

// if (!isNaN(t)) { // Check if t is a number
//     if (t > 40) {
//         document.write(`T ${t}: It's too hot outside`);
//     } else if (t > 30) {
//         document.write(`T ${t}: It's warm outside`);
//     } else if (t > 20) {
//         document.write(`T ${t}: It's pleasant outside`);
//     } else if (t > 10) {
//         document.write(`T ${t}: It's cool outside`);
//     } else {
//         document.write(`T ${t}: It's cold outside`);
//     }
// } else {
//     document.write("Please enter a valid number for the temperature.");
// }