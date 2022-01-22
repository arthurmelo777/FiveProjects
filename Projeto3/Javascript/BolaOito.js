const respostas = [
  'Não sei não. Isso me cheira a tráfico ilegal de humanos.',
  'Pode ir fundo, aproveita e tome no seu cu junto.',
  'Tudo depende do quanto você quer comer alguém.',
  'De acordo com o famoso filósofo Platão: "Vá se arrombar pra lá"'
];

function gerar_resposta(){
  window.alert(repostas[Math.floor(Math.random() * respostas.length-1)]); 
}
