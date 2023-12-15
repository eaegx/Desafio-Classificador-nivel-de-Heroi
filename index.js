let nomedoHeroi = "Mago das Estrelas"
let quantidadeDeExperiênciaXP = "9010"

let nivel;

if (quantidadeDeExperiênciaXP < 1000) {
    nivel = "Ferro";
} else if (quantidadeDeExperiênciaXP >= 1001 && quantidadeDeExperiênciaXP <= 2000) {
    nivel = "Bronze";
} else if (quantidadeDeExperiênciaXP >= 2001 && quantidadeDeExperiênciaXP <= 5000) {
    nivel = "Prata";
} else if (quantidadeDeExperiênciaXP >= 6001 && quantidadeDeExperiênciaXP <= 7000) {
    nivel = "Ouro";
} else if (quantidadeDeExperiênciaXP >= 7001 && quantidadeDeExperiênciaXP <= 8000) {
    nivel = "Platina";
} else if (quantidadeDeExperiênciaXP >= 8001 && quantidadeDeExperiênciaXP <= 9000) {
    nivel = "Ascendente";
} else if (quantidadeDeExperiênciaXP >= 9001 && quantidadeDeExperiênciaXP <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

console.log(`O Herói de nome ${nomedoHeroi} está no nível de ${nivel}`)
