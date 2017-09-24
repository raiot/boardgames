import * as betrayalTemplate from '../game-templates/betrayal.html'

export function getGameData (p) {
  console.log(betrayalTemplate)
  setTimeout(() => p(betrayalTemplate), 100)
}
