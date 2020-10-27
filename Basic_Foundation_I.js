
// 1:
function array1to255(){
    var arr = [];
    for(var i = 1; i <= 255; i++){
        arr.push(i)
    }
    return arr;
}

// 2:
function sumEvens1to1000(){
    var sum = 0;
    for(var i = 1; i <= 1000; i++){
        if(i % 2 == 0){
            sum += i;
        }
    }
    return sum;
}

// 3:
function sumOdds1to5000(){
    var sum = 0;
    for(var i = 1; i <= 5000; i++){
        if(i % 2 != 0){
            sum += i;
        }
    }
    return sum;
}

// 4:
function sumArrayValues(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

// 5:
function arrayMax(arr){
    var max = arr[0];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

// 6:
function arrayAverage(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    var average = sum / arr.length;
    return average;
}

// 7:
function arrayOdds1to50(){
    var arr = [];
    for(var i = 1; i <= 50; i++){
        if(i % 2 != 0){
            arr.push(i)
        }
    }
    return arr;
}

// 8:
function greaterThanY(arr, y){
    var counter = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > y){
            counter++;
        }
    }
    return counter;
}

// 9:
function squareArrayVals(arr){
    for(var i = 0; i < arr.length; i++){
        arr[i] *= arr[i];
    }
    return arr;
}

// 10;
function convertArrayNegatives(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 0;
        }
    }
    return arr;
}

// 11:
function MaxMinAverage(arr){
    var newarr = [];
    newarr.push(arrayMax(arr));
    newarr.push(arrayMin(arr));
    newarr.push(arrayAverage(arr));
    return newarr;
}

// 12:
function swapValues(arr){
    var temp = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = temp;
    return arr;
}

// 13:
function negsToText(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = "Dojo";
        }
    }
    return arr;
}

// Extra Stuff to make things easier
function arrayPosAndNeg(){
    var arr = [];
    for(var i = 1; i < 50; i++){
        if(i % 2 != 0){
            arr.push(i * -1)
        }
        else{
            arr.push(i)
        }
    }
    return arr;
}

function arrayMin(arr){
    var min = arr[0];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}

// 1:
//console.log(array1to255());

// 2:
//console.log(sumEvens1to1000());

// 3:
//console.log(sumOdds1to5000());

// 4:
//console.log(sumArrayValues(array1to255()));

// 5:
// console.log(arrayMax(array1to255()));

// 6:
// console.log(arrayAverage(array1to255()));

// 7:
// console.log(arrayOdds1to50());

// 8:
// console.log(greaterThanY(arrayOdds1to50(), 40));

// 9:
// console.log(squareArrayVals(arrayOdds1to50()));

// 10:
// console.log(convertArrayNegatives(arrayPosAndNeg()));

// 11:
// console.log(MaxMinAverage(arrayPosAndNeg()));

// 12:
// console.log(swapValues(arrayOdds1to50()));

// 13:
console.log(negsToText(arrayPosAndNeg()));
