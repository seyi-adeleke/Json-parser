import * as React from 'react';
import Title from './styledComponents/Title';

const className: string = 'Output';


interface OutputProps {
  OutputData: any,
}


export class Output extends React.Component<OutputProps, {}> {
   render() {
     return (
      <div className={`${className}__body`}>
          <Title>Output</Title>
          <textarea
              rows={40}
              cols={100}
              value={this.props.OutputData}
              />
      </div>
        )
   }
}