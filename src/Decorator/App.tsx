import React from 'react';
import { observer } from './api';
import { Counter } from './store';

@observer
export class App extends React.Component<{ counter: Counter }> {

  render(): React.ReactNode {
    const { counter } = this.props;

    return (
      <button
        type="button"
        onClick={(): void => {
          counter.value += 1;
        }}
      >
        {counter.value}
      </button>
    );
  }

}
