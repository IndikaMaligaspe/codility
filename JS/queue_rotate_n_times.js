let front=0;
let rear = 0;
let size = 10;


function enqueue(queue, element) {
	if (rear === size) {
		console.log( "Overflow ");
		return false;
	} else {
		queue[rear] = element;
		rear +=1;
		return true;
	}
}

function dequeue(queue) {
	if (rear === front) {
		console.log(" Empty ");
		return false;
	} else {
		queue[front] = 0
		front +=1;
		return true;
	}
}

function frontElement(queue) {
	return queue[front];
}

function queueSize(queue) {
   return rear - front;
}



function isEmpty(queue) {
   return (front === rear);
}

function rotateString(str, n) {
	if (n === 0) 
		return 0;
	if (str.length === 0)
		return 0;

	let queue   =  new Array(size);
	for (let i = 0; i< str.length; i++ ){
	   enqueue(queue, str[i])
	}

	rear = str.length;
	
	for (let i = 0; i< n; i++ ) {
		enqueue(queue, frontElement(queue));
		dequeue(queue)
	}
		return queue;
	}  

let str1 = 'abcd';
let N = 3;
let newStr = rotateString(str1, N).slice(front,rear);
console.log(newStr);

