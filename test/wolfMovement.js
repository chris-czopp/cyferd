const { expect } = require('chai')
const { getMovementDirection, getWolfNextMove } = require('../src/actions/index')
const input = require('../src/input.json')

const { layout } = input.puzzles[0]

const thomasCoordinates = [
  [3, 4],
  [2, 4],
  [3, 4],
  [3, 3],
  [3, 2],
  [4, 2],
  [5, 2],
  [6, 2],
  [7, 2],
  [7, 3],
  [7, 4],
  [7, 5],
  [7, 6],
  [6, 6]
].map(([row, column]) => layout.find(position => position.row === row && position.column === column))

const wolfCoordinates = [
  [3, 6],
  [2, 5],
  [3, 5],
  [3, 5],
  [3, 5],
  [4, 4],
  [5, 3],
  [5, 3],
  [5, 3],
  [5, 3],
  [5, 4],
  [5, 5],
  [5, 5],
  [6, 5]
].map(([row, column]) => layout.find(position => position.row === row && position.column === column))

const firstWolfPosition = wolfCoordinates[0]

describe('wolf movement', () => {
  const actualWolfPositions = [firstWolfPosition]

  thomasCoordinates.forEach((thomasPosition, index) => {
    if (index === 0) { return }

    const prevWolfPosition = actualWolfPositions.length === 0 ? firstWolfPosition : actualWolfPositions[actualWolfPositions.length - 1]
    const nextWolfPosition = getWolfNextMove({
      currentPosition: prevWolfPosition,
      layout,
      thomasDirection: getMovementDirection({
        currentPosition: thomasPosition,
        prevPosition: thomasCoordinates[index - 1]
      }),
      thomasPosition: thomasPosition
    }) || prevWolfPosition

    actualWolfPositions.push(nextWolfPosition)

    it(`should move wolf to: ${wolfCoordinates[index].row}.${wolfCoordinates[index].column} for the corresponding Thomas position: ${thomasPosition.row}.${thomasPosition.column}`, () => {
      expect(actualWolfPositions[index]).to.equal(wolfCoordinates[index])
    })
  })
})
