/* function addUpTo(n) {

  return n * (n + 1) / 2;

}



let t1 = performance.now();

addUpTo(50000000000);

let t2 = performance.now();

console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)



n! = n * n - 1 * n - 2 * 1


Factorial of 5 = 5 * 4 * 3 * 2 * 1 = 120
Factorial of 6 = 6 * 5 * 4 * 3 * 2 * 1 = 720
 function printNumber(n) {
   for (let i = 0 ; i <= n ; i ++) {
    for (let j = 0; j <= n; j++) {
      for (let k = 0 ; k<= n; k++) {
        console.log(k);
      }
    }
   }
 }
 
 let t1 = performance.now();
 printNumber(10);
 let t2 = performance.now();
 
 console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)
 
 
 : 0.001599999999627471 seconds."
 "Time Elapsed: 0.013300000000745058 seconds."

 
 function printNumber(n) {
   for (let i = 0 ; i < n ; i++) {
    console.log(i);
  }
  
  for (let j = 0 ; j < n ; j++) {
    console.log(j);
  }
  
  
  for (let k = 0 ; k < n ; k++) {
    console.log(k);
  }
 }
 
 let t1 = performance.now();
 printNumber(10);
 let t2 = performance.now();

console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)
 
 
 
 O(n) + O(n) =--> O(n)
 
  */
  
  
  
  
  
  
  
  
  
  /* Recursion */
  // You can acheive the same feature of looping by using recursion as well
  // By calling the function inside itself
  
  
  
  function printNumbers(n) {
  
    if (n === 0) {
      return;
  }
    console.log(n);
  
  printNumbers(n-1);
}

printNumbers(5);



// Steps

printNumber(5); // n = 5    5
printNumber(4) // n = 4     4
printNumber(3)  // n = 3.    3
printNumber(2) // n = 2.     2
printNumber(1) // n = 1.    1
printNumber(0) // n = 0.    






