let nome = 'Thor';  
let quantExp = 15000;
let nivel;

if(quantExp <= 1000) {
    nivel = 'Ferro';
} else if(quantExp > 1000 && quantExp <= 2000) {
    nivel = 'Bronze';
} else if(quantExp > 2000 && quantExp <= 5000) {
    nivel = 'Prata';
} else if(quantExp > 6000 && quantExp <= 7000) {
    nivel = 'Ouro';
} else if(quantExp > 7000 && quantExp <= 8000) {
    nivel = 'Platina';
} else if(quantExp > 8000 && quantExp <= 9000) {
    nivel = 'Ascendente';
} else if(quantExp > 9000 && quantExp <= 10000) {
    nivel = 'Imortal';
} else if(quantExp > 10000) {
    nivel = 'Radiante';
}else{
    console.log('O XP em questão é inválido. Procure mais informações com o GM do jogo');
}
console.log('O Herói de nome ' + nome + ' está no nível ' + nivel);