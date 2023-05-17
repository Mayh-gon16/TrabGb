nomes = [];
valores = "";
pontuacao = 0;
rodada = 1;
tempo = 1;

 txtNomes = document.querySelector("#nomes");
 btn = document.querySelector("#iniciar");

 btn.addEventListener("click",function(){
    valores = txtNomes.value;
    nomes = valores.split(" ");
    txtNomes.value = "";
    txtNomes.disabled = true;
    btn.disabled = true;
    setTimeout(function(){
        jogar();
    }, tempo);
 })

 function jogar() {
    numeroAleatorio = Math.floor(Math.random() * nomes.length) + 1;
    palpite = prompt(`Digite o ${numeroAleatorio}º nome da lista:`);

    var nomeCorreto = nomes[numeroAleatorio - 1];
    var mensagem;
    if (palpite === nomeCorreto) {
        pontuacao++;
        mensagem = "Parabéns, você acertou";
    } else {
        pontuacao--;
        mensagem = `Ops, você errou! O nome correto era ${nomeCorreto}.`;
    } if(pontuacao < 0){
        pontuacao = 0;
    } 
    alert(mensagem + ` Sua pontuação é ${pontuacao}.`);
    rodada++;
    if (rodada<=5) {
        jogar();
    } else {
        txtNomes.disabled = false;
        btn.disabled = false;
    }
 }