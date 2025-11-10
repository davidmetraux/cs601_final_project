import React from 'react';
import logo from './logo.svg';
import './style/App.css';
import Banner from './components/Banner';
import MainContentWrapper from './components/MainContentWrapper';

function App() {
  return (
    <div className="App">
      <header><Banner></Banner></header>
      <MainContentWrapper>
        <div className="App-body">
              <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      </MainContentWrapper>
    </div>
  );
}

export default App;
