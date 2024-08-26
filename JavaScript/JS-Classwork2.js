// Q1. Write a program in javascript to create a pattern like this
//          1
//        1 2 3
//      1 2 3 4 5
//    1 2 3 4 5 6 7
//  1 2 3 4 5 6 7 8 9

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// readline.question('Enter a no:',row => {
//     row = parseInt(row);
//     let space = row*2-2;
//     for(let i=1; i<=row; i++){
//        let str ="";
//        for(let j=1; j<=space; j++){
//            str +=' ';
//        }
//        for(let k=1; k<2*i; k++){
//            str += k + ' ';
//        }
//        console.log(str);
//        space-=2;
//     }
// });

// let row = 5;
//  let space = row*2-2;
//  for(let i=1; i<=row; i++){
//     let str ="";
//     for(let j=1; j<=space; j++){
//         str +=' ';
//     }
//     for(let k=1; k<2*i; k++){
//         str += k + ' ';
//     }
//     console.log(str);
//     space-=2;
//  }

 //Q2. 
let n = 5; 
for (let i = 1; i <= n; i++) {
  let row = '';
  for (let j = 0; j < n - i; j++) 
    row += '  ';
  for (let k = 1; k <= i; k++) 
    row += k + ' ';
  console.log(row);
}
for (let i = n - 1; i >= 1; i--) {
  let row = '';
  for (let j = 0; j < n - i; j++) 
    row += '  ';
  for (let k = 1; k <= i; k++) 
    row += k + ' ';
  console.log(row);
}

//Q3 Write a program in javascript to create a pattern like this
// 1 
// 2 1 
// 3 2 1 
// 4 3 2 1 
// 5 4 3 2 1 
// 4 3 2 1 
// 3 2 1 
// 2 1 
// 1 
// let n = 5; 
// for (let i = 1; i <= n; i++) {
//   let row = '';
//   for (let k = i; k >= 1; k--)
//     row += k + ' ';
//   console.log(row);
// }
// for (let i = n - 1; i >= 1; i--) {
//   let row = '';
//   for (let k = i; k >= 1; k--) 
//     row += k + ' ';
//   console.log(row);
// }

//Q4 Write a program in javascript to create a pattern like this
// 1 2 3 4 5 6 7 8 9 
//   1 2 3 4 5 6 7 
//     1 2 3 4 5 
//       1 2 3 
//         1 
// let row = 5;
// for (let i = row; i >= 1; i--) {
//   let str = "";
//   let space = (row - i) * 2;
//   for (let j = 0; j < space; j++) {
//     str += ' ';
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     str += k + ' ';
//   }
//   console.log(str);
// }
