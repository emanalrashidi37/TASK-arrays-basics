//Create an empty array emptyArray
const emptyArray = [];

//Create an array hobbies, add 6 hobbies to it
let hobbies =[ 'coding' , 'ridding a horse' , 'running' , 'online shopping' , 'cooking' , 'reading' ];

//Create an array numbers, add your favorite 5 numbers
const numberArry =[22, 5, 7, 37, 3];

//Print out the second number from the array numbers
console.log(numberArry[1]);

//Print out the last hobby from the array hobbies
console.log(hobbies.length-1);

//Add a fake hobby to the end of the array hobbies
hobbies.push("danceing");

//Print the last hobby
console.log(hobbies[hobbies.length-1]);

//Print the length of array hobbies
console.log(hobbies.length);

//Remove the last 2 hobbies from array hobbies
//will remove reading&dancing
hobbies.splice(-1,1);
hobbies.splice(-1,1);

//Print length of hobbies
console.log(hobbies.length);

//Print every element in hobbies in a single line
hobbies = ['coding' , 'ridding a horse' , 'running' , 'online shopping' , 'cooking'];
for (i=0; i<hobbies.length; i++){
    console.log(hobbies[i]);
}

//Empty the array hobbies
hobbies =[];