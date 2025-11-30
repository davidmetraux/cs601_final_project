
import './style/App.css';
import Banner from './components/Banner';
import MainContentWrapper from './components/MainContentWrapper';
import {  routes } from './Routes';

import { Route, Routes } from "react-router";
import { HashRouter } from 'react-router-dom';



function App() {
  return (
    <HashRouter>
      <div className="App">
        <header><Banner></Banner></header>
        <MainContentWrapper>
          <Routes>
            { routes.map((route)=>{
              return <Route path={route.href} element={route.component}/>
            })}
          </Routes>
        </MainContentWrapper>
      </div>
    </HashRouter>
  );
}



export default App;
