/** @jsx jsx */

import * as React from 'react';
import { css, jsx } from '@emotion/core';
import { STYLES } from './styles';

/** Props for the test component. */
interface TestComponentProps {
  /** Just a prop. */
  foo: string;
}

/**
 * A simple test component.  This is intended for debugging purposes only.
 * @param props Props required to instantiate the TestComponent.
 */
function TestComponent (props: TestComponentProps): JSX.Element {
  const { foo } = props;

  return (
    <div 
      css={css(STYLES.root)}
    >
      {foo}
    </div>
  );
}

const testMemo = React.memo<TestComponentProps>(TestComponent);

export {testMemo as TestComponent, TestComponentProps};