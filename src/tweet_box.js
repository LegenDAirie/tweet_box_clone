import React from 'react';
import inRange from 'lodash/inRange';
import CharacterCount from './character_count';
import ImageInput from './image_input';
import first from 'lodash/first';
import DivTextArea from './text_div';

var TweetBox = React.createClass({

  getInitialState: function() {
    return {
      text: '',
      file: '',
      imagePreview: '',
      files: {}
    };
  },

  handleInputChange: function(event) {

    this.setState({text: event.target.value});
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
    event.target.value = null;
  },

  removeImageHandler: function() {
    this.setState({
      file: '',
      imagePreview: '',
    });
  },

  render: function() {
    var { text, imagePreview } = this.state;
    var textLength = imagePreview ? text.length + 24: text.length;
    var invalidNumberOfCharacters = !inRange(textLength, 1, 141);

    var tweetBoxStyle = {
      backgroundColor: 'pink',
      width: '500px',
      borderRadius: '5px',
      margin: 'auto'
    };

    var titleContainerStyle = {
      backgroundColor: '#ffffff',
      textAlign: 'center',
      fontSize: '12px',
      borderTopLeftRadius: '5px',
      borderTopRightRadius: '5px'
    };

    var titleStyle = {
      padding: '5px',
      color: '#465362'
    };

    var toolBarStyle = {
      display: 'flex'
    };

    var submitContainerStyle = {
      float: 'right',
      marginLeft: 'auto'
    };

    var submitButtonStyle = {
      marginRight: '5px'
    };

    return (
      <div style={tweetBoxStyle}>

        <div style={titleContainerStyle}>
          <h2 style={titleStyle}>Compose new Tweet</h2>
        </div>

        <div>
          <DivTextArea
            imagePreview={imagePreview}
            handleInputChange={this.handleInputChange}
            removeImage={this.removeImageHandler}
          />

          <div style={toolBarStyle}>
            <ImageInput uploadHandler={this.uploadHandler}/>

            <div style={submitContainerStyle}>
              <CharacterCount  textLength={textLength}/>
              <button style={submitButtonStyle} disabled={invalidNumberOfCharacters}>submit!</button>
            </div>
          </div>

        </div>

      </div>
    );
  }
});

export default TweetBox;
