function solution(X, A) {
   
	let countArr = new Array(X + 1);
	countArr.fill(0);	
	let count = 0;
	for (let i = 0; i< A.length; i++){
		let elem = A[i]
		let index = i;
		if (countArr[elem] == 0){
			countArr[elem] = 1;
			count +=1;
		}
		//console.log(`DEBUG: elem = ${elem} , i =${index}, count = ${count}, X = ${X}`);
		if (count == X) {
			return index
		}
	}
	return -1;
}

let A = new Array(1,2,1,4,2,3,5,4);
let X = 5
console.log(` from ${A} , X = ${X} = ${solution(X, A)}`);
let A1 = [1];
A1[0]=1;
X = 5
console.log(` from ${A1} , X = ${X} = ${solution(X, A1)}`);
let A2 = [1];
A2[0] = 1
X = 1
console.log(` from ${A2} , X = ${X} = ${solution(X, A2)}`);
