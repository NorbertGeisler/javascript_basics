var testArr = [6,3,5,1,2,4];
var sum = 0;
for(var i = 0; i < testArr.length; i++){
    sum += testArr[i];
    console.log("Num: " + testArr[i] + ", Sum: " + sum);
}

for(var j = 0; j < testArr.length; j++){
    testArr[j] *= j;
}
console.log(testArr)