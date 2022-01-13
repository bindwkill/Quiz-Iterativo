const respostasCertas = ["A", "A", "B", "B"]
const form = document.querySelector(".quiz-form")
const mensagem = document.querySelector("#pontuacao")

form.addEventListener("submit", event => {
  event.preventDefault()
  let total = 0
  const respostasDadas = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value
  ]

  respostasDadas.forEach((resposta, index) => {
    if (resposta === respostasCertas[index]) {
      total += 25
    }
  })

  mensagem.textContent = `Você acertou ${total}% das perguntas`
})