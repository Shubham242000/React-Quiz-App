import { TextField,MenuItem,Button } from '@mui/material'
import { useState } from 'react'
import { useLocation } from 'react-router'
import Categoties from '../../Data/Categories'
import ErrorMessage from '../../Components/ErrorMessage/ErrorMessage'

import './Home.css'


export default ({name,setName,fetchQuestions}) => {

    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [error, setError] = useState(false)

    const location = useLocation()
    
    const handleSubmit = () => {
        if(!category || !difficulty || !name) {
            setError(true); 
            return;
        }

        else {
            setError(false)
            fetchQuestions(category, difficulty)
            location.pathname = '/quiz'
        }
    }


    return (
        <div className='content'>
           <div>
               <span style = {{fontSize : 30}}>Quiz Settings</span>
                <div className="settings_select">
                    {error && <ErrorMessage value="Please Fill all the fields" />}
                    
                    <TextField 
                    style={{marginBottom : 25}} 
                    label='Enter your name' 
                    variant='outlined'
                    onChange = {(e) => setName(e.target.value)}
                    />

                    <TextField 
                        select
                        label="Select category"
                        variant='outlined'
                        style = {{marginBottom : 30}}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                    
                    {
                        Categoties.map((cat) => (
                             <MenuItem key={cat.category} value={cat.value}> 
                                {cat.category}
                             </MenuItem>
                        ))
                    }
                    </TextField> 

                    <TextField
                        select
                        label = "Select Difficulty"
                        variant = "outlined"
                        style = {{marginBottom : 30}}
                        onChange={e => setDifficulty(e.target.value)}
                    >
                        <MenuItem key="Easy" value="easy">Easy</MenuItem>
                        <MenuItem key="Medium" value="medium">Medium</MenuItem>
                        <MenuItem key="Hard" value="hard">Hard</MenuItem>
                    </TextField>

                    <Button 
                    variant="contained" 
                    color="primary" 
                    size="large"
                    onClick={handleSubmit}
                    >
                        Start Quiz
                    </Button>

                </div>
           
           </div>
           <img src = '/quiz.svg' className='banner' />
        </div>
    )
}