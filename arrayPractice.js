let myArr = [0,1,2,3,4,5,6,7]

//PUSH - ADD TO END OF ARRAY
myArr.push(9);
console.log(myArr)

//POP - REMOVE LAST ELEMENT
myArr.pop();
console.log(myArr)

//UNSHIFT - ADD TO FRONT OF ARRAY
myArr.unshift(10)
console.log(myArr)

//SHIFT - REMOVE FROM FRONT OF ARRAY
myArr.shift()
console.log(myArr)

//REPLACE ELEMENT WITH ANOTHER ELEMENT
myArr[0] = 20;
console.log(myArr)

//SLICE - RETURN PORTION OF ARRAY
let arrSlice = myArr.slice(2, 5)
console.log(arrSlice)

//SPLICE - REMOVE PORTION OF ARRAY
myArr.splice(2,4)
console.log(myArr)