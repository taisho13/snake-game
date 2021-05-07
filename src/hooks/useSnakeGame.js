import { useCallback, useEffect, useState } from 'react';
import {
  defaultInterval,
  defaultDifficulty,
  initialPosition,
  initialValues,
  Delta,
  Difficulty,
  Direction,
  DirectionKeyCodeMap,
  GameStatus,
  OppositeDirection,
} from '../constants';

import {
  initFields,
  isCollision,
  isEatingMyself,
  getFoodPostion,
} from '../utils';

let timer = undefined;

const unsubscribe = () => {
  if(!timer){
    return
  }
  clearInterval(timer)
}

const useSnakeGame = () => {
  
  const [fields,setFields] = useState(initialValues);
  const [body, setBody] = useState([]);
  const [status,setStatus] = useState(GameStatus.init);
  const [tick, setTick] = useState(0);
  const [direction, setDirection] = useState(Direction.up);
  const [difficulty,setDiffculty] = useState(defaultDifficulty)

  useEffect(() => {
    const interval = Difficulty[difficulty - 1]
    setBody([initialPosition])
    timer = setInterval(() => {
      setTick(tick => tick +1)
    }, interval)
    return unsubscribe
  },[difficulty])

  useEffect(() => {
    if (body.length === 0 || status !== GameStatus.playing) {
      return
    }
    const canContinue = handleMoving()
    if (!canContinue) {
      unsubscribe()
      setStatus(GameStatus.gameover)
    }
  }, [tick])

  const start = () => setStatus(GameStatus.playing)
  const stop = () => setStatus(GameStatus.suspended)

  const reload = () => {
    timer = setInterval(() => {
      setTick(tick => tick +1)
    },defaultInterval)
     setDirection(Direction.up)
     setStatus(GameStatus.init)
     setBody([initialPosition])
     setFields(initFields(35, initialPosition))
  }

  const updateDirection = useCallback((newDirection) => {
    if (status !== GameStatus.playing) {
      return direction
    }
    if (OppositeDirection[direction] === newDirection) {
      return
    }
    setDirection(newDirection)
  
  },[direction,status]
  )

  useEffect(() => {
    const handleKeyDown = (e) => {
      const newDirection = DirectionKeyCodeMap[e.keyCode];
      if(!newDirection){
        return;
      }
      onChangeDirection(newDirection);
    }
    document.addEventListener('keydown',handleKeyDown);
    return() => document.removeEventListener('keydown',handleKeyDown)
  },[onChangeDirection])

  const updateDifficulty = useCallback((difficulty) => {
    if(status !== GameStatus.init){
        return
    }
    if(difficulty < 1 || difficulty >Difficulty.length){
      return
    }
    setDiffculty(difficulty)
  },[status,difficulty])

  const handleMoving = () => {
    const { x, y } = body[0]
    const delta = Delta[direction]
    const newPosition = {
      x: x + delta.x,
      y: y + delta.y
    }
    if (isCollision(fields.length, newPosition) || isEatingMyself(fields,newPosition)) {
      return false
    }
    const newBody = [...body]
    if (fields[newPosition.y][newPosition.x] !== 'food') {
      const removingTrack = newBody.pop()
      fields[removingTrack.y][removingTrack.x] = ''
    } else {
      const food = getFoodPostion(fields.length, [...newBody, newPosition])
      fields[food.y][food.x] = 'food'
     }
    fields[newPosition.y][newPosition.x] = 'snake'
    newBody.unshift(newPosition)

    setBody(newBody)
    setFields(fields)
    return true
  }

  return {
    body,
    difficulty,
    fields,
    status,
    start,
    stop,
    reload,
    updateDirection,
    updateDifficulty,
  };

}

export default useSnakeGame;