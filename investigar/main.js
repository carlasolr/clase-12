function dibujarTriangulo(altura) {
	const espacio = ' '
	const asterisco = '*'
	let triangulo = []

	for(let i = 0; i < altura; i++) {
		triangulo.push(asterisco.repeat(altura - i) + espacio.repeat(i + 1))
	}
	return triangulo
}

console.log(dibujarTriangulo(5))

