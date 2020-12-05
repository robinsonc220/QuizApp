import React from 'react';
import { Button } from 'semantic-ui-react';

export default class NextQuestion extends React.Component {
  render() {
    return <Button onClick={()=>this.props.updateQuestion()}> Next </Button>;
  }
}