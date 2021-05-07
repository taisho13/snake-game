import {initFields} from '../utils'


//定数群
const fieldSize = 35;
const initialPosition = {x:17,y:17};
const initialValues = initFields(fieldSize,initialPosition);
const defaultInterval = 100;
const defaultDifficulty = 3;

const Difficulty = [1000,500,100,50,10]

const GameStatus = Object.freeze({
  init: 'init',
  playing: 'playing',
  suspended: 'suspended',
  gameover: 'gameover'
})

const Direction = Object.freeze({
  up: 'up',
  right: 'right',
  left: 'left',
  down: 'down'
})

const OppositeDirection = Object.freeze({
  up: 'down',
  right: 'left',
  left: 'right',
  down: 'up'
})

const Delta = Object.freeze({
  up: { x: 0, y: -1 },
  right: { x:  1, y: 0 },
  left: { x: -1, y: 0 },
  down: { x: 0, y: 1 },
})

const DirectionKeyCodeMap = Object.freeze({
  37: Direction.left,
  38: Direction.up,
  39: Direction.right,
  40: Direction.down,
});