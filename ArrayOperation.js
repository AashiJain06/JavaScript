let nums =[1,2,3,4,5];
//to find the length of array
console.log("Length of the Array");
console.log(nums.length);
//to add elements in array
console.log("Array after inserting elements");
nums.push(6);
console.log(nums);
//to insert at first
console.log("Array after insert element at first"); 
nums.unshift(0);
console.log(nums);
//to delete an element
console.log("Array after removing elemetns");
nums.pop();
nums.pop();
console.log(nums);
//to delete at first
console.log("Array after removing from first");
nums.shift();
console.log(nums);
// to remove element from anywhere
console.log("Array after removing elements at index 2");
nums.splice(2,2);
console.log(nums);
//to get the index 
let position = nums.indexOf(1);
console.log(position);