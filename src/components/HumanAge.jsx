import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { FaDog } from "react-icons/fa"


const HumanAge = () => {
  const dog = useSelector((state => state.dog.value));
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  const yomiImage = `../../yomi${randomNumber}.jpeg`;

  return (
    <div className='humanAge'>
      {dog.name && 
        <div>
          <h2>{dog.name} is {dog.age * 7} human years old <FaDog/></h2>
          <img src={yomiImage} alt="yomi" width="340px"/>
        </div>
      }
    </div>
  )
}

export default HumanAge