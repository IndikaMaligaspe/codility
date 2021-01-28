/*
 * Rotate an array to the right by a given number of steps.
 *
 * For example, given
 *
 *     A = [3, 8, 9, 7, 6]
 *     K = 3
 *     the function should return [9, 7, 6, 3, 8]. Three rotations were made:
 *     
 *     [3, 8, 9, 7, 6] -> [6, 3, 8, 9, 7]
 *     [6, 3, 8, 9, 7] -> [7, 6, 3, 8, 9]
 *     [7, 6, 3, 8, 9] -> [9, 7, 6, 3, 8]
 */

function solution(A, K) {
	if (A.length === 0)
		return A

	if (A.length === K) {
		return A;
	}

	if (K === 0) {
		return A;
	}

	for (let i = 0; i < K; i++) {
		let t = A[A.length -1]
		for (let j = A.length - 1 ; j > 0 ; j--) {
			A[j] = A[j -1];
		}
		A[0] = t;
	}
	return A
}

console.log('3, 8, 9, 7, 6 -> 3' , solution([3, 8, 9, 7, 6], 3));
console.log('0,0,0 -> 1' , solution([0,0,0], 1));
console.log('1,2,3,4 -> 4' , solution([1,2,3,4], 4));
console.log('-3, -8, 9, 7, - 6 -> 3' , solution([-3, -8, 9, 7, -6], 3));
