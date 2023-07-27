import { Fragment, useEffect, useMemo, useState } from "react";
import Trivia from "./components/trivia";
import Timer from "./components/Timer";
import Start from "./components/start";
import "./app.css"

function App() {

  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop]= useState(false);
  const [earned, setEarned] = useState("₹ 0");
  const [username, setUsername ] = useState(null);

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Who has won most FIFA world cups?",
      answers: [
        {
          text: "Italy",
          correct: false,
        },
        {
          text: "Germany",
          correct: false,
        },
        {
          text: "Brazil",
          correct: true,
        },
        {
          text: "Argentina",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Who is CEO of Tesla?",
      answers: [
        {
          text: "Elon Musk",
          correct: true,
        },
        {
          text: "Johnny Lever",
          correct: false,
        },
        {
          text: "Steve Woznaik",
          correct: false,
        },
        {
          text: "Amitabh Bacchan",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 9,
      question: "Who has won most FIFA world cups?",
      answers: [
        {
          text: "Italy",
          correct: false,
        },
        {
          text: "Germany",
          correct: false,
        },
        {
          text: "Brazil",
          correct: true,
        },
        {
          text: "Argentina",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Who is CEO of Tesla?",
      answers: [
        {
          text: "Elon Musk",
          correct: true,
        },
        {
          text: "Johnny Lever",
          correct: false,
        },
        {
          text: "Steve Woznaik",
          correct: false,
        },
        {
          text: "Amitabh Bacchan",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 14,
      question: "Who has won most FIFA world cups?",
      answers: [
        {
          text: "Italy",
          correct: false,
        },
        {
          text: "Germany",
          correct: false,
        },
        {
          text: "Brazil",
          correct: true,
        },
        {
          text: "Argentina",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Who is CEO of Tesla?",
      answers: [
        {
          text: "Elon Musk",
          correct: true,
        },
        {
          text: "Johnny Lever",
          correct: false,
        },
        {
          text: "Steve Woznaik",
          correct: false,
        },
        {
          text: "Amitabh Bacchan",
          correct: false,
        },
      ],
    },

  ];

  const moneyPyramid = useMemo(()=>
    [
      {id:1 , amount: "₹ 5,000"},
      {id:2 , amount: "₹ 10,000"},
      {id:3 , amount: "₹ 20,000"},
      {id:4 , amount: "₹ 40,000"},
      {id:5 , amount: "₹ 80,000"},
      {id:6 , amount: "₹ 1,60,000"},
      {id:7 , amount: "₹ 3,20,000"},
      {id:8 , amount: "₹ 6,40,000"},
      {id:9 , amount: "₹ 12,50,000"},
      {id:10 , amount: "₹ 25,00,000"},
      {id:11 , amount: "₹ 50,00,000"},
      {id:12 , amount: "₹ 1,00,00,000"},
      {id:13 , amount: "₹ 3,00,00,000"},
      {id:14 , amount: "₹ 5,00,00,000"},
      {id:15 , amount: "₹ 7,00,00,000"},
    ].reverse()
  ,[]) 

  useEffect(()=>{
     questionNumber>1 && setEarned(moneyPyramid.find(m=> m.id===questionNumber-1).amount );
  }, [moneyPyramid, questionNumber])

  return (
    <div className="app">
      {!username ? (<Start setUsername={setUsername} />) :
        <Fragment>

          {stop ? <h1 className="endText">You earned : {earned}</h1> :
          (
            <Fragment>
  
            <div className="main">
              
              <div className="top">
                <div className="timer"><Timer setStop={setStop} questionNumber={questionNumber} /></div>
              </div>
              <div className="bottom">
                <Trivia 
                data={data} 
                setStop={setStop} 
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
                />
              </div>
            </div>
            <div className="pyramid">
              <ul className="moneyList">
  
                {moneyPyramid.map((m)=> (
  
                <li  className={m.id === questionNumber ?  "moneyListItem active" : "moneyListItem"} >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
  
                ))
                }
              </ul>
            </div>
          </Fragment>
          )  
        }
        </Fragment>
      }

    </div>
  );
}

export default App;
