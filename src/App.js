import React,{useCallback,useState,useEffect} from 'react';

import Navigation from './components/Navigation';
import ManipulationPanel from './components/ManipulationPanel';
import Field from './components/Field';
import Button from './components/Button';
import {initFields,getFoodPostion} from './utils';


const initialPosition = {x:17,y:17};
const initialValues = initFields(35,initialPosition);
const defaultInterval = 100;

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

let timer = undefined;

const unsubscribe = () => {
  if(!timer){
    return
  }
  clearInterval(timer)
}

const isCollision = (fieldSize,position) => {
  if (position.y < 0 || position.x < 0) {
    return true;
  }

  if (position.y > fieldSize - 1 || position.x > fieldSize - 1) {
    return true;
  }

  return false;
}

const isEatingMyself = (fields,position) => {
    return fields[position.y][position.x] === 'snake'
}

function App() {

  const [fields,setFields] = useState(initialValues);
  const [body, setBody] = useState([]);
  const [status,setStatus] = useState(GameStatus.init);
  const [tick, setTick] = useState(0);
  const [direction, setDirection] = useState(Direction.up);

  useEffect(() => {
    setBody([initialPosition])
    timer = setInterval(() => {
      setTick(tick => tick +1)
    }, defaultInterval)
    return unsubscribe
  },[])

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

  const onStart = () => setStatus(GameStatus.playing)
  const onStop = () => setStatus(GameStatus.suspended)

  const onRestart = () => {
    timer = setInterval(() => {
      setTick(tick => tick +1)
    },defaultInterval)
     setDirection(Direction.up)
     setStatus(GameStatus.init)
     setBody([initialPosition])
     setFields(initFields(35, initialPosition))
  }

  const onChangeDirection = useCallback((newDirection) => {
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
  return (
    <div className="App">

      <header className = "header" >
        <div className = "title-conteiner">
          <h1 className = "title">Snake Game</h1>
        </div>
        <Navigation/>
      </header>

      <main className = "main">
        <Field fields={fields}/>
      </main>

      <footer className = "footer">
        <Button 
        status = {status} 
        onStop = {onStop}
        onStart = {onStart} 
        onRestart = {onRestart} 
        />
        <ManipulationPanel onChange = {onChangeDirection}/>
      </footer>
    </div>
  );
}

export default App;
