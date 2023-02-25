import React from 'react';
import ReactDOM from 'react-dom';
import { Demo } from './Demo';
export const App = () => {
  return (
    <React.Fragment>
      <h1>My React and TypeScript setup without CRA!</h1>
      <Demo items={['reactjs', 'nextjs', 'svelte', 'solidjs']} />
    </React.Fragment>
  );
};
