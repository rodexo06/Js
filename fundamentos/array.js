const valores = [7.7, 8.8, 8.1]
valores[10] = 2
console.log(valores[0], valores [2], valores)
console.log(valores.length)
valores.push({id: 3}, false, null, "teste") // isso vc ta misturando
console.log(valores)
console.log(valores.pop())
delete valores[0]
console.log(valores)