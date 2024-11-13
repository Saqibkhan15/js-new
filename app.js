// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.

// function power(a, b) {
//     var value = a ** b;
//     return value;
// }

// var result = power(2, 3);
// console.log(result);

// 2-Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// function leapYear(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// var year = prompt("Enter a year:");
// var result = leapYear(year);
// console.log(result);

//3 Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.
// function calculateAverage(marks1, marks2, marks3) {
//   return (marks1 + marks2 + marks3) / 3;
// }

// function calculatePercentage(marks1, marks2, marks3, totalMarks) {
//   var totalObtained = marks1 + marks2 + marks3;
//   return (totalObtained / totalMarks) * 100;
// }

// function mainFunction() {
//   var mark1 = prompt("Enter marks in Subject: ");
//   var mark2 = prompt("Enter marks in Subject: ");
//   var mark3 = prompt("Enter marks in Subject: ");
//   var totalMarks = 300;

//   mark1 = parseFloat(mark1);
//   mark2 = parseFloat(mark2);
//   mark3 = parseFloat(mark3);

//   var average = calculateAverage(mark1, mark2, mark3);
//   var percentage = calculatePercentage(mark1, mark2, mark3, totalMarks);

//   document.write("Average Marks: " + average + "<br>");
//   document.write("Percentage: " + percentage.toFixed(2) + "%");
// }

// mainFunction();


// function customIndex(string, char) {
//     for (var i = -1; i < string.length; i++) {
//       if (string[i] === char) return i;
//     }
//     return -1;
//   }
  
//   function findIndex() {
//     var string = prompt("Enter a word:");
//     var char = prompt("Enter a character:");
    
//     var index = customIndex(string, char);
    
//     if(index !== -1) {
//       alert(char + " found" + index);
//     } else {
//       alert(char + " not found");
//     }
//   }
  
//   findIndex();
  
  

// function deleteVowels() {
//     var sentence = prompt("Enter a sentence:");
//     var vowels = "aeiou";
//     var result = " ";
  
//     for (var i = 0; i < sentence.length; i++) {
//       if (vowels.indexOf(sentence[i]) === -1) {
//         result += sentence[i];
//       }
//     }
  
//     alert("Without vowels: " + result);
//   }
  
//   deleteVowels();
  



// function vowelPairCounter(sentence) {
//     var occurrenceCount = 0;
//     sentence = sentence.toLowerCase();
    
//     for (var index = 0; index < sentence.length - 1; index++) {
//       var vowelPair = sentence[index] + sentence[index + 1];
      
//       switch (vowelPair) {
//         case 'ea':
//         case 'ui':
//         case 'oi':
//         case 'ou':
//         case 'ai':
//         case 'io':
//           occurrenceCount++;
//           break;
//         default:
//           break;
//       }
//     }
    
//     return occurrenceCount;
// }
// var userText = prompt("Enter a sentence:");
// var vowelCountResult = vowelPairCounter(userText);
// alert("Number of vowel occurrences: " + vowelCountResult);



// function convertDistance(km) {
//     var meter = km * 1000;
//     var feet = km * 3280.84;
//     var inches = km * 39370.1;
//     var cm = km * 100000;
  
//     alert(km + " km is equal to:\n" + meter + " meters\n" + feet + " feet\n" + inches + " inches\n" + cm + " centimeters");
//   }
  
//   var distance = prompt("Enter distance in km:");
//   convertDistance(distance);



// 9. Overtime Pay


// function calculateOvertime(hoursWorked) {
//   var overtimeRate = 12;
//   var standardHours = 40;

//   if (hoursWorked <= standardHours) {
//     alert("No overtime pay");
//   } else {
//     var overtimeHours = hoursWorked - standardHours;
//     var overtimePay = overtimeHours * overtimeRate;
//     alert("Overtime pay: Rs." + overtimePay);
//   }
// }

// var hoursWorked = prompt("Enter hours worked:");
// calculateOvertime(hoursWorked);

  


// function calculateCurrencyNotes(amount) {
//     var notes100 = Math.floor(amount / 100);
//     var remainingAmount = amount % 100;
//     var notes50 = Math.floor(remainingAmount / 50);
//     remainingAmount = remainingAmount % 50;
//     var notes10 = Math.floor(remainingAmount / 10);
  
//     alert("Currency notes:\n100: " + notes100 + "\n50: " + notes50 + "\n10: " + notes10);
//   }
  
//   var amount = prompt("Enter amount to withdraw:");
//   calculateCurrencyNotes(amount);
  