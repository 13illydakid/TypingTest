function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
    let array = [];
    for(let i = 1; i < arr.length; i+=2){
        let elem = arr[i];
        array.push(elem);
    }
    console.log(array);
    return array;
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here
    let array = [];
    for(let i = 1; i < arr.length; i+=2){
        let elem = arr[i];
        array.push(elem);
    }
    console.log(array);
    return array.reverse();
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here
    let array = [];
    for(let i = 1; i < arr.length; i*=2){
        let elem = arr[i];
        array.push(elem);
    }
    console.log(array);
    return array;
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    // Your code here
    let array = [];
    for(let i = 1; i < arr.length; i*=n){
        let elem = arr[i];
        array.push(elem);
    }
    console.log(array);
    return array;
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
    console.log(arr);
    let array = [];
    if(arr.length % 2 === 0){
       array = arr.slice(0, (arr.length/2));
    } else{
       array = arr.slice(0, (arr.length/2)+1);
    }
    console.log(array);
    return array;
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here
    console.log(arr);
    let array = [];
    if(arr.length % 2 === 0){
       array = arr.slice((arr.length/2), arr.length+1);
    } else{
       array = arr.slice((arr.length/2)+1, arr.length+1);
    }
    console.log(array);
    return array;
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
