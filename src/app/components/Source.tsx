import * as React from 'react';
import styled from 'styled-components';


const className: string = 'Source';

export class Source extends React.Component<{}, {}> {
   render() {
     return (
      <div className={`${className}__body`}>
          <h1> A thing </h1>
      </div>
        )
   }
}