import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Dashboard.scss'
import axios from "axios"
import QuizCode from "./QuizCode/QuizCode";
import Card from "./Card/Card"


class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      quizzes: []
    }
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount() {
    axios.get("http://localhost:3000/quizzes.json").then(quizzes => {
      this.setState({
        quizzes: quizzes.data
      });
    });
  }

  renderCards() {
    return this.state.quizzes.map(quiz => {
      console.log("TEST");
      return <Card category={quiz.category} difficulty={quiz.difficulty} questions={quiz.questions} />
    })
  }

  render() {
    return (

      <div className="displayQuizzes">

        <div className="header">
          <h1>Select A Quiz To Play</h1>
        </div>

        <div className="displayCards">
          {this.renderCards()}
        </div>

        
      </div>

    )

  }
}

export default Dashboard;
