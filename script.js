import { startConfetti, stopConfetti, removeConfetti } from './confetti.js'
const playerScoreElement = document.getElementById('player_score')
const playerChoiceElement = document.getElementById('player_choice')
const computerScoreElement = document.getElementById('computer_score')
const computerChoiceElement = document.getElementById('computer_choice')
const resultTextElement = document.getElementById('result_text')
const rockPlayer = document.getElementById('player_rock')
const paperPlayer = document.getElementById('player_paper')
const lizardPlayer = document.getElementById('player_lizard')
const scissorsPlayer = document.getElementById('player_scissors')
const spockPlayer = document.getElementById('player_spock')
const rockComputer = document.getElementById('computer_rock')
const paperComputer = document.getElementById('computer_paper')
const lizardComputer = document.getElementById('computer_lizard')
const scissorsComputer = document.getElementById('computer_scissors')
const spockComputer = document.getElementById('computer_spock')

const allGameIcon = document.querySelectorAll('.fas')
const choices = {
  rock: { name: 'Rock', defeates: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeates: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeates: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeates: ['paper', 'spock'] },
  spock: { name: 'Spock', defeates: ['scissors', 'rock'] },
}
let computerChoiceFinal = ''
let playerScore = 0
let computerScore = 0
// Passing Player selection and styling selected Icon

// ResetAll Selected Icons
function resetSelected() {
  allGameIcon.forEach((Icon) => {
    Icon.classList.remove('selected')
  })
  stopConfetti()
  removeConfetti()
}
// Reset Score and player choice and computer choice
function resetAll() {
  playerScore = 0
  computerScore = 0
  playerScoreElement.textContent = playerScore
  computerScoreElement.textContent = computerScore
  playerChoiceElement.textContent = ''
  computerChoiceElement.textContent = ''
  resultTextElement.textContent = ''
  resetSelected()
}

// Computer Random choice
function computerChoice() {
  const computerChoiceNumber = Math.random()
  if (computerChoiceNumber < 0.2) {
    computerChoiceFinal = 'rock'
  } else if (computerChoiceNumber <= 0.4) {
    computerChoiceFinal = 'paper'
  } else if (computerChoiceNumber <= 0.6) {
    computerChoiceFinal = 'scissors'
  } else if (computerChoiceNumber <= 0.8) {
    computerChoiceFinal = 'lizard'
  } else if (computerChoiceNumber <= 1) {
    computerChoiceFinal = 'spock'
  }
  DisplayComputer()
}

// Check Result, Increase Score, Update result score
function updateScore(playerChoice) {
  if (playerChoice === computerChoiceFinal) {
    resultTextElement.textContent = "It's a Tie"
  } else {
    const choice = choices[playerChoice]
    if (choice.defeates.indexOf(computerChoiceFinal) > -1) {
      resultTextElement.textContent = 'You won.'
      startConfetti()
      playerScore++
      playerScoreElement.textContent = playerScore
    } else {
      resultTextElement.textContent = 'You Lost.'
      computerScore++
      computerScoreElement.textContent = computerScore
    }
  }
}
function checkResult(playerChoice) {
  resetSelected()
  computerChoice()
  updateScore(playerChoice)
}

function select(playerChoice) {
  checkResult(playerChoice)
  switch (playerChoice) {
    case 'rock':
      rockPlayer.classList.add('selected')
      playerChoiceElement.textContent = '→ Rock'
      break
    case 'paper':
      paperPlayer.classList.add('selected')
      playerChoiceElement.textContent = '→ Paper'
      break
    case 'scissors':
      scissorsPlayer.classList.add('selected')
      playerChoiceElement.textContent = '→ Scissors'
      break
    case 'lizard':
      lizardPlayer.classList.add('selected')
      playerChoiceElement.textContent = '→ Lizard'
      break
    case 'spock':
      spockPlayer.classList.add('selected')
      playerChoiceElement.textContent = '→ Spock'
      break
    default:
      break
  }
}
function DisplayComputer() {
  switch (computerChoiceFinal) {
    case 'rock':
      rockComputer.classList.add('selected')
      computerChoiceElement.textContent = '→ Rock'
      break
    case 'paper':
      paperComputer.classList.add('selected')
      computerChoiceElement.textContent = '→ Paper'
      break
    case 'scissors':
      scissorsComputer.classList.add('selected')
      computerChoiceElement.textContent = '→ Scissors'
      break
    case 'lizard':
      lizardComputer.classList.add('selected')
      computerChoiceElement.textContent = '→ Lizard'
      break
    case 'spock':
      spockComputer.classList.add('selected')
      computerChoiceElement.textContent = '→ Spock'
      break
    default:
      break
  }
}
window.select = select
window.resetAll = resetAll
resetAll()
