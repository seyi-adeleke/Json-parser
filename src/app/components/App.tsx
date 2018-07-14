import * as React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;


export class App extends React.Component<{}, {}> {
   render() {
     return (
      <div>
        <Title>JSON PARSER</Title>
      </div>
        )
   }
}