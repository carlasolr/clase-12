function dibujarTriangulo(altura) {
	const espacio = ' '
	const asterisco = '*'
	let triangulo = []

	for(let i = 0; i < altura; i++) {
		triangulo.push(asterisco.repeat(altura - i))

		for(let j = 0; triangulo[i].length; j++) {
			triangulo.push(espacio[i])
		}
	}
	return triangulo
}

console.log(dibujarTriangulo(5))


/*
At position 2, add the new items, and remove 1 item:

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1, "Lemon", "Kiwi");
*/