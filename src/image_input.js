import React from 'react';
import first from 'lodash/first';

var ImageInput = React.createClass({

  getInitialState: function() {
    return {
      file: '',
      imagePreview: ''
    };
  },

  uploadHandler: function(event) {
    event.preventDefault();

    var reader = new window.FileReader();
    var file = first(event.target.files);

    reader.onloadend = function() {
      this.setState({
        file: file,
        imagePreview: reader.result
      });
    }.bind(this);

    reader.readAsDataURL(file);
  },

  render: function() {

    return (
      <div>
        <input type='file'
        accept='image/gif,image/jpeg,image/jpg,image/png'
        onChange={this.uploadHandler}
        />
        <img src={this.state.imagePreview} alt="stuff"/>
      </div>
    );
  }
});

export default ImageInput;
