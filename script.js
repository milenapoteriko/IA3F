const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [ //serve para abrir lista de perguntas
    {//abre o objeto das perguntas
        enunciado: "qual desses doces voce mais gosta?",
        alternativas: [
            {texto:"Brigadeiro",
            afirmação: "A IA é uma simulção de inteligencia humana"},

            {texto:"Um novo tipo de planta",
             afirmação: "A IA é um novo tipo de planta"}]
    },
    {
        enunciado: "A IA na saude é usada para",
        alternativas: [
            {texto:"Substituir todos os médicos ",
             afirmação: "A IA é utilizada na saúde para substituir todos os médicos"},

            {texto:"Diagnosticar doenças mais rapidamente",
            afirmação: "A IA é utilizada na saúde para diagnosticar doenças mais rapidamente "}]
    },
    {
        enunciado: "Assistentes virtuais como Siri ou Alexa ajudam com:",
        alternativas: [
            {texto:"Programação avançada de software",
            afirmação: "Assistentes virtuais como Siri e Alexa ajudam com progrmação avancada de software"},

            {texto:"Tarefas do dia a dia e controle de dispositivos",
            afirmação: "Assistentes virtuais como Siri ou Alexa ajudam com tarefas do dia a dia e com controle de dispositivos"}]   
    },
    {
        enunciado: "a evolução da IA pode resultar em:",
        alternativas: [
            {texto:"Maior automação nas industrias",
            afirmação: "A evolução da IA pode resultar em uma maior automação nas indústrias"},

            {texto:"Menos tecnologia no cotidiano das pessoas",
            afirmação: "A evolução da IA pode resultar em menos tecnologia para as pessoas"}]

    },
    {
        enunciado: "O aprendizado de maquina é",
        alternativas: [
            {texto:"Uma maneira de ensinar maquinas",
            afirmação: "O aprendizado de máquinas é uma maneira de ensinar máquinas"},

            {texto:"Um tipo de jogo",
            afirmação: "O aprendizado de máquinas é um tipo de jogo"}]

    }
]
let posicao = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(posicao >=perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[posicao];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = " ";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener ("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmação;
    historiaFinal += afirmacoes +" ";
    posicao++;
    mostraPergunta();
}
function mostraResultado(){
    caixaPerguntas.textContent = "Voce acredita que a IA é..."
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
