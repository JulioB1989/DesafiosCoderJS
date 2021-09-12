
const div = document.querySelector('.container')

const url = `https://fedeperin-harry-potter-api.herokuapp.com/personajes`

fetch(url)
	.then(res => res.json())
	.then(data => {
		data.forEach(personajes => {
			/* console.log (personajes.imagen) */

			let nombre = document.createElement ('h3')
			nombre.innerHTML = personajes.personaje;
			let casa = document.createElement ('p')
			casa.innerHTML = personajes.casaDeHogwarts;
			const img = document.createElement('img');
            img.src = personajes.imagen;


			div.appendChild(img)
			div.appendChild (nombre)
			div.appendChild (casa)
									
		});

		/* console.log(data) */
	})
	.catch((e) => console.log(e))

