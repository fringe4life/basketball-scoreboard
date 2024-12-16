import { homeScoreEl, guestScoreEl } from "./elements.js";

let homeScore = 0;
let guestScore = 0;

/**
 * The function that updates the variables
 * homeScore and guestScore above based on button clicks
 * @param {1 | 2 | 3} amount 
 * @param {'home' | 'guest'} team 
 */
function add(amount, team) {
  if (team === 'home') homeScore += amount
  else guestScore += amount
  updateClasses()
  updateScores()
}
/**
 * Updates the color of the scoreboards based on the
 * homeScore and guestScore variables defined above
 */
function updateClasses() {
  homeScoreEl.classList.toggle('winning', homeScore > guestScore)
  guestScoreEl.classList.toggle('winning', guestScore > homeScore)
  homeScoreEl.classList.toggle('loosing', homeScore < guestScore)
  guestScoreEl.classList.toggle('loosing', guestScore < homeScore)

  homeScoreEl.classList.toggle('drawwing', homeScore === guestScore)
  guestScoreEl.classList.toggle('drawwing', guestScore === homeScore)
}

/**
 * Updates the numbers displayed in the Browser
 */
function updateScores() {
  homeScoreEl.textContent = homeScore
  guestScoreEl.textContent = guestScore
}

function removeClasses(...cls) {
  this.classList.remove(...cls)
}
/**
 * designed to be used with the currently
 * non-existent new game button
 */
function resetScores() {
  homeScore = 0;
  guestScore = 0;

  const classesToRemove = ['winning', 'loosing', 'drawwing']

  removeClasses.call(homeScoreEl, ...classesToRemove)
  removeClasses.call(guestScoreEl, ...classesToRemove)

  updateScores()
}

export { add, updateScores, resetScores, homeScore, guestScore }