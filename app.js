const respostasCertas = ["B", "A", "C", "D"]
const form = document.querySelector(".quiz-form")
const mensagem = document.querySelector("#pontuacao")

const obterRespostasDadas = () => {
  const respostasDadas = []

  for (let i = 1; i <= 4; i++) {
    respostasDadas.push(form[`inputQuestion${i}`].value)
  }

  return respostasDadas
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

const animaPontuação = pontuacao => {
  let pontos = 0
  mensagem.setAttribute("style", "height:80px")

  const exibePontuacao = () => {
    mensagem.textContent = `Você acertou ${pontos++}% das perguntas`
    if (pontos > pontuacao) {
      clearInterval(id)
    }
  }

  const id = setInterval(exibePontuacao, 50)
}

const submitQuiz = function (event) {
  event.preventDefault()
  const respostasDadas = obterRespostasDadas()
  const total = calculaPontuacao(respostasDadas)

  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  animaPontuação(total)
}

form.addEventListener("submit", submitQuiz)