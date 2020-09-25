var testArr = [6,3,5,1,2,4]


sum = 0
for(var i = 0; i <=5; i++){
    sum+=testArr[i]
    console.log("val", testArr[i] , "sum", sum)
}


// expected value of array [0,3,10,3,8,20]

NewArray = []
for(var i = 0; i <=5; i++){
    NewArray[i] = testArr[i] * i
}
console.log(NewArray)