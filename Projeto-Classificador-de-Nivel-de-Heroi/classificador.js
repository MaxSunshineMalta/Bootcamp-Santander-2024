let nomeHeroi = "Max";
let qtdExpHeroi = 5001;
let nivel;

if(qtdExpHeroi < 1000){
    nivel = "Ferro";
}else if(qtdExpHeroi<= 2000){
    nivel = "Bronze";
}else if(qtdExpHeroi<= 5000){
    nivel = "Prata";
}else if(qtdExpHeroi<= 7000){
    nivel = "Ouro";
}else if(qtdExpHeroi<= 8000){
    nivel = "Platina";
}else if(qtdExpHeroi<= 9000){
    nivel = "Ascendente";
}else if(qtdExpHeroi<= 10000){
    nivel = "Imortal";
}else if(qtdExpHeroi >= 10001){
    nivel = "Radiante";
}

console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel);