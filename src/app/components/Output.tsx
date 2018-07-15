import * as React from 'react';

const className: string = 'Output';

export class Output extends React.Component<{}, {}> {
   render() {
     return (
      <div className={`${className}__body`}>
          <h1> A thing </h1>
      </div>
        )
   }
}