const doSomethingAsync = () => {
	return new Promise( (resolve, reject) => {
		if(false){
			setTimeout(() => resolve("Esto hace algo async"), 3000);
		} else{
			reject(new Error("Error"));
		};
	});
};

// async function doSomething(){

// }

const doSomething = async () => {
	const something = await doSomethingAsync();
	console.log(something);
};

// doSomething();






const API = 'https://rickandmortyapi.com/api/character/';
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData = (url_api) => {
  return new Promise((resolve, reject) => {
      
      const xhttp = new XMLHttpRequest();
      xhttp.open('GET', url_api, true);
      xhttp.onreadystatechange = (() => {
          if(xhttp.readyState === 4){
              (xhttp.status === 200) 
									? resolve(JSON.parse(xhttp.responseText))
									: reject(new Error('Error', url_api))
          }
      });
      xhttp.send();
  });
};

const anotherFunction = async () => {
    try{
				const data = await fetchData(API);
				console.log("Aqui inicia el llamado a la api");
				const character = await fetchData(`${API}${data.results[0].id}`);
				const origin = await fetchData(character.origin.url);
				
				console.log(data.info.count);
				console.log(character.name);
				console.log(origin.dimension);
    }catch (error){
        console.error(error)
    };
};

anotherFunction();