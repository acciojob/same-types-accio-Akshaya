function isSameType(value1, value2) {
    if (isNaN(value1) && isNaN(value2)) {
        return true;
    }

    return typeof value1 === typeof value2;
}

console.log(isSameType(1, 3));        
console.log(isSameType("hey", "hello"));  
console.log(isSameType(NaN, NaN));    
console.log(isSameType("3", 3));      

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
