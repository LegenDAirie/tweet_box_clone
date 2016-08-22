import React from 'react';

var DivTextArea = function(props) {
  var textAreaStyle = {
    border: 'none',
    resize: 'none',
    backgroundColor: 'transparent',
    outline: 'none',
    display: 'block',
    width: '95%',
    height: '50px',
    fontSize: '14px',
    padding: '8px 2.5%',
    color: '#465362'
  };

  var imgContainerStyleNone = {
    display: 'none'
  };

  var imgContainerStyleThumbnail = {
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

  var imgStyle = props.images.length > 0 ? imgContainerStyleThumbnail: imgContainerStyleNone;

  return (
    <div style={textAreaContainerStyle}>
      <textarea style={textAreaStyle} placeholder="Whats up?" onChange={props.handleInputChange}/>

      {props.images.map(function(image) {
        return (
          <div style={imgStyle}>
            <button style={buttonStyle} onClick={image.removeImage.bind(image)}>x</button>
            <img style={imgS} src={image.imagePreview} alt=""/>
          </div>
        );
      })}

    </div>
  );
};

export default DivTextArea;
