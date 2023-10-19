import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import Main from './pages/main.js';
import Add from './pages/add.js';

//import Header from './components/Header';
import { GlobalStyle } from './styles/GlobalStyle';

function App() {
  const AppContainer = styled.div`
    padding: 50px;
  `;

  return (
    <BrowserRouter>
      <AppContainer>
      <GlobalStyle/>

      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/add" element={<Add />}></Route>
      </Routes>
    
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;