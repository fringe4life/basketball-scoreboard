import { add, resetScores } from "./elementFunctions.js"
import { setup } from './data.js'

const homeScoreEl = document.getElementById('home-score')
const guestScoreEl = document.getElementById('guest-score')

const allBtns = [...document.getElementsByClassName('add1'), ...document.getElementsByClassName('add2'), ...document.getElementsByClassName('add3')]

allBtns.forEach((btn, index) => btn.addEventListener('click',
  add.bind(null, setup[index].add, setup[index].team))
)

const resetBtn = document.querySelector('#reset > .reset-button')

resetBtn.addEventListener('click', resetScores)

export {
  homeScoreEl,
  guestScoreEl,
}