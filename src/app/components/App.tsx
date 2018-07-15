import * as React from 'react';
import styled from 'styled-components';
import { Source } from './Source';
import { Output } from './Output';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;


const className: string = 'App';

export class App extends React.Component<{}, {}> {
   render() {
     return (
      <div>
      <Title>JSON PARSER</Title>
      <hr/>
        <div className={`${className}__body`}>
            <Source />
            <Output />
        </div>
      </div>
        )
   }
}