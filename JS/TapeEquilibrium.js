/**
 * A non-empty array A consisting of N integers is given. Array A represents numbers on a tape.
 *
 * Any integer P, such that 0 < P < N, splits this tape into two non-empty parts: A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].
 *
 * The difference between the two parts is the value of: |(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|
 *
 * In other words, it is the absolute difference between the sum of the first part and the sum of the second part.
 *
 * For example, consider array A such that:
 *
 *   A[0] = 3
 *   A[1] = 1
 *   A[2] = 2
 *   A[3] = 4
 *   A[4] = 3
 *   We can split this tape in four places:
 *
 *   P = 1, difference = |3 − 10| = 7
 *   P = 2, difference = |4 − 9| = 5
 *   P = 3, difference = |6 − 7| = 1
 *   P = 4, difference = |10 − 3| = 7
 *   Write a function:

 *   function solution(A);
 *   that, given a non-empty array A of N integers, returns the minimal difference that can be achieved.
 *   For example, given:
 *
 *   A[0] = 3
 *   A[1] = 1
 *   A[2] = 2
 *   A[3] = 4
 *   A[4] = 3
 *   the function should return 1, as explained above.
 *   Write an efficient algorithm for the following assumptions:
 * 
 * N is an integer within the range [2..100,000];
 * each element of array A is an integer within the range [−1,000..1,000].
 */

function solution(A){
	let n = A.length;
	let preSum = new Array(n);

	if (n === 2){
		return Math.abs(A[0] - A[1]);
	}

	preSum[0] = A[n - 1];
	for(let k=1;k <n; k++) {
	  preSum[k] = preSum[k -1] + A[n - (k + 1)];
	};
    let minDif = Math.abs(A[0] - preSum[n -2]);
	let preTot = A[0];
	for (let k =1; k < n; k++){
		let dif = Math.abs(preTot - preSum[n - (k + 1)]);
		if (minDif > dif) {
			minDif = dif;
		}
		preTot  = preTot + A[k];
	}
	return minDif;
}


console.log('[3,1,2,4,3] expect -> [1] -> ',solution([3,1,2,4,3])); // 1
console.log('[3,-1,2,-4,3] expect [1] -> ',solution([3,-1,2,-4,3]));
console.log('[-500,1,500,300] expect -> [299] -> ',solution([-500,1,500,300]));
console.log('[3,2] expect-> [1] -> ',solution([3,2]));
console.log('[-2,-3,-4,-1] expect-> [0]-> ',solution([-2,-3,-4,-1])); // 0
console.log('[-1000,1000] expect-> [2000]->' , solution([-1000,1000])); //2000
console.log('[-10,-20,-30,-40,100] expect -> [20] ->' , solution([-10, -20, -30, -40, 100])); //20
