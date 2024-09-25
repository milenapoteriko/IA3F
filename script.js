const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [ //serve para abrir lista de perguntas
    {//abre o objeto das perguntas
        enunciado: "O que é Inteligencia Artificial?",
        alternativas: [
            {texto:"Uma simulação da inteligencia humana", afirmação: "afirmação da alternativa"},
            {texto:"Um novo tipo de planta", afirmação: "afirmacão da alternativa"}]
    },
    {
        enunciado: "A IA na saude é usada para",
        alternativas: [
            {texto:"substituir todos os médicos ", afirmação: "afirmacão da alternativa"},
            {texto:"Diagnosticar doenças mais rapidamente",afirmação: "afirmacão da alternativa"}]
    },
    {
        enunciado: "Assistentes virtuais como Siri ou alexa ajudam com:",
        alternativas: [
            {texto:"Programação avançada de software",afirmação: "afirmacão da alternativa"},
            {texto:"tarefas do dia a dia e controle de dispositivos",afirmação: "afirmacão da alternativa"}]   
    },
    {
        enunciado: "a evolução da IA pode resultar em:",
        alternativas: [
            {texto:"maior automação nas industrias",afirmação: "afirmacão da alternativa"},
            {texto:"Menos tecnologia no cotidiano das pessoas",afirmação: "afirmacão da alternativa"}]

    },
    {
        enunciado: "O aprendizado de maquina é",
        alternativas: [
            {texto:"uma maneira de ensinar maquinas",afirmação: "afirmacão da alternativa"},
            {texto:"um tipo de jogo",afirmação: "afirmacão da alternativa"}]

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
