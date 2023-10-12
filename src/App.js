import Header from './components/Header';
import Item from './components/Item';
import styled from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';

 
function App() {
  const AppContainer = styled.div`
    padding: 50px;
   
    > .itemList {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
    }

    > .itemList > .item {
      width: calc(100% / 5);
    }
  `;

  return (
    <div>
      <GlobalStyle />

      <AppContainer>
        <Header/>
        <div className='itemList'>
          <div className='item'><Item/></div>
          <div className='item'><Item/></div>
          <div className='item'><Item/></div>
          <div className='item'><Item/></div>
          <div className='item'><Item/></div>
          <div className='item'><Item/></div>
          <div className='item'><Item/></div>
          <div className='item'><Item/></div>
          <div className='item'><Item/></div>
          <div className='item'><Item/></div>
          <div className='item'><Item/></div>
          <div className='item'><Item/></div>
          <div className='item'><Item/></div>
          <div className='item'><Item/></div>
          <div className='item'><Item/></div>
          <div className='item'><Item/></div>
          <div className='item'><Item/></div>
          <div className='item'><Item/></div>
          <div className='item'><Item/></div>
          <div className='item'><Item/></div>
          <div className='item'><Item/></div>
          <div className='item'><Item/></div>
          <div className='item'><Item/></div>
          <div className='item'><Item/></div>
          <div className='item'><Item/></div>
          <div className='item'><Item/></div>
          <div className='item'><Item/></div>
        </div>
      </AppContainer>
    </div>
  );
}

export default App;
