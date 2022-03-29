const form = document.querySelector('.quiz-form')
const popup = document.querySelector('.popup-wrapper')
const popupContent = document.querySelector('.popup-content')

const popupTitleElement = document.createElement('h2')
const popupScoreElement = document.createElement('p')

const correctAnswers = ['C', 'D', 'A', 'C', 'B']

const getUserAnswers = () => {
  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value,
    form.inputQuestion5.value
  ]
  return userAnswers
}

const getScore = userAnswers => {
  let score = 0

  userAnswers.forEach((userAnswer, index) => {
    if (userAnswer === correctAnswers[index]) {
        score += 20
    }
  })
  return score
}

const animateScoreCounter = score => {
  let counter = 0
  
  const timer = setInterval(() => {
    if (counter === score) {
      clearInterval(timer)
    }
    
    popupScoreElement.textContent = `${counter}%`
    counter++
  }, 10)

  scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
}

const showScorePopup = (scoreMessage, score) => {
  popupTitleElement.textContent = scoreMessage
  popupScoreElement.classList.add('popup-score')
  
  animateScoreCounter(score)

  popupContent.insertAdjacentElement('afterbegin', popupScoreElement)
  popupContent.insertAdjacentElement('afterbegin', popupTitleElement)
  popup.style.display = 'block'
}

const getScoreMessage = score => ({
  0: 'Você errou todas =(',
  100: 'Parabéns, você acertou todas!' 
})[score] || `VOCÊ ACERTOU`

const showTotalScore = event => {
  event.preventDefault()

  const userAnswers = getUserAnswers()
  const score = getScore(userAnswers)
  const scoreMessage = getScoreMessage(score)

  showScorePopup(scoreMessage, score)
}

const closePopup = event => {
  const clickedElement = event.target
  const classesThatClosePopup = ['popup-close', 'popup-button', 'popup-wrapper']
  const clickedElementHasClass = classesThatClosePopup.includes(clickedElement.classList[0])

  if (clickedElementHasClass) {
    popup.style.display = 'none'
  }
}

form.addEventListener('submit', showTotalScore)
popup.addEventListener('click', closePopup)