const getPossibleMoves = require('../getPossibleMoves/index')
// const getMovementDirection = require('../getMovementDirection/index')

/**
 * Returns a new wolf position
 * @param {Object} currentPosition
 * @param {Array} layout
 * @param {Boolean|undefined} shouldRepeat
 * @param {String} thomasDirection
 * @param {Object} thomasPosition
 * @returns {Object|undefined}
 */
module.exports = function getWolfNextMove ({
  currentPosition,
  layout,
  shouldRepeat = true,
  thomasDirection,
  thomasPosition
}) {
  const currentPositionIndex = layout.indexOf(currentPosition)
  const nextPossiblePositions = getPossibleMoves({ currentPosition, layout })
  const nextPosition = nextPossiblePositions.find(({
    row,
    column
  }) => thomasPosition.row === row || thomasPosition.column === column)
  /* const wolfMovementDirection = getMovementDirection({
    currentPosition: nextPosition,
    prevPosition: currentPosition
  }) */

  // @todo use directions and fix "fails in cases when the wolf is on a different row and column and can make 2 moves to match x/y axis"

  if (nextPosition &&
    thomasPosition.row === layout[currentPositionIndex].row &&
    ((thomasPosition.column < layout[currentPositionIndex].column && nextPosition.column > layout[currentPositionIndex].column) ||
      (thomasPosition.column > layout[currentPositionIndex].column && nextPosition.column < layout[currentPositionIndex].column))) {
    return
  }

  if (nextPosition &&
    thomasPosition.column === layout[currentPositionIndex].column &&
    ((thomasPosition.row < layout[currentPositionIndex].row && nextPosition.row > layout[currentPositionIndex].row) ||
      (thomasPosition.row > layout[currentPositionIndex].column && nextPosition.row < layout[currentPositionIndex].row))) {
    return
  }

  if (shouldRepeat && nextPosition) {
    return getWolfNextMove({
      currentPosition: nextPosition,
      layout,
      shouldRepeat: false,
      thomasDirection,
      thomasPosition
    }) || nextPosition
  }

  return nextPosition
}
