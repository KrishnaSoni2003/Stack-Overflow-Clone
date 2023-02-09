import React from 'react'
import {  useLocation, useNavigate } from 'react-router-dom'
import './HomeMainbar.css'
import QuestionsList from './QuestionsList'

const HomeMainbar = () => {

  const location = useLocation()
  const user = 1;
  const navigate = useNavigate()
  // const redirect = () =>{
  //     alert("login or signup to ask question")
  //     navigate('/Auth')
  // }

  const checkAuth=()=>{
    if(user===null){
      alert("login or signup to ask question")
      navigate('/Auth')
    }
    else{
      navigate('/AskQuestion')
    }
  }

  var questionsList = [{
    _id: '1',
    upVotes: 3,
    downVotes:2,
    noOfAnswers: 2,
    questionTitle: "What is a Function?",
    questionBody: "It meant to be",
    questionTags: ["java", "node js", "react js", "mongodb"],
    userPosted: "krishna",
    userId:1,
    askedOn: "jan 1",
    answer:[{
      answerBody:"Answer",
      userAnswered:'Soni',
      answeredOn:"jan 2",
      userId:2,
    }]
  },
  {
    _id: '2',
    upVotes: 3,
    downVotes:2,
    noOfAnswers: 5,
    questionTitle: "What is Backend?",
    questionBody: "It meant to be",
    questionTags: ["Backend", "node js", "mongodb"],
    userPosted: "krishna",
    userId:2,
    askedOn: "jan 1",
    answer:[{
      answerBody:"Answer",
      userAnswered:'Soni',
      answeredOn:"jan 2",
      userId:2,
    }]
  },
  {
    _id: '3',
    upVotes: 3,
    downVotes:2,
    noOfAnswers: 2,
    questionTitle: "What is Reactjs?",
    questionBody: "It meant to be",
    questionTags: ["node js", "react js", "Javascript"],
    userPosted: "krishna",
    userId:3,
    askedOn: "jan 1",
    answer:[{
      answerBody:"Answer",
      userAnswered:'Soni',
      answeredOn:"jan 2",
      userId:2,
    }]
  },
  ]

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        {/* <Link to={user === null ? redirect() : '/AskQuestion'} className='ask-btn'>Ask Question</Link> */}
        <button to='/AskQuestion' onClick={checkAuth} className='ask-btn'>Ask Question</button>
      </div>
      <div>
       {
         questionsList ===null ?
         <h1>Loading...</h1>:
         <>
         <p>{questionsList.length}questions</p>
         <QuestionsList questionsList={questionsList}/>
         </>
       }
      </div>
    </div>
  )
}

export default HomeMainbar
