const respostasCertas = ["B", "A", "C", "D"]
const form = document.querySelector(".quiz-form")
const mensagem = document.querySelector("#pontuacao")

const obterRespostasDadas = () => {
  return [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value
  ]
}

const calculaPontuacao = function (respostasDadas) {
  let pontuacao = 0

  respostasDadas.forEach((respostaDada, index) => {
    if (respostaDada === respostasCertas[index]) {
      pontuacao += 25
    }
  })

  return pontuacao
}

const submitQuiz = function (event) {
  event.preventDefault()

  const respostasDadas = obterRespostasDadas()

  const total = calculaPontuacao(respostasDadas)

  mensagem.textContent = `Você acertou ${total}% das perguntas`
}


form.addEventListener("submit", submitQuiz)