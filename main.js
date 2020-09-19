//stand in line
function nextInLine(arr, item) {
    // Only change code below this line
  arr.push(item);
  return arr.shift([], 1);
    // Only change code above this line
    
}
  
  // Setup
  var testArr = [1,2,3,4,5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));


  //golf code
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
if (strokes == 1) {
return names[0]
} else if(strokes <= par- 2) {
  return names[1];
} else if(strokes == par - 1) {
  return names[2];
} else if(strokes == par) {
  return names[3];
} else if(strokes == par + 1) {
  return names[4];
} else if(stokes = par +2) {
  return names[5];
}  else if( stokes >= par + 3) {
  return names[6];
}else {
  return "Change Me";
}
  // Only change code above this line
}

console.log(golfScore(5, 5));


//counting cards
var count = 0;

function cc(card) {
  // Only change code below this line
if (card >= 2 && card <= 6) {
count++;
} 
else if (card >= 7 && card <= 9){
  count;
}
else if (card == 10 || card =='J' || card =='Q' || card =='K' || card == 'A') {
  count--;
} else {
  return "Change Me";
}
if (count <= 0) {
return (count + " Hold");
}

else {
return (count + " Bet");
}
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

//profile-lookup

// Setup
var contacts = [
  {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
  },
  {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];


function lookUpProfile(name, prop){
// Only change code below this line
for(var i = 0; i < contacts.length; i++) {
  while (contacts[i].firstName == name) {
    if(contacts[i][prop]){
      return(contacts[i][prop]);
    } else {
      return "No such property";
    }
} 

}
return "No such contact";

// Only change code above this line
}

console.log(lookUpProfile("Akira", "likes"));


//Convert Celsius to Fahrenheit
function convertToF(celsius) {
  let fahrenheit;
  fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}

console.log(convertToF(30));

//Reverse a String
function reverseString(str) {
  var splitString = str.split("");
  var reverse = splitString.reverse();
  var combine = reverse.join('');
  return combine;
}

console.log(reverseString("hello"));

//Factorialize a Number
function factorialize(num) {
  let res= 1;
  for (let n = 2; n <= num; n++) {
    res = res * n;
  }
  return res;
}

console.log(factorialize(5));

//Find the Longest Word in a String
function findLongestWordLength(str) {
  let splitStr = str.split(' ');
  var long = 0;
  for (var i = 0; i < splitStr.length; i++) {
    if (splitStr[i].length > long){
      long = splitStr[i].length;
    } 
  }
  return long;
}

console.log(findLongestWordLength("The quick brown fox jumpedx over the lazy dog"));



//Return Largest Numbers in Arrays

function largestOfFour(arr) {
  let largest = [];
  for (let i = 0; i < arr.length; i++) {
    largest.push(Math.max(...arr[i]));
  }
  return largest;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

//Repeat a String Repeat a String


function repeatStringNumTimes(str, num) {
  let repeated = '';

  for (let i = 0; i < num; i++){
    if(num > 0) {
      repeated +=str;
    } 
    else{
      return '';
    }
  }

  return repeated;
}

console.log(repeatStringNumTimes("abc", 3));


//Title Case a Sentence


function titleCase(str) {
  var lowerCase = str.toLowerCase();
  var splitString = lowerCase.split(' ');
  var res = [];
  for (let i = 0; i < splitString.length; i++) {
    res.push(splitString[i][0].toUpperCase() + splitString[i].slice(1));
  }

  var endRes = res.join(' '); 
  return endRes;
}
console.log(titleCase("I'm a little tea pot"));


//Slice and Splice
function frankenSplice(arr1, arr2, n) {
  let copyarr2= arr2.slice();
  for(let i = 0; i< arr1.length; i++) {
    copyarr2.splice(n,0, arr1[i]);
    n++;
  }
  return copyarr2;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

///Where do I Belong
function getIndexToIns(arr, num) {

  let count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (num > arr[i]) {
      count++;
    }
  } 
  return count; 
}

console.log(getIndexToIns([40, 60], 50));


//Steamroller
function steamrollArray(arr) {
  return arr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]).flat(3));
