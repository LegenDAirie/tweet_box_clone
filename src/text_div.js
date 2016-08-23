import React from 'react';
import {Row, Column, Thumbnail, Button, Sizes} from 'react-foundation';

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


  var textAreaContainerStyle = {
    backgroundColor: '#fff',
    margin: 'auto',
    width: '90%',
    borderRadius: '1px'
  };


  var buttonStyle = {
    background: '#07020D',
    borderRadius: '50%',
    color: '#fff',
    border: 'none',
  };


  return (
    <div style={textAreaContainerStyle}>
      <textarea style={textAreaStyle} placeholder="Whats up?" onChange={props.handleInputChange}/>

      <div className="grid-block-example">
        <Row upOnSmall={1} upOnMedium={2} upOnLarge={2}>
          {props.images.map(function(image) {
            return (
              <Column isColumn>
                <Button size={Sizes.TINY} style={buttonStyle} onClick={image.removeImage.bind(image)}>x</Button>
                <Thumbnail src={image.imagePreview} alt=""/>
              </Column>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default DivTextArea;
