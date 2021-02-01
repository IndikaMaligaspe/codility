/*
 *A small frog wants to get to the other side of the road. 
 The frog is currently located at position X and wants to get to a position greater than or equal to Y. 
 The small frog always jumps a fixed distance, D
 Count the minimal number of jumps that the small frog must perform to reach its target
 
 Write a function:
	function solution(X, Y, D);
	that, given three integers X, Y and D, returns the minimal number of jumps from position X to a position equal to or greater than Y.
	For example, given:

	  X = 10
	  Y = 85
	  D = 30
	the function should return 3, because the frog will be positioned as follows:
 */

function solution (X, Y, D) {
  let distance = Y - X;
  let count = distance / D
  return Math.ceil(count);
} 

console.log('10, 85, 30' , solution(10, 85, 30))
console.log('1, 2, 30' , solution(1, 2, 30))
console.log('1000000, 10000010, 1' , solution(1000000, 10000010, 1))


