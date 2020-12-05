import React from 'react';
import { quizzes } from './data/quizzes.js';
import QuizContainer from './components/QuizContainer';
import shuffle from 'shuffle-array';

export default class App extends React.Component {
  state = {
    currentQuiz: [],
    currentQuestion: {},
    quizIndex: 0,
    questionIndex: 0,
    currentAnswers: [],
  };

  chooseQuiz = () => {
    const { quizIndex, questionIndex } = this.state;
    let currentQuiz = quizzes[quizIndex];
    let currentQuestion = currentQuiz.questions[questionIndex];
    this.setState({
      currentQuiz: currentQuiz,
      currentQuestion: currentQuestion,
    });
    let currentAnswers = currentQuestion.incorrectAnswers;
    this.setState({ currentAnswers: currentAnswers });
    currentAnswers.push(currentQuestion.correctAnswer);
    shuffle(currentAnswers);
  };

  updateQuestion = () => {
    this.setState((prevState) => ({
      questionIndex: ++ prevState.questionIndex
  }));
  }

  updateQuiz = () => {
    this.setState((prevState) => ({
      quizIndex: ++ prevState.quizIndex 
  }));
  }


 
  componentDidMount() {
    this.chooseQuiz()
  }

  render() {
    console.log(this.state, 'APP STATE');
    // console.log({ quizzes });
    // console.log(this.state.currentQuestion.incorrectAnswers)
    return (
      <div className="App">
        <QuizContainer
          key={'quizcontainer'}
          currentQuiz={this.state.currentQuiz}
          currentQuestion={this.state.currentQuestion}
          currentAnswers={this.state.currentAnswers}
          updateQuestion={this.updateQuestion}
          updateQuiz={this.updateQuiz}
          completeQuestion={this.completeQuestion}
        />
      </div>
    );
  }
}
