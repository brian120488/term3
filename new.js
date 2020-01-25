let objectArray = new Array(10);

objectArray.map(function(obj) {
	obj = {
		name: "hi"
	}
	console.log(obj)
})

/*
for(let i=0; i<10; i++) {
	objectArray[i] = {
		name: "hi"
	}
}
*/
console.log(objectArray)