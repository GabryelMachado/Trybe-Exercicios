let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0

for (let i = 0; i < numbers.length; i += 1 ) {
    resultado += numbers[i]
}
console.log(resultado / numbers.length);

if (resultado / numbers.length > 20) {
    console.log('Valor maior que 20')
}
else {
    console.log('Valor menor que 20')
}