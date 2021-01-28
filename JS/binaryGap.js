/*
 * Find the binary gap of a number
 * N is an integer within the range [1..2,147,483,647]
 * 10001 should give 3
 * 1000001001 -> should give 5
 * 10000 -> should give 0
 * 000001 -> should give 0
 */

//Convert to binary
function toBinary(num) {
    return (num >>>0).toString(2);
}


function solution(N) {
    let binary = toBinary(N)
	let start = false;
	let count = 0;
	let maxCount =0;
    let splits = binary.split('');
    splits.map((sp) => {
		
		if (!start && sp === '1') {
			start = true;
		} else if (start && sp === '1'){
			if (maxCount <= count) {
				maxCount = count;
			}
            count = 0
		} else if (start && sp === '0') {
			count ++
		}
	})
    return maxCount;
}

console.log(toBinary(1), solution(1));
console.log(toBinary(15), solution(15));
console.log(toBinary(1090), solution(1090));
console.log(toBinary(3204809), solution(3204809));
console.log(toBinary(287909000), solution(287909000));
console.log(toBinary(0), solution(0));



