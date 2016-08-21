import React from 'react';

var DivTextArea = function(props) {
  var textAreaStyle = {
    border: 'none',
    resize: 'none',
    backgroundColor: 'transparent',
    outline: 'none',
    display: 'block',
    width: '100%',
    height: '50px',
    fontSize: '14px',
    padding: '8px 10px',
    color: '#465362'
  };

  var imgStyleNone = {
    display: 'none'
  };

  var imgStyleThumbnail = {
    width: '50%',
    margin: '8px 10px'
  };

  var textAreaContainerStyle = {
    backgroundColor: '#fff',
    margin: 'auto',
    width: '90%',
    borderRadius: '1px'
  };

  var imgStyle = props.imagePreview ? imgStyleThumbnail: imgStyleNone;

  return (
    <div style={textAreaContainerStyle}>
      <textarea style={textAreaStyle} placeholder="Whats bugging you today?" onChange={props.handleInputChange}/>
      <img style={imgStyle} src={props.imagePreview} alt=""/>
    </div>
  );
};

export default DivTextArea;
