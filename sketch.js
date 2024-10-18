function setup() { //configuraçoes
  createCanvas(400, 400); //cria cenário
}

function draw() { //configuração do desenho
  background(220); //fundo
}let palavra; //deixa palavra

function setup() { //configuraçoes
  createCanvas(400, 400); //cria cenario

  palavra = palavraAleatoria(); //palavra aleatoria
  
}

function palavraAleatoria() { //função palavra aleatoria
  
  let palavras = ["Isabssss", "isaaaabyyy", "isaxxllaaaa"]; //palavras escolhidas
  
  return random(palavras);//retorno da palavra
}

function inicializaCores() {//iniciar cor
  background("lightpink");//cor da tela
  fill("green");//cor do texto
  textSize(64);//tamanhop do texto
  textAlign(CENTER, CENTER);//lugar da palavra
}

function palavraParcial(minimo, maximo) { //palavra maxima e minima
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);//seguir o mouse
  let parcial = palavra.substring(0, quantidade); //deixa palavra parcial
  return parcial;//retorno do texto
}

function draw() {//configuracões
  
  inicializaCores();//cores

  let texto = palavraParcial(0, width);//desenhar texto
    
  text(texto, 200, 200);//lugar do texto
  
}

function modoNoturno(horario) { //configuração modo noturno
  if (horario > 18) { //se horario maior que 18
    console.log("Você precisa ligar o modo escuro!"); //avisa que precisa ligar modo escuro
  } else {
    console.log("Modo noturno não é necessário neste momento."); // avisa essa mensagem
  }
}

modoNoturno(15); //modo noturno 15
modoNoturno(20); //modo noturno 20