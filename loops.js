//loops

const arr = [1, 2, 3]

for (let i = 0; i < arr.length; i++){
	console.log(arr[i]);	
}

const arr = [1, 2, 3 ,4]
for (let i=0; i < arr.length; i++);{
	if (arr[i] % 2 === 0){
		console.log('it is even');
	
}
	else{
		console.log('it is odd')};		}

const arr = [1, 2, 3, 4]


for (let i=0; i < 4; i++){
	console.log(arr.shift(i) + 'is leaving the array');
}

//looping through objects (objects keys)
//for in loops

const turtle = {
	name : 'marvin',
	age: 102,
	hungry: true
};

for (let temp in turtle){
	console.log(turtle[temp]);
}


////////write a for loop.  add on to the message KOWABUNGA 
////////but also add KOWABUNGA to the other temps 

const turtle = {
	name : 'marvin',
	age: 102,
	hungry: true
};

for (let temp in turtle){
	turtle[temp]= turtle[temp] + " KOWABUNGA";
	console.log(temp +":  " +   turtle[temp]) 
}








