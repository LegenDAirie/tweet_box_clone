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

  var imgS = {
    width: '100%',
    height: '100%'
  };

  var buttonStyle = {
    background: '#07020D',
    borderRadius: '50%',
    color: '#fff',
    border: 'none'
  };

  var imgStyle = props.imagePreview ? imgStyleThumbnail: imgStyleNone;

  return (
    <div style={textAreaContainerStyle}>
      <textarea style={textAreaStyle} placeholder="Whats bugging you today?" onChange={props.handleInputChange}/>
      <div style={imgStyle}>
        <button style={buttonStyle} onClick={props.removeImage}>x</button>
        <img style={imgS} src={props.imagePreview} alt=""/>
      </div>
    </div>
  );
};

export default DivTextArea;
