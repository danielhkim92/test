const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

for (let i = 0; i < arr.length; i++){
	if (arr[i] % 2 === 0)
	console.log(arr[i] + ' it is even');	
}
/////////////	
const i = [1,2,3,4,5,6]
var myBagofBeans = 50
 for (let i = 0; i > 100; i++){	
	if (i % 2 === 0)
	console.log(i + myBagofBeans);	
}
/////////////


const arrayOfStringsRememberIcanNameMyVariablesAnythingIWant = ['cheese', 
'pepperoni', 'sausage', 'coca cola', 'lemonade', 'dough', 'beer', 'wine',
 'ranch', 'blue cheese', 'bbq sauce'];

const sauces = ['ranch', 'blue cheese', 'bbq sauce']
const drinks = ['coca cola', 'lemonade', 'beer', 'wine']
const food = ['cheese', 'sausage', 'dough', 'pepperoni']

/////
const food = ['bun', "jalepeno cheddar", "elk", "beef", "1954 ford mustang", 1.14, 1.23, 'hot dog', "gary clark jr", " I'lll never fall in love again", "mustard", "ketchup", 30, 50, 80, "grilled onions", "egg", "Dr. Suess"]
const dinner = ['bun', 'jalapeno cheddar', 'beef', 'mustard', 'ketchup', 'grilled onions', 'egg']
food.push.dinner('bun', 'jalapeno cheddar', 'beef', 'mustard', 'ketchup', 'grilled onions', 'egg')
////////

const colorObjects = {
	red: 'red',
	blue: 'blue',
	cyan: 'cyan'};

for (let colors in colorObjects)
    console.log(colorObjects[colors]);


const seinfeld = {
	cosmo: "kramer", 
	jerry: "Seinfeld", 
	george: "constanza", 
	elaine: "bennis"}

for (let friends in seinfeld)
		console.log(friends + ": " + seinfeld[friends]);


const profile = {
	name: "Elon Musk", 
	occupation: "space man", 
	hobbies: ["paypal", "space X", "rocket science"]};

for (let info in profile)
	console.log(info + ':  ' + profile[info]);
/////////

const oldTime = ["benton flippen", "carter family", "roscoe Holcomb", "gus cannon", "Tommy Jarrell"];


oldTime.forEach((el) => {
    console.log(el);
});

/////
///// this one has assigned values to the strings

const sandwhich = {
	name: "sunday morning special", 
	bread: "ciabatta", 
	cheese: "pepper jack", 
	green: "arugala", 
	redStuff: "cherry tomatoes", 
	heated: true};

for (let yum in sandwhich)
	console.log(yum + ":  " + sandwhich[yum]);

////

const zeppelin = ["In through the out door", "Zep 1", "Zep 2", "Zep3", "Zep4", "Physical Graffiti"]

zeppelin.forEach((el) => {
    console.log(el);
});

























