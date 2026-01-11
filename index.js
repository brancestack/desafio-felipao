
//variáveis definidas.

let playerValorant = "brancestack";
let xp = 15000;
let nivel = "";

// laço de repetição que o exercicío propôs.
for (let i = 0; i < 1; i++) {
// aqui eu preferi utilizar switch-case para deixar o código mais estruturado e direto.
    switch (true) {
        case xp < 1000:
            nivel = "Ferro";
            break;

        case xp >= 1001 && xp <= 2000:
            nivel = "Bronze";
            break;

        case xp >= 2001 && xp <= 5000:
            nivel = "Prata";
            break;

        case xp >= 5001 && xp <= 7000:
            nivel = "Ouro";
            break;

        case xp >= 7001 && xp <= 8000:
            nivel = "Platina";
            break;

        case xp >= 8001 && xp <= 9000:
            nivel = "Ascendente";
            break;

        case xp >= 9001 && xp <= 10000:
            nivel = "Imortal";
            break;

        default:
            nivel = "Radiante";
    }
}

console.log(`O Herói de nome ${playerValorant} está no nível ${nivel}`);
