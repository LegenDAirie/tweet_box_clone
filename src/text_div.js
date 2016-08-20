import React from 'react';

var DivTextArea = function(props) {

  return (
    <div className='tweet-content'>
      <div contentEditable='true'>
      </div>
      <img src={props.imagePreview} alt=""/>
      <textarea placeholder="type here!" onChange={props.handleInputChange}/>
    </div>
  );
};

export default DivTextArea;
