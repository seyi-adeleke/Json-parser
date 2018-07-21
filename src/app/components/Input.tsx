import * as React from 'react';
import styled from 'styled-components';
import Title from './styledComponents/Title';
import utils from '../utils';

const className: string = 'Input';

interface InputState {
  input: string;
  validInputData: Boolean;
}

interface InputProps {
  inputData: Function,
}

export class Input extends React.Component<InputProps, InputState> {
  state = {
    input: '',
    validInputData: false,
  }

  public handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({
      input: event.target.value
    })
    if(utils.isJSON(this.state.input)) {
      this.setState({
        validInputData: true,
      })
      this.props.inputData(this.state.input);
    };
  }

  public handlePaste = (event: React.ClipboardEvent<HTMLTextAreaElement>) => {
   const data: string = event.clipboardData.getData('Text');
    if (utils.isJSON(data)) {
      this.setState({
        validInputData: true,
      })
      this.props.inputData(data);
    }
  }

  public render() {
     return (
      <div className={`${className}__body`}>
          <Title>Input</Title>
          <textarea
              rows={40}
              cols={100}
              value={this.state.input}
              onChange={this.handleInput}
              onPaste={this.handlePaste}
              />
      </div>
        )
  }
}