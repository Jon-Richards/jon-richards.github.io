import * as React from 'react';
import './root.scss';

export class Root extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <React.Fragment>
        <div>Test</div>
      </React.Fragment>
    );
  }
}
