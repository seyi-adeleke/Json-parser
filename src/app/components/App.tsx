import * as React from 'react';
import styled from 'styled-components';
import { Input } from './Input';
import { Output } from './Output';
import utils from '../utils';

const className: string = 'App';

interface AppState {
  Output: string;
}

const TITLE:string  = 'JSON PARSER';

export default class App extends React.Component<{}, AppState> {
  state = {
    Output: '',
  }

  public handleInput = (inputData: string) => {
    const outputData = utils.parseJson(inputData);
    this.setState({
      Output: outputData,
    })
  }

  public render() {
     return (
      <React.Fragment>
        <h1>{TITLE}</h1>
        <hr/>
        <div className={`${className}__body`}>
            <Input
              inputData={this.handleInput}
            />
            <Output
              OutputData={this.state.Output}
            />
        </div>
      </React.Fragment>
        )
   }
}