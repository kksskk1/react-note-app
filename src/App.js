import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import Main from './pages/main.js';
import Add from './pages/add.js';

//import Header from './components/Header';
import { GlobalStyle } from './styles/GlobalStyle';
import Header from './components/Header';

function App() {
  const AppContainer = styled.div`
    padding: 50px;
  `;

  return (
    <AppContainer>
      <GlobalStyle/>
      
      <Header/>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/add" element={<Add />}></Route>
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;