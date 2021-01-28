/*
Consider the balanced parentheses problem.
You have a bracket sequence made up of opening '(' and closing ')' parentheses. You must check if this bracket sequence is balanced.
A bracket sequence is considered balanced if for every prefix of the sequence, the number of opening brackets is greater than or equal to the number of closing brackets, and the total number of opening brackets is equal to the number of closing brackets.
*/

let top = -1;

function isEmpty(stack) {
	if (top === -1) {
		return true;
	}
	return false;
}

function push (stack, elem, n) {
	if (top === n - 1) {
		console.log("Stack is full");
		return false;
	} else {
		top = top + 1;
		stack[ top ] = elem;
		return true;
	}
}

function pop (stack, n) {
	if ( isEmpty() ) {
		console.log("stack is empty");
		return false;
	} else {
		top = top - 1;
		return true;
	}
}



function check(str, length, stack) {
	if (length === 0) {
		return "Empty string";
	}
    
	for (let i = 0; i < length; i++ ){
		if (str[i].trim() === '(') {
			push (stack, 1, length)
		} else if (str [i].trim() === ')') {
			if(!pop (stack)) {
			   console.log("Not Balanced");	
			   return
			}
		}
	}
	
	if (isEmpty(stack)) {
		console.log(" Balanced ");
	} else {
		console.log(" Not Balanced ");
	}
}


const str1 = ['(' , 'a' , '+', ' ( ', 'b ' , '-' , ' c' ,')' , ' ) '] ;
const str2 = [ '(' , '(' , 'a' , ' + ' , ' b' , ')' ] ;
let stack  = [ 15 ] ;

top = -1
check(str1, str1.length, stack)
top = -1
check(str2, str2.length, stack)


