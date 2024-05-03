let vitorias = 111;
let derrotas = 11;
let saldoVitorias = vitorias - derrotas;
let nivel = calcularNivel(saldoVitorias);

console.log(`O Herói tem de saldo de ${saldoVitorias} vitórias e está no nível de ${nivel}`);

function calcularNivel(saldo){
    if(saldo < 10){
        return "Ferro";
    }else if(saldo <= 20){
        return "Bronze";
    }else if(saldo <= 50){
        return "Prata";
    }else if(saldo <= 80){
        return "Ouro";
    }else if(saldo <= 90){
        return "Diamante";
    }else if(saldo <= 100){
        return "Lendário";
    }else if(saldo >= 101){
        return "Imortal";
    }
}