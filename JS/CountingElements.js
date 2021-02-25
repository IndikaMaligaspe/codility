function counting(A, m){
	let n = A.length;
	let count = new Array(m + 1).fill(0);
	for (let i = 0; i < n  ; i++){
		count[A[i]] += 1;
	}
	return count;
}

let A = [1,3,2,1,2,8];

console.log(counting(A, 100));

//Example
/*
 * You are given an integer m (1 � m � 1 000 000) and two non-empty, zero-indexed
 * arrays A and B of n integers, a0, a1, . . . , an−1 and b0, b1, . . . , bn−1 respectively (0 � ai, bi � m).
 *
 * The goal is to check whether there is a swap operation which can be performed on these
 * arrays in such a way that the sum of elements in array A equals the sum of elements in
 * array B after the swap. By swap operation we mean picking one element from array A and
 * one element from array B and exchanging them
 *
 */

function solution(A, B, m){
	let sumA = A.reduce((a,b) => a + b, 0);
	let sumB = B.reduce((a,b) => a + b, 0);

	let diff = sumB - sumA;

	if (diff % 2 === 1 ) 
		return false;

	diff = Math.floor(diff / 2);
	
	console.log('sumA -> ',sumA, 'sumB ->', sumB, diff);
    let c = counting(A, m);
	let n = A.length;
	for (let i =0; i < n; i++){
		if ((0 <= B[i] - diff) && (B[i] - diff <= m) && (c[B[i] - diff] > 0)) {
			console.log(i , B[i]);
			return true;
		}
	}
	return false;
}




let B = [4,2,6,1,5,7];
let m = 100;

console.log(`${A}, ${B}, ${m} -> `,solution(A,B,m));

B = [4,2,8,1,5,7];
console.log(`${A}, ${B}, ${m} -> `,solution(A,B,m));

