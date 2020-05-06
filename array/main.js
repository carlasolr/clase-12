function duplicarNumeros(listaNumeros) {
	resultado = []
	for(let i = 0; i < listaNumeros.length; i++) {
		resultado.push(listaNumeros[i] * 2)
	}
	return resultado
}

console.log(duplicarNumeros([1, 3, 5, 7])) //2, 6, 10, 14

///////////

function multiplicar(listaDeNumeros) {
	producto = 1
	for(let i = 0; i < listaDeNumeros.length; i++) {
		producto = producto * listaDeNumeros[i] 
	}
	return producto
}

console.log(multiplicar([1, 2, 3, 6])) // 36

///////////

function calcularPromedio(otraListaDeNumeros) {
	promedio = 0
	for(let i = 0; i < otraListaDeNumeros.length; i++) {
		promedio = (promedio + otraListaDeNumeros[i])
	}
	return promedio / otraListaDeNumeros.length
}

console.log(calcularPromedio([1, 2, 4, 7, 6])) //4