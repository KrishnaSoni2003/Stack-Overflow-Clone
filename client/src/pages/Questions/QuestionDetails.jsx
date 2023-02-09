import React from 'react'
import { useParams } from 'react-router-dom'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import './Questions.css'
import { Link } from 'react-router-dom';
import Avatar from '../../components/Avatar/Avatar'
import DisplayAnswer from './DisplayAnswer';

const QuestionDetails = () => {

    const { id } = useParams();

    var questionsList = [{
        _id: '1',
        upVotes: 3,
        downVotes: 2,
        noOfAnswers: 2,
        questionTitle: "What is a Function?",
        questionBody: "It meant to be",
        questionTags: ["java", "node js", "react js", "mongodb"],
        userPosted: "krishna",
        userId: 1,
        askedOn: "jan 1",
        answer: [{
            answerBody: "Answer",
            userAnswered: 'Soni',
            answeredOn: "jan 2",
            userId: 2,
        }]
    },
    {
        _id: '2',
        upVotes: 3,
        downVotes: 2,
        noOfAnswers: 5,
        questionTitle: "What is Backend?",
        questionBody: "It meant to be",
        questionTags: ["Backend", "node js", "mongodb"],
        userPosted: "krishna",
        userId: 2,
        askedOn: "jan 1",
        answer: [{
            answerBody: "Answer",
            userAnswered: 'Soni',
            answeredOn: "jan 2",
            userId: 2,
        }]
    },
    {
        _id: '3',
        upVotes: 3,
        downVotes: 2,
        noOfAnswers: 2,
        questionTitle: "What is Reacjs?",
        questionBody: "It meant to be",
        questionTags: ["node js", "react js", "Javascript"],
        userPosted: "krishna",
        userId: 3,
        askedOn: "jan 1",
        answer: [{
            answerBody: "Answer",
            userAnswered: 'Soni',
            answeredOn: "jan 2",
            userId: 2,
        }]
    }
    ]

    return (
        <div className='question-details-page'>
            {
                questionsList === null ?
                    <h1>Loading..</h1> :
                    <>
                        {
                            questionsList.filter(question => question._id === id).map(question => (
                                <div key={question._id}>
                                    <section className='question-details-container'>
                                        <h1>{question.questionTitle}</h1>
                                        <div className='question-details-container-2'>
                                            <div className="question-votes">
                                                <ThumbUpIcon className='votes-icon'/>
                                                <p>{question.upVotes - question.downVotes}</p>
                                                <ThumbDownIcon className='votes-icon'/>
                                            </div>
                                            <div style={{ width: "100%" }}>
                                                <p className='question-body'>{question.questionBody}</p>
                                                <div className='question-details-tags'>
                                                    {
                                                        question.questionTags.map((tag) => (
                                                            <p key={tag}>{tag}</p>
                                                        ))
                                                    }
                                                </div>
                                                <div className="question-actions-user">
                                                    <div>
                                                        <button type='button'>Share</button>
                                                        <button type='button'>Delete</button>
                                                    </div>
                                                    <div>
                                                        <p>asked {question.askedOn}</p>
                                                        <Link to={`/User/${question.userId}`} className='user-link' style={{color:'#0086d8'}}>
                                                            <Avatar backgroundColor='orange' px='8px' py='5px'>{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                                        <div>
                                                            {question.userPosted}
                                                        </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {
                                        question.noOfAnswers !== 0 && (
                                            <section>
                                                <h3>{question.noOfAnswers} answers</h3>
                                                <DisplayAnswer key={question._id} question={question}/>
                                            </section>
                                        )
                                    }
                                    <section className='post-ans-container'>
                                        <h3>
                                            Your Answer
                                        </h3>
                                        <form >
                                            <textarea name="" id="" cols="30" rows="10"></textarea><br/>
                                            <input type="submit" className='post-ans-btn' value='Post your answer' />
                                        </form>
                                        <p>
                                            Browse other Question tagged
                                            {
                                                question.questionTags.map((tag)=>(
                                                    <Link to='/Tags' key={tag} className='ans-tag'>{tag} </Link>
                                                ))
                                            } 
                                            or
                                            <Link to='/AskQuestion' style={{textDecoration:"none", color: "#009dff" }}> ask your own question.</Link> 
                                        </p>
                                    </section>
                                </div>
                            ))
                        }
                    </>
            }
        </div>
    )
}

export default QuestionDetails
