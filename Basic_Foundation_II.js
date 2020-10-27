


// 1:
function BiggieSize(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            arr[i] = "big"
        }
    }
    return arr;
}

// 2:
function PrintLowReturnHigh(arr){
    var min = arr[0];
    var max = arr[0];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
        else if(arr[i] > max){
            max = arr[i];
        }
    }
    console.log(min);
    return max;
}

// 3:
function PrintOneReturnAnother(arr){
    if(arr.length < 2){
        console.log("This array only has one value: ", arr[0]);
    }
    else{
        console.log(arr[arr.length-2]);
    }
    var odd = null;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 != 0){
            odd = arr[i];
            break;
        }
    }
    if(odd == null){
        return "This array did not contain any odd numbers!";
    }
    else{
        return odd;
    }
}

// 4:
function DoubleVision(arr){
    var doubled = [];
    for(var i = 0; i < arr.length; i++){
        doubled.push(arr[i] * 2);
    }
    return doubled;
}

// 5:
function CountPositives(arr){
    var counter = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            counter++;
        }
    }
    arr[arr.length-1] = counter;
    return arr;
}

// 6:
function EvensAndOdds(arr){
    var countEven = 0;
    var countOdd = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 != 0){
            countOdd++;
            countEven = 0;
        }
        else if(arr[i] % 2 == 0){
            countEven++;
            countOdd = 0;
        }
        if(countOdd >= 3){
            console.log("That's Odd!");
        }
        else if(countEven >= 3){
            console.log("Even more so!")
        }
    }
    return;
}

// 7:
function IncrementTheSeconds(arr){
    for(var i = 0; i < arr.length; i++){
        if(i % 2 != 0){
            arr[i] += 1;
        }
        console.log(arr[i]);
    }
    return arr;
}

// 8:
function PreviousLengths(arr){
    for(var i = arr.length-1; i >= 1; i--){
        arr[i] = arr[i-1].length;
    }
    return arr;
}

// 9:
function AddSeven(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        newArr.push(arr[i]+7)
    }
    return newArr;
}

// 10:
function ReverseArray(arr){
    var temp = null;
    for(var i = 0; i < arr.length/2; i++){
        temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}

// 11:
function MakeNegative(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            newArr.push(arr[i] * -1);
        }
        else{
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

// 12:
function AlwaysHungry(arr){
    var hungry = true;
    for(var i = 0; i < arr.length; i++){
        if(arr[i]  == 'food'){
            console.log("yummy");
            hungry = false;
        }
    }
    if(hungry == true){
        console.log("I'm Hungry");
    }
}

// 13:
function SwapToCenter(arr){
    var temp = null;
    for(var i = 0; i < arr.length/2; i+= 2){
        temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}

// 14:
function ScaleArray(arr, num){
    for(var i = 0; i < arr.length; i++){
        arr[i] *= num;
    }
    return arr;
}


var myArr = [1,-2,3,-4,5,-6,7,-8,9,-10];
var evenArr = [2,4,6,8,10];
var shortArr = [2];
var textArr = ['one','two','three','four','five','six']

// 1:
// console.log(BiggieSize(myArr));

// 2:
// console.log(PrintLowReturnHigh(myArr));

// 3:
// console.log(PrintOneReturnAnother(myArr));
// console.log(PrintOneReturnAnother(evenArr));
// console.log(PrintOneReturnAnother(shortArr));

// 4:
// console.log(DoubleVision(evenArr));

// 5:
// console.log(CountPositives(myArr));

// 6:
// EvensAndOdds(myArr);
// EvensAndOdds(evenArr);

// 7:
// console.log(IncrementTheSeconds(myArr));

// 8;
// console.log(PreviousLengths(textArr));

// 9:
// console.log(AddSeven(myArr));

// 10:
// console.log(ReverseArray(myArr));

// 11:
// console.log(MakeNegative(myArr));

// 12:
// AlwaysHungry(myArr);

// 13:
// console.log(SwapToCenter(evenArr));
// 14:
console.log(ScaleArray(evenArr, 2));