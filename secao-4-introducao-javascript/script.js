const a = 45;
const b = 33;
const c = 88;
let resultado;

if (a >= 33 && a >= 88) {
    resultado = 45;
}
else if (b >= 45 && b >= 88) {
    resultado = 33;
}
else if(c >= 45 && c >= 33) {
    resultado = 88
}
else {
    resultado = 'Inesperado'
}
console.log(resultado)