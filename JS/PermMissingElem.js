/*
 * Given an array A, returns the value of the missing element.
   For example, given array A such that:
   A[0] = 2
   A[1] = 3
   A[2] = 1
   A[3] = 5
   the function should return 4, as it is the missing element.
   Write an efficient algorithm for the following assumptions:
   N is an integer within the range [0..100,000];
   the elements of A are all distinct;
   each element of array A is an integer within the range [1..(N + 1)].
 */

function solution(A) {
	let lmap = new Map();

	A.map((el, index) => {
		lmap.set(el, index);
	});
	for (let i = 1; i <= A.length + 1 ; i++){
	  if (!lmap.has(i)) {
	     return i;
	  }
	}
}

console.log('2,3,1,5', solution([2,3,1,5]));
console.log('', solution([]));
console.log('1', solution([1]));
