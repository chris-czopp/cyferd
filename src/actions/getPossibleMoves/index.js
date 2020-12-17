const getNextTop = (layout, currentPosition) => layout[layout.indexOf(currentPosition) - 7]
const getNextBottom = (layout, currentPosition) => layout[layout.indexOf(currentPosition) + 7]
const getNextLeft = (layout, currentPosition) => layout[layout.indexOf(currentPosition) - 1]
const getNextRight = (layout, currentPosition) => layout[layout.indexOf(currentPosition) + 1]

/**
 * Returns player's possible moves
 * @param {Object} currentPosition
 * @param {Array} layout
 * @returns {...*[]}
 */
module.exports = ({
  currentPosition,
  layout
}) => [
  ...(!currentPosition.borders.includes('T') ? [getNextTop(layout, currentPosition)] : []),
  ...(!currentPosition.borders.includes('B') ? [getNextBottom(layout, currentPosition)] : []),
  ...(!currentPosition.borders.includes('L') ? [getNextLeft(layout, currentPosition)] : []),
  ...(!currentPosition.borders.includes('R') ? [getNextRight(layout, currentPosition)] : [])
]
