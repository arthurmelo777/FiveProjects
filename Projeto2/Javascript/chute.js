var number_selected = null;

function gerar(){
  return Math.floor(Math.random() * 1000);
}

function chutar(numero_chutado){
    number_selected = gerar();
    if(number_selected == numero_chutado) window.alert("Parabéns, seu vagabundo!!😍😍<br>Você conseguiu adivinhar o número, agora ganhe um belo pau no seu cu.");
    else if(number_selected < numero_chutado) window.alert("Tá mais pra baixo, seu burro.");
    else window.alert("Tá mais pra cima, seu jumento sem pau.");
}
