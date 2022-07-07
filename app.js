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



// get cards in a random order each time
// a nice shortcut to shufle an array randomly
cardArray.sort(() => 0.5 - Math.random()) 

/////creating the boar

//selecting the grid div
const gridDisplay = document.querySelector('#grid')

let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
  for (let i = 0; i < cardArray.length; i++){
    //creating each card(img tag)
    const card = document.createElement('img')
    card.setAttribute('src', 'image/blank.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    gridDisplay.append(card)
  }
}
createBoard()


// flipping the card after click



//what happens after 2 cards where clicked
function checkMatch() {


  //getting all cards(img tags) inside the grid div
  const cards = document.querySelectorAll('img')



  
  if (cardsChosen[0] == cardsChosen[1]) {
    // if to cards selected were the same
    alert('You found a match!')
    //finding each card by its id and set the src attribute to a white png.it means when ever 2 selected cards were the same show a white space in their places
    cards[cardsChosenIds[0]].setAttribute('src', 'image/white.png')
    cards[cardsChosenIds[1]].setAttribute('src', 'image/white.png')

    //make the cards stop listening for click
    cards[cardsChosenIds[0]].removeEventListener('click', flipCard)
    cards[cardsChosenIds[1]].removeEventListener('click', flipCard)
    //pushing sucsessful matches into cardsWon array to know the score
    cardsWon.push(cardsChosen)
 
  }  else {
    cards[cardsChosenIds[0]].setAttribute('src', 'image/blank.png')
    cards[cardsChosenIds[1]].setAttribute('src', 'image/blank.png')
    alert('sorry try again!')
  }


  if (cardsChosenIds[0] == cardsChosenIds[1]) {
      cards[cardsChosenIds[0]].setAttribute('src', 'image/blank.png')
    cards[cardsChosenIds[1]].setAttribute('src', 'image/blank.png')
    alert('you have clicked the same image!')
  }



     //showing the score
    resultDisply.textContent = cardsWon.length

//empty the array so we can start chosing new cards again
  let cardsChosen = []
  let cardsChosenIds = []
  
  //clarify what happens when all the card where found
  const resultDisply = document.querySelector('#result')

    if (cardsWon.length == (cardArray.length / 2)) {
    resultDisply.textContent = 'You found them all'
  }
}


function flipCard() {
//getting card id in order to get each card name(we get the names to store in an array to compare 2 clicked card to find matches)
 
  
  const cardId = this.getAttribute('data-id')
  //pushing 2 selected cards name into cardsChosen array
  cardsChosen.push(cardArray[cardId].name)
  //giving each clicked card imag
  this.setAttribute('src', cardArray[cardId].img)
  //pushing cards ids in an array
  cardsChosenIds.push(cardId)
 
  //if 2 cards where clicked and placed in cardChosen array call checkMatch function
  //setTimeout calls a function after a certain amount of time has passed
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500)
  }
}















