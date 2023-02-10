import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { humanAge } from '../features/dog';


const DogAge = () => {
  const dispatch = useDispatch();
  const [dogName, setDogName] = useState("");
  const [dogAge, setDogAge] = useState(0);

  const handleClick = () => {
    setDogName(dogName)
    setDogAge(dogAge)
    dispatch(humanAge({ name: dogName, age: dogAge }));
  }
  const handleNameChange = (e) => {
    e.preventDefault();
    setDogName(e.target.value)
  }
  const handleAgeChange = (e) => {
    e.preventDefault();
    setDogAge(e.target.value)
  }

  return (
    <div className='dogAge'>
      <form>
        <label htmlFor="dogName">Your Dog's name</label>
        <input type="text" id="dogName" value={dogName} onChange={handleNameChange} />
        <br />
        <label htmlFor="dogAge">Your Dog's age</label>
        <input type="text" id="dogAge" value={dogAge} onChange={handleAgeChange} />
        <br />
        <button
          type="button"
          onClick={() => {
            // console.log(dogName)
            handleClick();
          }}
        >
          Get age!
        </button>
      </form>
      
    </div>
  )
}

export default DogAge