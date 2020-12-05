import React from 'react';
import NextQuiz from './NextQuiz'
import { Divider } from 'semantic-ui-react';
import {getMessage} from '/src/data/messages'

export default class Summary extends React.Component {

  render() {
// console.log(getMessage)
    return (
      <>
        You got <b>{this.props.questionsCorrect}</b> out of <b>{this.props.currentAnswers.length}</b> questions right.
        <Divider hidden/>
        {getMessage()}
        <Divider hidden/>
        <NextQuiz updateQuiz={this.props.updateQuiz} />
      </>
    )
  }
}
