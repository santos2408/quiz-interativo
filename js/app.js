const form = document.querySelector('.quiz-form')
const popup = document.querySelector('.popup-wrapper')
const popupContent = document.querySelector('.popup-content')

const popupTitleElement = document.createElement('h2')
const popupScoreElement = document.createElement('p')

const correctAnswers = ['A', 'B', 'A', 'A', 'B']

const insertPopupScoreInfo = (titleMessage, score) => {
   popupTitleElement.textContent = titleMessage
   popupScoreElement.textContent = `${score}%`
   popupScoreElement.classList.add('popup-score')

   popupContent.insertAdjacentElement('afterbegin', popupScoreElement)
   popupContent.insertAdjacentElement('afterbegin', popupTitleElement)
}

const showInfoAccordingScore = score => {
   if (score === 100) {
      insertPopupScoreInfo('Parabéns, você acertou todas!', score)
      return
   }

   if (score > 0 && score < 100) {
      insertPopupScoreInfo('VOCÊ ACERTOU', score)
      return
   }

   insertPopupScoreInfo('Você errou todas =(', score)
}

const getUserAnswers = question => {
   const userAnswers = [
      question.inputQuestion1.value,
      question.inputQuestion2.value,
      question.inputQuestion3.value,
      question.inputQuestion4.value,
      question.inputQuestion5.value
   ]
   
   return userAnswers
}

const checkCorrectAnswers = userAnswers => {
   let score = 0

   userAnswers.forEach((userAnswer, index) => {
      if (userAnswer === correctAnswers[index]) {
         score += 20
         return
      }
   })

   return score
}

const closePopup = event => {
   const elementClicked = event.target
   const classesThatClosePopup = ['popup-close', 'popup-button', 'popup-wrapper']

   if ( classesThatClosePopup.some(className => elementClicked
         .classList[0] === className)) {
      popup.style.display = 'none'
   }
}

const showTotalScore = event => {
   event.preventDefault()

   const question = event.target

   const userAnswers = getUserAnswers(question)
   const correctAnswers = checkCorrectAnswers(userAnswers)

   showInfoAccordingScore(correctAnswers)
   
   popup.style.display = 'block'
}


form.addEventListener('submit', showTotalScore)
popup.addEventListener('click', closePopup)