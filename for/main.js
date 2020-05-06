function imprimirNumeros(numero) {
	for(let i = 0; i <= numero; i++) {
		console.log(i)
	}
}

console.log(imprimirNumeros(5))

/////////

function imprimirOtrosNumeros(numeroDesde, numeroHasta) {
	for(let i = numeroDesde + 1; i < numeroHasta; i++) {
		if(numeroDesde < numeroHasta) {
			console.log(i)
		}
	}
}

console.log(imprimirOtrosNumeros(5, 10))