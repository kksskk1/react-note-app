import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import Main from './pages/main.js';
import Add from './pages/add.js';

//import Header from './components/Header';
import { GlobalStyle } from './styles/GlobalStyle';

import backgroundImage from './images/background.png';
import backgroundImage2 from './images/background2.png';


function App() {
  const AppContainer = styled.div`
    padding: 50px;
  `;

  const [isSwitched, setIsSwitced] = useState(false);
  const switchHandler = () => {
    setIsSwitced(!isSwitched);
  
    if(isSwitched) {
      document.body.style.setProperty(`background-image`, `url(${backgroundImage})`);
    } else {
      document.body.style.setProperty(`background-image`, `url(${backgroundImage2})`);
    }
  };

  return (
    <BrowserRouter>
      <AppContainer>
      <GlobalStyle/>

      <Routes>
        
        <Route path="/" element={<Main isSwitched={isSwitched} switchHandler={switchHandler}/>}></Route>
        <Route path="/add" element={<Add isSwitched={isSwitched} switchHandler={switchHandler}/>}></Route>
      </Routes>
    
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;