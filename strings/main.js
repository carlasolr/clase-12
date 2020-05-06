function contarEspacios(palabra) {
	let espacios = 0
	for(let i = 0; i < palabra.length; i++) {
		if(palabra[i] == ' ') {
			espacios = espacios + 1
		}
	}

	return espacios
}

console.log(contarEspacios('tengo muchas ganas de dormir')) //4

//////////

function buscarTweets(mensajes, texto) {
	tweets = []
	for(let i = 0; i < mensajes.length; i++) {
		if(mensajes[i].includes(texto)) {
			tweets.push(mensajes[i])
		}
	}
	return tweets
}


console.log(buscarTweets(['mi nombre es carla', 'tu nombre es feo', 'lo anterior es mentira'], 'nombre'))

///////////////

function censurarTexto(frase, expresionesCensuradas) {
	fraseModificada = []
	asteriscos = '*'
	for(let i = 0; i < expresionesCensuradas.length; i++) {
		if(frase.includes(expresionesCensuradas[i])) {
			let reemplazo = frase.replace(expresionesCensuradas[i], asteriscos.repeat(expresionesCensuradas[i].length))
			fraseModificada.push(reemplazo)
		}
	}
	return fraseModificada
}

console.log(censurarTexto('hola me llamo carla sol', ['carla', 'sol']))

/*no me convence porque si incluyera las dos palabras de la lista
retornaria dos frases modificadas y no solo una frase con ambos textos censurados*/
