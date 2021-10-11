import { Button } from "@mui/material"
import { useState } from "react"
import { useHistory } from "react-router"
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import '../Question/Question.css'
 function Question({
    currQues , 
    setCurrQues , 
    questions , 
    options , 
    correct ,
    setScore , 
    score ,
     
}) {
    const [selected, setSelected] = useState()
    const [error, setError] = useState(false)

    const history = useHistory()

    const handleSelect = (option) => {
        if(selected === option && selected === correct) 
            return 'select' 
        else if(selected === option && selected !== correct) 
            return 'wrong'    
        else if(option === correct) {
            return 'select'
        }
    }

    const handleCheck = (option) => {
        setSelected(option);
        if(option === correct) setScore(score + 1)
        setError(false)
    }

    const handleNext = () => {
        if(currQues > 8) history.push('/result');
        else if(selected) {
            setCurrQues(currQues + 1)
            setSelected()
        }
        else {
            setError("Select an Option")
        }
    }

  

    return (
    <div className="question">
        <h1>Question {currQues + 1}</h1>
        <div className="singleQuestion">
            <h2>{questions[currQues].question}</h2>
            
            <div className="options">
                {error && <ErrorMessage value="Select an Option first"/>}
                
                {options && options.map(option => {
                    return (
                        <button
                            onClick = {() => handleCheck(option)}
                            className = {`singleOption ${selected && handleSelect(option)}`}
                            key = {option}
                            disabled = {selected} 
                        >
                            {option}
                        </button>
                    )
                })}
                
            </div>   

            <div className="controls">
                <Button
                    variant = "contained"
                    color = "secondary"
                    size = "large"
                    style = {{width : 185}}
                     
                    onClick = {() => {
                        history.push('/')
                    }}
                >Quit
                </Button>

                <Button
                    variant = "contained"
                    color = "primary"
                    size = "large"
                    style = {{width : 185}}
                    onClick = {handleNext}
                >Next Question
                </Button>
            </div>

        </div>
    </div>
    )
}
export default Question