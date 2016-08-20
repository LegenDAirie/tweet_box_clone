import React from 'react';


var ImageInput = function(props) {

  var { uploadHandler } = props;

  return (
    <div>
      <input type='file'
      accept='image/gif,image/jpeg,image/jpg,image/png'
      onChange={uploadHandler}
      />
    </div>
  );
};

export default ImageInput;
