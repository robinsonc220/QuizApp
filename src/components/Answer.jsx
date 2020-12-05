import React from 'react';

export default class Answer extends React.Component {
  
state = {
  class: ''
}

  chooseClassName = () => {
this.props.answer === this.props.currentQuestion.correctAnswer
      ? this.setState({class: 'correct'})
      : this.setState({class: 'incorrect'});
  }

  // answerClicked = () => {
  //   this.props.answer === this.props.currentQuestion.correctAnswer
  //     ? console.log('CORRECT!')
  //     : console.log('INCORRECT...');
  // };
  
  render() {
    // console.log(this.props, 'ANSWER PROPS');
    // console.log(this.props.answer)
    // console.log(this.props.currentQuestion.correctAnswer)
    return (
      <>
      <li className={this.state.class} onClick={()=>this.props.answerClicked() & this.chooseClassName()}>
        {this.props.answer}
      </li>
      </>
    );
  }
}
