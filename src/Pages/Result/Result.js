import { Button } from "@mui/material"
import { useHistory } from "react-router"
import './Result.css'

const Result = ({setScore, score}) => {
    const history = useHistory()
    return (
        <div className='result'>
            <span className='title'>
                Final Score : {score}
            </span>
            <Button
                variant = "contained"
                color = "secondary" 
                size = "large" 
                style = {{alignSelf : "center"
                           , marginTop : 20 
                    }}
                onClick = {() => {
                    setScore(0)
                    history.push('/')
                }}
            >Go to HomePage</Button>
        </div>
    )
}
export default Result