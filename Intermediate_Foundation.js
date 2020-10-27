
// function Sigma(num){
//     var sum = 0;
//     for(var i=1; i<=num; i++){
//         sum += i;
//     }
//     return sum;
// }

// console.log(Sigma(5))

// function Factorial(num){
//     var product = 1;
//     for(var i=1; i<=num; i++){
//         product *= i;
//     }
//     return product;
// }

// console.log(Factorial(5))


// function Fibonacci(num){
//     if(num == 0)
//         return 0;
//     if(num == 1)
//         return 1;
//     var output = null;
//     var prev1 = 1;
//     var prev2 = 0;
//     for(var i=2; i<=num; i++){
//         output = prev1 + prev2;
//         prev2 = prev1;
//         prev1 = output;
//     }
//     return output;
// }
// console.log(Fibonacci(7))


// function SecondToLast(arr){
//     if(arr.length < 2)
//         return null
//     return arr[arr.length-2]
// }

// console.log(SecondToLast([42, true, 4, "Liam", 7]))


// function NthToLast(arr, num){
//     if(arr.length < num)
//         return null
//     return arr[arr.length-num]
// }

// console.log(NthToLast([5,2,3,6,4,9,7],3))


// function SecondLargest(arr){
//     if(arr.length < 2)
//         return null;
//     var largest = arr[0];
//     var secondLargest = null;
//     for(var i=0; i<arr.length; i++){
//         if(largest < arr[i]){
//             secondLargest = largest;
//             largest = arr[i];
//         }
//     }
//     return secondLargest;
// }

function DoubleTrouble(arr){
    for(var i=0; i<arr.length; i+=2){
        arr.splice(i+1, 0, arr[i])
    }
    return arr;
}

console.log(DoubleTrouble([4, "Ulysses", 42, false]));