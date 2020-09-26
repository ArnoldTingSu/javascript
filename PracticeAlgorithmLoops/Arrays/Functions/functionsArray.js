// Predict 1:
//
//
//
function greeting(){
    return "Hello";
    console.log("World");
}
var word = greeting();
console.log(word);

// only returns: "Hello"


// Predict 2:
//
//
//

function add(num1, num2){
    console.log("Summing Numbers!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    return sum;
}
var result1 = add(3,5);
var result2 = add(4,7);
console.log(result1);
console.log(result2);

//prints sum of num 1 and num 2
// console logs return 8 and 11

// Predict 3:

//
//
//

function highFive(num){
    for(var i=0; i<num; i++){
        if(i == 5){
            console.log("High Five!");
        }
        else{
            console.log(i);
        }
    }
}

// counter starts at 0, logs numbers from 0,1,2,3,4 ->>> "High Five!"


// actuality, nothing prints. value is only stored in the loop block.