import React from 'react';


var ImageInput = function(props) {
  var { uploadHandler } = props;
  var inputContainerStyle = {
    margin: '10px 0 0 10px'
  };

  return (
    <div style={inputContainerStyle}>
      <input
      type='file'
      accept='image/gif,image/jpeg,image/jpg,image/png'
      onChange={uploadHandler}
      />

    </div>
  );
};

export default ImageInput;
