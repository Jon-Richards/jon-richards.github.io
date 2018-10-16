import * as React from 'react';
import './../css/app.scss';
import './../css/mod.scss';


export class Root extends React.Component<any, any>{
  constructor (props:any) {
    super(props);
  }

  render ():JSX.Element {
    return (
      <div>Test</div>
    );
  }
}