function constructorDePromesa( resolvio, rechazo){
	const number = 0;
	if(number <= 0){
		resolvio("si se resolvio");
	} else{
		rechazo("no se cumplio");
	};
};

function algoVaAPasar(){
	let promesa = new Promise( constructorDePromesa );
	return promesa
};

function cuandoSeCumple( siSeLLegaACumplir ){
	console.log( `${siSeLLegaACumplir} esto que llamaste`);
}

function cuandoNoSeCumple( noSeCumplio ){
	console.log(noSeCumplio);
};

// algoVaAPasar().then( cuandoSeCumple ).catch( cuandoNoSeCumple );





let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function fetchData(url_api){
  const promise = new Promise((resolve, reject) => {    
      const xhttp = new XMLHttpRequest();
      xhttp.open('GET', url_api, true);
      xhttp.onreadystatechange = (() => {
          if(xhttp.readyState === 4){
              if(xhttp.status === 200){
                  resolve(JSON.parse(xhttp.responseText))
							} else{
									reject(new Error('Error', url_api))
							}
          };
      });
      xhttp.send();
  });
  return promise;
};

// function istDone( data ){
//   console.log(data);
// };

function notDone( error ){
  console.log(error);
};

console.log("inicia el llamado a la api");
fetchData("https://rickandmortyapi.com/api/character")
  .then( ( data ) =>{
    console.log( data.info.count );
    return fetchData("https://rickandmortyapi.com/api/character/1")
  })
  .then( ( data ) => {
    console.log( data.name );
    return fetchData( "https://rickandmortyapi.com/api/location/1")
  })
  .then(( data ) => {
    console.log( data.dimension )
  })
  .catch( notDone );