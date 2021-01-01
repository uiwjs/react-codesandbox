import React from 'react';
import Markdown from '@uiw/react-markdown-preview';
import logo from './logo.svg';
import MDStr from '../README.md';
import Example from './Example';
import ExampleKKT from './ExampleKKT';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>React CodeSandbox</h2>
        <div>
          <Example />
          <ExampleKKT />
        </div>
      </header>
      <Markdown
        style={{ paddingTop: 25, maxWidth: 680, margin: '0 auto' }}
        source={MDStr.replace(/([\s\S]*)<!--dividing-->/, '')}
      />
    </div>
  );
}

export default App;
