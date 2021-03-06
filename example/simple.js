// @flow
import React from 'react';
import { render } from 'react-dom';
import { Subscribe, Container } from '../src';

type CounterState = {
  count: number
};

class CounterContainer extends Container<CounterState> {
  state = { count: 0 };

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }
}

function Counter() {
  return (
    <Subscribe to={[CounterContainer]}>
      {counter => (
        <div>
          <button onClick={counter.decrement}>-</button>
          <span>{counter.state.count}</span>
          <button onClick={counter.increment}>+</button>
        </div>
      )}
    </Subscribe>
  );
}

let root = document.getElementById('root');
if (!root) throw new Error('Missing #root');
render(<Counter />, root);
