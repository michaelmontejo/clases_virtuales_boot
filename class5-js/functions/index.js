
function sayHello(){
	console.log("hello world!");
};

sayHello();

const saySomething = () => {
	console.log("something");
};

const sayBye = function(){
	console.log("bye bye");
};

//Parameters
function sayName(name){
	console.log("My name is ", name);
};

function introduceYourself(name = "-", age = 0){
	console.log("Hello, My name is ", name, " I am ", age, " years old");
};

function count(limit){
	for (let index = 0; index <= limit; index++) {
		console.log(`this is ${index}`)		
	};
};

function sumarize(limit){
	let sumarizer = 0;
	for (let index = 0; index <= limit; index++) {
		sumarizer = sumarizer + index;
		console.log(`current number ${index} sum: ${sumarizer}`);
	}
}
