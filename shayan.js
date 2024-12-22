// Chapter 6-9
// Answer 1
// let a=prompt("Enter a number");
// document.write(`The value of a is: ${a}`)
// ++a
// document.write(`<br> The value of ++a is ${a}`);
// document.write(`<br> Now the value of a is ${a}`);
// document.write(`<br> The value of a++ is ${a++}`);
// document.write(`<br> Now the value of a is ${a}`);
// document.write(`<br> The value of --a is ${--a}`);
// document.write(`<br> Now the value of a is ${a}`);
// document.write(`<br> The value of a-- is ${a--}`);
// document.write(`<br> Now the value of a is ${a}`);

// // Answer 2
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
              
// document.write(`The result   ${--a} is <br> `)
// document.write(`The result   ${--a - --b} is <br> `)
// document.write(`The result   ${--a - --b + ++b} is <br> `)
// document.write(`The result   ${--a - --b + ++b + b--} is <br> `)
// document.write(`The value  of a is ${a} is <br> `)
// document.write(`The value  of b is ${b} is <br> `)
// document.write(`The result of  ${--a - --b + ++b + b--} is <br> `)

// // Answer 3


// // var a = prompt("Enter a number");
// // let number = parseInt(a.trim());
// // let b;

// // if (!isNaN(number)) { // Check if 'number' is a valid number
// //     for (let i = 1; i < 11; i++) {
// //         document.write(`${number} x ${i} = ${number * i} <br> `);
// //     }
// // } else {
// //     for (let i = 1; i < 11; i++) {
// //         document.write(`5 x ${i} = ${5 * i} <br> `);
// //     }
// // }

// // Answer 4
// let a = prompt("Enter a name of 1st subject");
// let b = prompt("Enter a name of 2nd subject");
// let c = prompt("Enter a name of 3rd subject");
// let TotalMarksOfEachSubject = 100;
// let TotalMarks = TotalMarksOfEachSubject * 3;

// let marksOf1stSubject = +prompt("Enter Marks obtained in 1st subject");
// document.write("<br> Subject 1 : " + a + "    " + marksOf1stSubject + "  " + TotalMarksOfEachSubject);

// let marksOf2ndSubject = +prompt("Enter Marks obtained in 2nd subject");
// document.write("<br> Subject 2 : " + b + "    " + marksOf2ndSubject + "  " + TotalMarksOfEachSubject);

// let marksOf3rdSubject = +prompt("Enter Marks obtained in 3rd subject");
// document.write("<br> Subject 3 : " + c + "    " + marksOf3rdSubject + "  " + TotalMarksOfEachSubject);

// // Calculate total obtained marks
// let TotalObtainedMarks = marksOf1stSubject + marksOf2ndSubject + marksOf3rdSubject;

// // Calculate percentage
// let percentage = (TotalObtainedMarks / TotalMarks) * 100;

// // Display total marks and percentage
// document.write("<br><br>Total Marks: " + TotalMarks);
// document.write("<br>Total Obtained Marks: " + TotalObtainedMarks);
// document.write("<br>Percentage: " + percentage.toFixed(2) + "%")
//   percentage=( TotalObtainedMarks/TotalMarks)*100
//    document.write(`percentage is ${percentage}`);
  
  


// Function to determine the time of day based on 24-hour format input

  

// facebook Algorithm

// function facebook() {
//     let data = prompt("Enter what you are looking for (Comedy, Content Videos, Posts)");

//     if (data.toLowerCase() === "comedy") {
//         let a = prompt("Enter comedy type");
//         if (a.toLowerCase() === "live show" || a.toLowerCase() === "funny reels") {
//             document.write("ye available hai");
//         } else if (a.toLowerCase() === "dramas") {
//             let b = prompt("Enter type of drama you want");
//             if (b.toLowerCase() === "indian") {
//                 document.write("ye available hai");
//             } else if (b.toLowerCase() === "american") {
//                 document.write("ye available hai");
//             } else if (b.toLowerCase() === "pakistani") {
//                 document.write("ye available hai");
//             } else {
//                 document.write("ye available nhi hai");
//             }
//         } else {
//             document.write("ye available nhi hai");
//         }
//     } else if (data.toLowerCase() === "content videos") {
//         let c = prompt("Enter type of content");
//         if (c.toLowerCase() === "cringe" || c.toLowerCase() === "challenge" || c.toLowerCase() === "news" || c.toLowerCase() === "technology" || c.toLowerCase() === "vlogs" || c.toLowerCase() === "shorts" || c.toLowerCase() === "cooking" || c.toLowerCase() === "food eating" || c.toLowerCase() === "adult" || c.toLowerCase() === "movies" || c.toLowerCase() === "romance") {
//             document.write("ye available hai");
//         } else {
//             document.write("ye available nhi hai");
//         }
//     } else if (data.toLowerCase() === "posts") {
//         let p = prompt("Enter type of posts");
//         if (p.toLowerCase() === "poetry posts") {
//             document.write("ye available hai");
//         } else if (p.toLowerCase() === "job posts" || p.toLowerCase() === "hiring posts") {
//             document.write("ye available hai");
//         } else if (p.toLowerCase() === "religious posts") {
//             let k = prompt("Enter your religion");
//             if (k.toLowerCase() === "islamic" || k.toLowerCase() === "christian" || k.toLowerCase() === "hinduism" || k.toLowerCase() === "buddhism") {
//                 document.write("ye available hai");
//             } else {
//                 document.write("ye available nhi hai");
//             }
//         } else if (p.toLowerCase() === "ads") {
//             let add = prompt("Enter type of ads");
//             if (add.toLowerCase() === "about technology" || add.toLowerCase() === "business marketing" || add.toLowerCase() === "youtube promotion" || add.toLowerCase() === "valentine" || add.toLowerCase() === "marry" || add.toLowerCase() === "nikkah") {
//                 document.write("ye available hai");
//             } else {
//                 document.write("ye available nhi hai");
//             }
//         } else {
//             document.write("ye available nhi hai");
//         }
//     } else {
//         document.write("<br>"+"Invalid option"+"</br>");
//     }
// }

// facebook();
     







































 
// // Chapter 9-11

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


// Promo/X/missing numbers

// let arr = [11, 13, 15, 17, 19];
// let missingArr = [];

// for (let i = 0; i <= arr.length-1 ; i++) {
//    let diff=arr[i+1]-arr[i];
    
//     // Check if the difference is greater than 1
//     if (diff> 1) {
//         // Find the missing numbers
//         for (let j =  1; j < diff; j++) {
//             missingArr.push( arr[i] + j );
//             arr.splice( i + 1, 0, arr[i] + j );
//         }
//     }
// }


// console.log(arr);

// Answere 11
// let a=+prompt("Enter 1st Number");
// let b=+prompt("Enter 2nd Number");
// let c=prompt("Enter which do you want to perform Operation ");
// if(c==="+"){
//     document.write(a+b);
// }
// else if(c==="-"){
//     document.write(a-b);
// }
// else if(c==="*"){
//     document.write(a*b);
// }
// else if(c==="%"){
//     document.write(a%b);
// }
// else{
//     document.write("Invalid Operator");
// }
//  Chapter 11-13
// Answer 1



// Answer 2
// let a = +prompt();
// let b = +prompt();
// if(b>a){
//     document.write(`2nd number is greater ${b} than ${a}`);
// }
// else if( b<a){
//     document.write(`1st number is greater ${a} than ${b}`);
// }else if(a==b){

//     document.write(`Both numbes  ${a} are ${b} Equal`);
// }
// Answer 3 
// let a=+prompt("enter number");

// if(a>0){
//     document.write("Positive Number");
// }else if(a<0){
//     document.write("Negative Number");
// }
// else {
//     document.write("Zero");
// }

// Answer 4
// // let a=prompt("Enter  string"
// // );
// // if(a.length!==1){
// //     document.write("It'snot  a vowel");


// // }else{
// //     document.write("It's  a vowel");
// // }

// // Answer 5

// // let a="shayanrao897";
// // let b=prompt("Enter password");
// // let c=prompt("Enter password")
// // if(a==b && b==c){
// //     document.write(`The password you enter is Correct! match with original password`);
// // }
// // else if( b=="" && c==""){ 
// //     document.write(` Enter the password `);
// // }
// // else if(b=="a"||c=="a"){
// //     document.write(`The password you enter is Incorrect! match with original password`);
// // }

// // else {
// //    alert(`The password you enter is Incorrect! match with original password`);
// // }

// // Prompt the user to enter a character
// let input = prompt("Please enter a character:");

// // Check if the input is a single character
// if (input.length === 1) {
//     // Get the ASCII code of the character
//     let asciiCode = input.charCodeAt(0);

//     // Check if the character is a number
//     if (asciiCode >= 48 && asciiCode <= 57) {
//         console.log("The input is a number.");
//     }
//     // Check if the character is an uppercase letter
//     else if (asciiCode >= 65 && asciiCode1 <= 90) {
//         console.log("The input is an uppercase letter.");
//     }
//     // Check if the character is a lowercase letter
//     else if (asciiCode >= 97 && asciiCode <= 122) {
//         console.log("The input is a lowercase letter.");
// //     }
// //     // If it's none of the above
// //     else {
// //         console.log("The input is neither a number nor a letter.");
// //     }
// // } else {

//     // let str = "Rao Muhammad shayan";

//     // // Find the start and end indices of the substring "Muhammad"
//     // let startIndex = str.indexOf("Muhammad");
//     // let endIndex = startIndex + "Muhammad".length;
    
//     // // Create the new string using slice
//     // let newStr = str.slice(0, startIndex) + "Ali" + str.slice(endIndex);
    
//     // console.log(newStr); // Output: "Rao Ali shayan"
//     // var num=8998.900;
//     // num.toFixed()

//     function generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSpecial) {
//       const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//       const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
//       const numberChars = '0123456789';
//       const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';
  
//       let characterPool = '';
//       if (includeUppercase) characterPool += uppercaseChars;
//       if (includeLowercase) characterPool += lowercaseChars;
//       if (includeNumbers) characterPool += numberChars;
//       if (includeSpecial) characterPool += specialChars;
  
//       if (characterPool.length === 0) {
//           throw new Error('Please select at least one character type.');
//       }
  
//       let password = '';
//       for (let i = 0; i < length; i++) {
//           const randomIndex = Math.floor(Math.random() * characterPool.length);
//           password += characterPool[randomIndex];
//       }
  
//       return password;
//   }
  
//   // Example usage:
//   const length = 12; // Desired password length
//   const includeUppercase = true; // Include uppercase letters
//   const includeLowercase = true; // Include lowercase letters
//   const includeNumbers = true; // Include numbers
//   const includeSpecial = true; // Include special characters
  
//   const password = generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSpecial);
//   console.log('Generated Password:', password);
let a="karachi";
a+= " "+"lahore";
console.log(`${a}`);
