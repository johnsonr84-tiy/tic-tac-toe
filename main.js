const player_x = 'x'
const player_o = 'o'
let player = player_x

const gameBoard = document.querySelector('.gameBoard')
gameBoard.addEventListener('click', (e) => {
  e.target.innerHTML = player
  player = player === player_x ? player_o : player_x
  if(checkMove()) {
    alert("Somebody Won")
  }
})

const checkMove = () => {
  const cells = document.querySelectorAll('.cell')
  const cellsArr = Array.prototype.slice.call(cells, 0)
  const moves = cellsArr.map(cell => {
    return cell.innerHTML
  })
  const wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8], [2,4,6]]
  const winner = wins.find(combo => {
    if(moves[combo[0]] === moves[combo[1]] &&
      moves[combo[1]] === moves[[2]]) {
    return moves[combo[0]]
    }
    else {
      return false
    }
  })
  console.log((winner));
}
