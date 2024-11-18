alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 500; // Defina o valor máximo para o número secreto
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1); // Número secreto definido
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = Number(prompt(`Escolha um número entre 1 e ${numeroMaximo}`)); // Converte o chute para número
    // Verifica se o chute é igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (numeroSecreto > chute) {
            alert(`O número secreto é maior que ${chute}`);
        } else {
            alert(`O número secreto é menor que ${chute}`);
        }
        // Incrementa o contador de tentativas
        tentativas++;
    }
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);



//if (tentativas > 1) {
   // alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
//}else{
   // alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
//}
