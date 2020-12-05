import React from 'react';
import { Button } from 'semantic-ui-react';

export default class NextQuiz extends React.Component {
  render() {
    return <Button onClick={()=>this.props.updateQuiz()}> Next </Button>;
  }
}