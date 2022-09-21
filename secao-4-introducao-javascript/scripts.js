let pessoaCandidata = 85;

if (pessoaCandidata >= 80) {
    console.log("Parabéns, você foi aprovado(a)");
}
else if (pessoaCandidata < 80 && pessoaCandidata >= 60) { 
    console.log("Você está na nossa lista de espera");
}
else if (pessoaCandidata < 60){
    console.log("Você foi reprovado");
}
else {
    console.log("Tente novamente em 06 meses");
}