console.log("iniciando llamado a la api");
fetch( 'https://swapi.dev/api/people' )
	.then(response => response.json())
  .then(data => {
		for (let index = 0; index < 10; index++) {
			const container = document.getElementById("container");
			const nodeText = document.createTextNode(data.results[ index ].name);
			container.appendChild( nodeText );
		};
	});