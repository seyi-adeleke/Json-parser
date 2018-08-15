import * as React from 'react';
import styled from 'styled-components';
import { Input } from './Input';
import { Output } from './Output';
import utils from '../utils';
import Title from './styledComponents/Title';

const className: string = 'App';
interface AppState {
  Output: string;
}

const TITLE:string  = 'JSON PARSER';
export class App extends React.Component<{}, AppState> {
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
      <div>
      <Title>{TITLE}</Title>
      <hr/>
        <React.Fragment>
          <div className={`${className}__body`}>
              <Input
                inputData={this.handleInput}
              />
              <Output
                OutputData={this.state.Output}
              />
          </div>
        </React.Fragment>
      </div>
        )
   }
}