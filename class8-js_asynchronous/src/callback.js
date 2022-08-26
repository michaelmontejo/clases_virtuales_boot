function sum(num1, num2){
	return num1 + num2;
};

function calculate(num1, num2, callback){
	return callback(num1, num2);
};

// console.log( calculate(3, 4, sum) );


let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/';
const fetchData = (url_api, callback) => {
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true);
    xhttp.onreadystatechange = (event) => {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error('Error ' + url_api);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
};

console.log("inicia el llamado");
fetchData(API, (error, dato) =>{
	if(error) return console.log(new Error(error));
		for (let index = 0; index < dato.results.length; index++) {
			console.log( dato.results[index].image );
		}
});

// fetchData(API, (error1, data1) => {
//     if (error1) return console.error(error1);
//     fetchData(API + data1.results[0].id, (error2, data2) => {
//         if (error2) returnconsole.error(error2);
//         fetchData(data2.origin.url, (error3, data3) => {
//             if (error3) returnconsole.error(error3);
//             console.log(data1.info.count);
//             console.log(data2.name);
//             console.log(data3.dimension);
//         });
//     });
// });