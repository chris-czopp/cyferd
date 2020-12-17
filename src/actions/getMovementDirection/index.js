const {
  DIRECTION_TOP,
  DIRECTION_BOTTOM,
  DIRECTION_LEFT,
  DIRECTION_RIGHT,
  DIRECTION_REMAIN
} = require('../constants')

/**
 * Returns player movement direction
 * @param {Object|undefined} currentPosition
 * @param {object} prevPosition
 * @returns {string}
 */
module.exports = ({
  currentPosition,
  prevPosition
}) => {
  if (!currentPosition) {
    return DIRECTION_REMAIN
  }

  if (currentPosition.column === prevPosition.column && currentPosition.row < prevPosition.row) {
    return DIRECTION_TOP
  }

  if (currentPosition.column === prevPosition.column && currentPosition.row > prevPosition.row) {
    return DIRECTION_BOTTOM
  }

  if (currentPosition.row === prevPosition.row && currentPosition.column < prevPosition.column) {
    return DIRECTION_LEFT
  }

  if (currentPosition.row === prevPosition.row && currentPosition.column > prevPosition.column) {
    return DIRECTION_RIGHT
  }

  return DIRECTION_REMAIN
}
