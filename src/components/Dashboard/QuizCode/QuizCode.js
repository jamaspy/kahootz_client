import React, { useState, useEffect } from 'react'
import axios from 'axios';


// const SERVER_URL_PUT = 'http://localhost:3000/new_game.json'
// const SERVER_URL_GET = 'http://localhost:3000/new_game.json'
const SERVER_URL_PUT = 'https://kahootz.herokuapp.com/new_game.json' 
const SERVER_URL_GET = 'https://kahootz.herokuapp.com/new_game.json'

const QuizCode = ( props ) => {
  console.log('QUIZID:', props.quiz_id);
  console.log("PROPS: ", props);
  let [ gameNum, getGameNum ] = useState(0)
  
  useEffect(() => {
     axios.post(SERVER_URL_PUT, { new_game: true, quiz_id: props.quiz_id } ).then((results) => {
       axios.get(SERVER_URL_GET).then((result) => {
        console.log('This is the GET result ', result);

        getGameNum(result.data.id)
       })
     })

  }, [])

  return(
    <h1>QuizCode: { gameNum * 9999 } </h1> //* 9999 just makes a number 6 digits long
  );
}

export default QuizCode;