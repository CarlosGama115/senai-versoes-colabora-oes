//variaveis do sistema
let idadeDoParticipante = 19
let dataDoEvento = 01/02/22
let totalDeParticipantes = 5
let participantes = ["d","e","f","g","h"]
const palestrantes = ["A","B","C"]



//solicitar data de nacimento do participante
console.log("Digite sua data de nascimento:")



//verificar a idade do participante
if (idadeDoParticipante >= 18) {
    console.log("Digite a data do evento:")
} else {
   console.log("Cadastro não realizado! Evento permitido apenas para maiores de 18 anos.") 
}



//validar a data do evento
if ((new Date() < dataDoEvento)) {
    console.log("Cadastro não realizado! Data inválida.")
} else {
    console.log("Verificando quantidade de inscritos, aguarde...")
}



//verificar quantidade de inscritos no evento
if (totalDeParticipantes > 100) {
    console.log("Cadastro não realizado! Nº de Participantes excedido.")
} else {
    console.log("Cadastro realizado com sucesso! Veja a lista de participantes:")
}    



// listar Palestrantes e participantes do evento
console.log("Palestrantes:")
console.log(palestrantes)
console.log("Participantes")
console.log(participantes)