import React, { useState } from "react";
import Item from '../components/Item';
import Header from '../components/Header';
import { styled } from 'styled-components';

 
function Main(props) {
  const ItemList = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  `;

  let item = localStorage.getItem('content');
  const [contentArr, setContentArr] = useState(item ? JSON.parse(item) : []);


  // 삭제
  const deleteNote = (deletedIndex) => {
    if(deletedIndex == null || deletedIndex == undefined) {
      alert('삭제 대상이 없습니다.');
      return false;
    }

    if(window.confirm('삭제하시겠습니까?')) {
        var copy = [...contentArr];
        copy.splice(deletedIndex, 1);
        localStorage.setItem("content", JSON.stringify(copy));
        setContentArr(copy);
        alert('삭제되었습니다.');
    }
  }

  return (
    <>
      <Header isSwitched={props.isSwitched} switchHandler={props.switchHandler} setContentArr={setContentArr} deleteAllBtn="y"/>
      <ItemList>
          {contentArr.map((content, index) => (
              <Item key={index} index={index} content={content} deleteNote={deleteNote}/>
          ))}
      </ItemList>
    </>
  );
}

export default Main;

