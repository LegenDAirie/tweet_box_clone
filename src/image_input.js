import React from 'react';
import { Button } from 'react-foundation';

var ImageInput = function(props) {
  var { uploadHandler } = props;
  var inputContainerStyle = {
    margin: '10px 0 0 10px',
  };

  function clickInputTag() {
    document.getElementById('uploadImage').click();
  }

  return (
    <div style={inputContainerStyle}>
      <input
      id='uploadImage'
      type='file'
      style={{display: 'none'}}
      accept='image/gif,image/jpeg,image/jpg,image/png'
      onChange={uploadHandler}
      />

    <Button type='button' onClick={clickInputTag}>Upload Image</Button>

    </div>
  );
};

export default ImageInput;
