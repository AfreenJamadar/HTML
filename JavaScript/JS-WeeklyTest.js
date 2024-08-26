//Q1 String Reversal: Write a function to reverse a given string in JavaScript without using built-in reverse functions.
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i]; 
    }
    return reversed;
  }
  console.log(reverseString("geekster"));

//Q2 Anagram Check: Implement an algorithm to check if two strings are anagrams of each other 
//(contain the same characters with the same frequency)
// function isAnagram(str1, str2) {
//   str1 = str1.replace(/\s/g, '').toLowerCase();
//   str2 = str2.replace(/\s/g, '').toLowerCase();
//   if (str1.length !== str2.length) {
//     return false
//   }
//   str1 = str1.split('').sort().join('');
//   str2 = str2.split('').sort().join('');
//   return str1 === str2
// }

// const check = isAnagram('modi', 'monu');
// console.log(check);

//Q3 Array Intersection: Given two arrays, write a function to find their intersection (common elements).
let arr1 = [1, 3, 5, 7, 9];
let arr2 = [2, 3, 4, 5, 6, 9];

let res_arr = (arr1, arr2) => {
    let arr3 = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                arr3.push(arr1[i]);
            }
        }
    }
    return arr3;
};

console.log("Array obtained is : " + res_arr(arr1, arr2));

//Q4 String Palindrome: Create a function to check if a given string is a palindrome (reads the same forwards 
//and backwards) while ignoring non-alphanumeric characters.
function check_palindrome(str) {
    let j = str.length - 1;
    for (let i = 0; i < j / 2; i++) {
        let x = str[i];
        let y = str[j - i];
        if (x != y) {
            return false;
        }
    }
    return true;
}
function is_palindrome(str) {
    let ans = check_palindrome(str);
    if (ans == true) {
        console.log("String is palindrome");
    }
    else {
        console.log("String not a palindrome");
    }
}
let test = "racecar";
is_palindrome(test);

//Q5 Array Rotation: Implement a function to rotate an array to the right by a specified number of positions.
function rotateArray(arr, rotateBy) {
	const n = arr.length;
	rotateBy %= n;
	return arr.slice(rotateBy).concat(arr.slice(0, rotateBy));
}
const orgArr = [1, 2, 3, 4, 5];
const rotArr = rotateArray(orgArr , 2);
console.log(rotArr);

//Q6 String Compression: Write a function to perform basic string compression using the counts of repeated characters. 
//For example, "aabcccccaaa" would become "a2b1c5a3."
function compressStringLoop(str) {
    let compressed = '';
    let count = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            compressed += count + str[i];
            count = 1;
        }
    }
    console.log(compressed);
}
compressStringLoop("aabcccccaaa");

//Q7 Array Sum: Write an algorithm to find the pair of elements in an array that adds up to a specific target sum.
function twoSum(nums, target) {
  var arr = [];
  var idx = [];
  
    for (var x = 0; x < nums.length; x++){
      if (arr[nums[x]] != null){
        index = arr[nums[x]];
        idx[0] = index;
        idx[1] = x;
        break;
      }
    else{
      arr[target - nums[x]] = x;
      }
    }
    return idx;
  }
console.log(twoSum([10,20,10,40,50,60,70],50));

//Q8 Longest Substring Without Repeating Characters: Write an algorithm to find the length of the longest substring 
//without repeating characters in a given string.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function lengthOfLongestSubstring(s) {
    let map = new Map();
    let start = 0;
    let maxLength = 0;

    for (let end = 0; end < s.length; end++) {
        if (map.has(s[end])) {
            start = Math.max(map.get(s[end]) + 1, start);
        }
        map.set(s[end], end);
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

rl.question('Enter a string to find the length of the longest substring without repeating characters: ', (inputString) => {
    const result = lengthOfLongestSubstring(inputString);
    console.log('Length of the longest substring without repeating characters:', result);
    rl.close();
});