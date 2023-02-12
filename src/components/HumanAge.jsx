import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { FaDog } from "react-icons/fa"
import Box from '@mui/material/Box';


const HumanAge = () => {
  const dog = useSelector((state => state.dog.value));
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  const yomiImage = `../../yomi${randomNumber}.jpeg`;
  const mapleImage = `../../maple.jpeg`;
  const auroraImage = `../../aurora.jpeg`;

  const image = () => {
    if (dog.name === "Maple" || dog.name === "maple") {
      return mapleImage;
    } else if (dog.name === "Aurora" || dog.name === "aurora") {
      return auroraImage;
    }
    return yomiImage;
  }

  return (
    <div className='humanAge'>
      {dog.name && 
        <Box sx={{ mb: 5 }}>
          <h2>{dog.name} is {dog.age * 7} human years old <FaDog/></h2>
          <img src={image()} alt="yomi" width="340px"/>
        </Box>
      }
    </div>
  )
}

export default HumanAge