function startGame(){
  var end = false;
  
  while(!end){
    var resposta = window.prompt("Você está em uma sala escura com uma lampada de teto iluminando o centro da sala. Ali há duas cadeiras: uma tem bolo e a outra tem um pau. O que você faz? (Digite seu destino)\nSentar no bolo\nSentar no pau").toLowerCase();  
    if(resposta == "sentar no pau"){ 
      alert("Você sentou no pau 😈. Atingiu seu ponto G tanto no canal anal quanto no paladar.\nGood Ending");
      end = true;
    }
    else if(resposta == "sentar no bolo"){ 
      alert("Você sentou no bolo. Agora você está todo melado com o bolo, mas pelo menos pode se deliciar no pau.\nNeutral Ending");
      end = true;
    }
    else if(resposta.includes("gritar") || resposta.includes("quebrar")){
      alert("O quê?!? Porque você fez isso? Infelizmente, você acordou um ogro que estava um ponto escuro dessa sala e não, você não é um globlin slayer, por isso você sofrerá as consequências no seu ânus...\nBad Ending");
      end = true;
    }
    else alert("Você digitou errado, seu corno!");
  }
}
