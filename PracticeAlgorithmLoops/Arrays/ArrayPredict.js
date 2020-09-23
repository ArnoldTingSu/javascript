var arr = [8,6,7,5,3,0,9]
 for(var i = 0; i < arr.length; i++){    
    console.log(arr[i]);
}

// -----------------------------------------------
// Prediction:
// arr = [8,6,7,5,3,0,0]
// var i = 0 < 7
// console.log arr[0] => (8)
// var i + 1 = 1
// loop, on and on...console.log(8)(6)(7)(5)(3)(0)(9)

//predict 2 ----------------------------------------------

var arr = [7,3,8,4,2,0,1];
for(var i = 0; i < arr.length; i++){ 
    if(arr[i] % 2 == 0){
        console.log(arr[i]);
    } 
    else{
        console.log("That is odd!");
    }
}

// Prediction: ------------------------------------------------
// arr = [7,3,8,4,2,0,1]
// var = 0 < 7
// console.log() (That is Odd!), (That is Odd), 8, 4, 2 , 0 , (That is odd!)

// -------------------------------------------------------------

var arr = [1,3,8,-5,0,-2,4,-1];
var newArr = [];
for(var i = 0; i< arr.length; i++){
    if(arr[i] < 0){
        newArr.push(arr[i]);
        arr[i] = arr[i] * -1;
    }
    else if(arr[i] == 0){
        arr[i] = "Zero";
    }
    else{
        arr[i] = arr[i] * -1;
    }
}
console.log(arr);
console.log(newArr);

// prediction: 
// arr = [1,3,8,-5,0,-2,4,-1]
// new Arr = []
// i = 0 
// i < 8
// 1 /< 0
// else if == 1 == 0. false
// arr = [-1,3,8,-5,0,-2,4,-1]
// i = 1
// if 3 < 0
// arr = [-1,-3,8,-5,0,-2,4,-1]
// prediction: arr = [-1,-3,-8,5,"Zero",2,-4,1]
// prediction NewArr = [-5,-2,-1]