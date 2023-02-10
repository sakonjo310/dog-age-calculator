import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { humanAge } from '../features/dog';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7F2525',
      darker: '#053e85',
    },
  },
});


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

  const ageMenu = () => {
    let container = [];
    for (let i = 1; i <= 30; i++) {
      container.push(<MenuItem value={i}>{i}</MenuItem>)
    }
    return container
  }

  return (
    <Box 
      className='dog'
      component="form"
    >
      <Box sx={{ minWidth: 120, mt: 3 }}>
        <TextField id="dogName" label="Your dog's name" variant="outlined" onChange={handleNameChange} />
      </Box>
      <Box sx={{ minWidth: 120, mt: 3 }}>
        <FormControl sx={{ width: 100 }}>
          <InputLabel id="dogAge">Age</InputLabel>
          <Select
            labelId="dogAge"
            id="dogAge"
            value={dogAge}
            label="Age"
            onChange={handleAgeChange}
          >
            {ageMenu()}
          </Select>
        </FormControl>
      </Box>
      <ThemeProvider theme={theme}>
        <Button 
          variant="outlined"
          onClick={() => {
            // console.log(dogName)
            handleClick();
          }}
          sx={{ mt: 5, color: "primary" }}
        >
          Get age!
        </Button>
      </ThemeProvider>
    </Box>
  )
}

export default DogAge