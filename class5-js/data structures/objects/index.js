

const person = {
	name: "Juan",
	lastName: "Rodriguez",
	age: 15,
	phoneNumber: "3001234567",
	email: "juan@gmail.com",
};

person.name = "Michael"

const person2 = person;

const book = {
	title: "",
	author: "",
	isbn: "",
	publishyear: ""
};

const course = {
  name: 'JavaScript'  
};
const grade = {
  score: 92  
};
const finalResult = Object.assign(course,grade);

