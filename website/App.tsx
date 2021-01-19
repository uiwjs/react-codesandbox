import React from 'react';
import Markdown from '@uiw/react-markdown-preview';
import GitHubCorners from '@uiw/react-github-corners';
import logo from './logo.svg';
import MDStr from '../README.md';
import Example from './Example';
import ExampleKKT from './ExampleKKT';
import ExampleNoChild from './ExampleNoChild';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <GitHubCorners fixed href="https://github.com/uiwjs/react-codesandbox" target="__blank" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>React CodeSandbox</h2>
        <div>
          <Example />
          <ExampleKKT />
          <ExampleNoChild />
        </div>
        <span className="App-arrow"></span>
      </header>
      <Markdown
        style={{ paddingTop: 25, maxWidth: 680, margin: '0 auto' }}
        source={MDStr.replace(/([\s\S]*)<!--dividing-->/, '')}
      />
    </div>
  );
}

export default App;
