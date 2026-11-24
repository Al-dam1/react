import {useState} from 'react'


import './ItemCounter.css'
interface Props {
  name: string,
  quantity?: number
}

const ItemCounter = ({name, quantity = 1}: Props) => {
  const [count, setCount] = useState(quantity)
  const handleAdd =()=>{
    if (count === 1) return;
    setCount (count + 1)
  }
  const handleSubtract =()=>{
    if (count === 1) return;
    setCount(count - 1)
  }
  const handleClick = ()=>{
    console.log(`Click en ${name}`);
    
  }
  return (
    <div className='contenedor'>
    <span  className='text'
    style={{
      color: count === 1 ? 'red' : 'black',
    }}> {name}
      </span>
      <button onClick={handleAdd}>+1</button>
      <span>{count}</span>
      <button onClick={handleSubtract}>-1</button>
    </div>
  )
}

export default ItemCounter
