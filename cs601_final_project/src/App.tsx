import React from 'react';
import logo from './logo.svg';
import './style/App.css';
import Banner from './components/Banner';
import Pathfinder from './pages/Pathfinder';
import MainContentWrapper from './components/MainContentWrapper';

import { Route, Routes } from "react-router";
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <header><Banner></Banner></header>
        <MainContentWrapper>
          <Routes>
            <Route path="/" element={
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
              </div>} 
            />
            <Route path="/test" element={<div>test</div>} />
            <Route path="/pathfinder" element={<Pathfinder/>} />
          </Routes>
        </MainContentWrapper>
      </div>
    </HashRouter>
  );
}



export default App;
