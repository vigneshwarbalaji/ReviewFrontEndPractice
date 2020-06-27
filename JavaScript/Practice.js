//String Methods


var sampleString = "Rate of expansion of the universe is exponential";

console.log(sampleString.length);
console.log(sampleString.indexOf('universe'));
console.log(sampleString.lastIndexOf('exponential', 5));
console.log(sampleString.search('Rate'));

var newString = sampleString.slice(0, 4);

console.log(newString);

/* The difference between slice substring and substr is 

in slice u can slice the string and store it in resultant variable 
and u can also have negative indexes but in substr and substring u cannot have it

*/

var newSample = sampleString.replace('universe', 'Multiverse');

console.log(newSample);

var numbers = '1,2,3,4,5';

var numArr = numbers.split(',');

for (let i = 0; i < numArr.length; i++) {
    console.log(numArr[i] + ' ');

}


//Arrays

var arrOfNum = [1, 1, 2, 3, 4, 5, 6, 7];

arrOfNum.pop();

console.log(arrOfNum);

arrOfNum.push(7);

console.log(arrOfNum);

arrOfNum.splice(0, 1, 0, );

console.log(arrOfNum);


//fisher yates method
for (i = arrOfNum.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * i)
    k = arrOfNum[i]
    arrOfNum[i] = arrOfNum[j]
    arrOfNum[j] = k
}

console.log(arrOfNum);

//using sort on numeric data directly is not always encouraged as it
//produces incorrect results cause sort in javascript is usually designed 
//for strings
console.log(arrOfNum.sort());
console.log(arrOfNum.reverse());

var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b) { return a - b });

console.log(points);

//Higher Order Functions

function myFunct(value) {
    var txt = txt + value + " ";
}

points.forEach(myFunct);

var expoNum = [1, 2, 3, 4, 5, 6];

var expoTestMap = expoNum.map(expoFunc);

function expoFunc(value) {
    return value * value;
}

console.log(expoTestMap);

var filterNum = expoTestMap.filter(filterFunc);

function filterFunc(value) {
    return (value < 10);
}

console.log(filterNum);