import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react"
import './Quiz.css'
import Question from '../../Components/Question/Question'
const Quiz = ({name , questions, score, setScore, setQuestions}) => {
    
    const [options, setOptions] = useState();
    const [currQues, setCurrQues] = useState(0);
     
    console.log(questions)
    useEffect(() => {
        console.log(questions)  
        let array = [] 
        array.push(questions[currQues]?.correct_answer)
        array.push(...questions[currQues]?.incorrect_answers);
        
        //Re-Arranging the orders of correct and incorrect answers
        array.sort(() => Math.random() - 0.5);
        
         
        setOptions(array)

    }, [ questions  , currQues])
        
    

    return (
        <div className='quiz'>
            <span className="subtitle"> 
                Welcome , {name}
            </span>    
                  {  

                      questions? (
                          <>
                            <div className="quizInfo">
                                <span>{questions[currQues].category}</span>
                                <span>Score : {score}</span>
                            </div>

                            <Question 
                                currQues = {currQues}
                                setCurrQues = {setCurrQues}
                                questions = {questions} 
                                options = {options}
                                correct = {questions[currQues]?.correct_answer}
                                score = {score}
                                setScore = {setScore}
                               
                            />

                          </>
                      ) : (
                        <CircularProgress 
                            style = {{
                                margin : 100 }}
                                color = "inherit" 
                                size = {150} 
                                thickness = {1} 
                          />
                      )
                  }
        </div>
        
    )
}
export default Quiz