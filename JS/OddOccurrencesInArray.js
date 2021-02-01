/*
 * That, given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element.
 *	For example, given array A such that:
 
 * A[0] = 9  A[1] = 3  A[2] = 9
   A[3] = 3  A[4] = 9  A[5] = 7
   A[6] = 9
 * the function should return 7, as explained in the example above.
 * write an efficient algorithm for the following assumptions:
 * N is an odd integer within the range [1..1,000,000];
 * each element of array A is an integer within the range [1..1,000,000,000];
 * all but one of the values in A occur an even number of times.
 */

function solution(A){
  let nonDuplicateMap = new Map();
  let ret = 0;	
  A.map ((el) => {
	let key = el;  
	if (nonDuplicateMap.has(key)) { 
		nonDuplicateMap.delete(key)
	} else {
		nonDuplicateMap.set(key,1);
	}
  });
  let keys = nonDuplicateMap.keys();
  return keys.next().value;
}


let arr = [9,3,9,1000000000,3,9,9]
console.log( '[9,3,9,7,3,9,9] = >' , solution(arr));
arr = [1]
console.log( '[1] = >' , solution(arr));
arr = [9,3,9,3,9,9,7]
console.log( '[9,3,9,3,9,9,7] = >' , solution(arr));
arr = [1,9,3,9,3,9,9]
console.log( '[1,9,3,9,3,9,9] = >' , solution(arr));






