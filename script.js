const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [ //serve para abrir lista de perguntas
    {//abre o objeto das perguntas
        enunciado: "O que é Inteligencia Artificial?",
        alternativas: ["Uma simulação da inteligencia humana","Um novo tipo de planta"]
    },
    {
        enunciado: "A IA na saude é usada para",
        alternativas: ["substituir todos os médicos ","Diagnosticar doenças mais rapidamente"]
    },
    {
        enunciado: "Assistentes virtuais como Siri ou alexa ajudam com:",
        alternativas: ["Programação avançada de software","tarefas do dia a dia e controle de dispositivos"]   
    },
    {
        enunciado: "a evolução da IA pode resultar em:",
        alternativas: ["maior automação nas industrias","Menos tecnologia no cotidiano das pessoas"]

    },
    {
        enunciado: "O aprendizado de maquina é",
        alternativas: ["uma maneira de ensinar maquinas","um tipo de jogo"]

    }
]

let posicao = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[posicao];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas(){
  for(const alternativa of perguntaAtual.alternativas){
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa;
    caixaAlternativas.appendChild(botaoAlternativas);
  }
    

}


mostraPergunta();