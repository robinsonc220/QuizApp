import React from 'react';
import Answer from './Answer';
import { Header, Segment, Divider, Message } from 'semantic-ui-react';
import NextQuestion from './NextQuestion';
import Quiz from './Quiz'
import Summary from './Summary'

export default class QuizContainer extends React.Component {
  state = {
    chosenAnswer: '',
    correctIncorrect: '',
    questionsCompleted: 0,
    questionsCorrect: 0
  };


  renderContent = () => {
    let quiz = <Quiz currentQuestion={this.props.currentQuestion} renderAnswers={this.renderAnswers} renderResponses={this.renderResponses} />
    let summary = <Summary key={'summary'} currentAnswers={this.props.currentAnswers} questionsCorrect={this.state.questionsCorrect} updateQuiz={this.props.updateQuiz}/>

    return this.state.questionsCompleted === this.props.currentAnswers.length ?  summary : quiz
  }

  renderAnswers = () => {
    return this.props.currentAnswers.map((answer) => {
      return (
        <Answer
          key={this.props.currentAnswers.indexOf(answer)}
          answer={answer}
          currentQuestion={this.props.currentQuestion}
          answerClicked={this.answerClicked}
          chooseClassName={this.chooseClassName}
        /> 
      );
    });
  };

    answerClicked = () => {
      return  this.state.answer === this.props.currentQuestion.correctAnswer
        ? this.setState({correctIncorrect: 'correct'}) & this.completeQuestion() & console.log(this.state.correctIncorrect)
        : this.setState({correctIncorrect: 'incorrect'}) & this.completeQuestion() & console.log(this.state.correctIncorrect);
    };
    // scope issue! needs access to 'answer' in answer component

    completeQuestion = () => {
      this.setState((prevState) => ({
        questionsCompleted: ++ prevState.questionsCompleted 
        }));
    }

  renderResponses = () => {
    let correctResponse = 
            <>
              <Message positive compact>
                Correct!
              </Message>
              <Divider hidden />
              <NextQuestion updateQuestion={this.props.updateQuestion} />
            </>
    let incorrectResponse = 
            <>
              <Message negative compact>
                Incorrect...
              </Message>
              <Divider hidden />
              <NextQuestion updateQuestion={this.props.updateQuestion} />
            </>
    if (this.state.correctIncorrect === 'correct' ) {
            return correctResponse
          } else if (this.state.correctIncorrect === 'incorrect' ) {
            // console.log(this.props.randomMeal)
            return incorrectResponse
          } else {
            return null
          }
  }

  render() {
    // console.log(this.props, 'QUIZCONTAINER PROPS');
    // console.log(this.state, 'QUIZCONTAINER STATE')
    // console.log(this.props.currentQuestion.incorrectAnswers);
    // console.log(this.props.currentAnswers);
    console.log(this.state.correctIncorrect)
    console.log(this.state.chosenAnswer)
    return (
      <div className="QuizContainer">
        <center>
          <Header as="h1"> {this.props.currentQuiz.title} </Header>
          <Segment compact raised>
                  {this.renderContent()}
          </Segment>
        </center>
      </div>
    );
  }
}
