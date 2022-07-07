const cardArray = [
  {
    name: 'fries',
    img: 'image/fries.png'
 },
  {
    name: 'cheeseburger',
    img: 'image/cheeseburger.png'
 },
  {
    name: 'hotdog',
    img: 'image/hotdog.png'
 },
  {
    name: 'icecream',
    img: 'image/ice-cream.png'
 },
  {
    name: 'milkshake',
    img: 'image/milkshake.png'
 },
  {
    name: 'pizza',
    img: 'image/pizza.png'
 },

   {
    name: 'fries',
    img: 'image/fries.png'
 },
  {
    name: 'cheeseburger',
    img: 'image/cheeseburger.png'
 },
  {
    name: 'hotdog',
    img: 'image/hotdog.png'
 },
  {
    name: 'icecream',
    img: 'image/ice-cream.png'
 },
  {
    name: 'milkshake',
    img: 'image/milkshake.png',
 },
  {
    name: 'pizza',
    img: 'image/pizza.png',
 }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.getElementById('result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
  for (i = 0; i < cardArray.length; i++){
    const card = document.createElement('img')
    card.setAttribute('src', 'image/blank.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    gridDisplay.appendChild(card)
  }
}
createBoard()

function checkMatch() {
  const cards = document.querySelectorAll('img')
  if (cardsChosenIds[0] == cardsChosenIds[1]) {
    cards[cardsChosenIds[0]].setAttribute('src', 'image/blank.png')
    cards[cardsChosenIds[1]].setAttribute('src', 'image/blank.png')
    alert('you have clicked the same image!')
  }

  if (cardsChosen[0] == cardsChosen[1]) {
    alert('you found a match!')
    cards[cardsChosenIds[0]].setAttribute('src', 'image/white.png')
    cards[cardsChosenIds[1]].setAttribute('src', 'image/white.png')
    cards[cardsChosenIds[0]].removeEventListener('click', flipCard)
    cards[cardsChosenIds[1]].removeEventListener('click', flipCard)
    cardsWon.push(cardsChosen)
  } else {
    cards[cardsChosenIds[0]].setAttribute('src', 'image/blank.png')
    cards[cardsChosenIds[1]].setAttribute('src', 'image/blank.png')
    alert('sorry try again!')
  }
    
  resultDisplay.innerHTML = cardsWon.length
  cardsChosen = []
  cardsChosenIds = []

  if (cardsWon.length == cardArray.length / 2) {
    resultDisplay.textContent = 'congratulations you found them all!'
  }
}


function flipCard() {

  const cardId = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenIds.push(cardId)
  console.log(cardsChosen)
  console.log(cardsChosenIds)
  this.setAttribute('src', cardArray[cardId].img)
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500)
  }
}