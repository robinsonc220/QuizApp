import React from 'react';
// import NextQuiz from './NextQuiz'
import { Header } from 'semantic-ui-react';

export default class Quiz extends React.Component {
  render() {

    return (
<>
        <Header as="h3"> {this.props.currentQuestion.text} </Header>

        <ol type='A' >
          {this.props.renderAnswers()}
        </ol>

        {this.props.renderResponses()}
      </>

    )
  }
}
