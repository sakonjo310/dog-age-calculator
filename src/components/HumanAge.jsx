import React from 'react'
import { useSelector } from 'react-redux'

const HumanAge = () => {
  const dog = useSelector((state => state.dog.value));
  return (
    <div className='humanAge'>
      {dog.name && <h2>{dog.name} is {dog.age * 7} human years old!</h2>} 
    </div>
  )
}

export default HumanAge