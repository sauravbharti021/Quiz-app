import React, { useEffect, useState } from 'react'
import useSound from 'use-sound';
import correct from "../assets/correct.mp3"
import wrong from "../assets/wrong.mp3"

export default function Trivia({data, setStop, questionNumber, setQuestionNumber}) {

    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState("answer");

    const [correctAns]= useSound(correct);
    const [wrongAns] = useSound(wrong);
    useEffect(() => {
        setQuestion(data[questionNumber - 1]);
      }, [data, questionNumber]);

    const delay=(duration, callback)=>{
        setTimeout(()=> {
            callback();
        }, duration)
    };


    const handleClick=(a)=>{
        setSelectedAnswer(a);
        setClassName("answer active");
        delay(3000, ()=> setClassName(a.correct? "answer correct" : "answer wrong") )
        delay(5000, ()=> {
            if(a.correct){
                delay(1000, ()=> {
                    correctAns();
                    setQuestionNumber(prev=>prev+1);
                    setSelectedAnswer(null);
                }  )
            }else{
                delay(1000, ()=>{
                    wrongAns();
                    setStop(true);
                } )
            }
        } )
    }

  return (
    <div className='trivia'>
        <div className="question">
            {question?.question}
        </div>
        <div className="answers">
            {question?.answers.map((a)=>(
                <div className= {selectedAnswer === a? className : "answer"}  
                
                onClick={()=>handleClick(a)}>{a.text}</div>
            )  
            ) } 
        </div>
    </div>
  )
}
