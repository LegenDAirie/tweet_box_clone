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
      imagePreview: ''
    };
  },

  handleInputChange: function(event) {

    this.setState({text: event.target.value});
  },

  uploadHandler: function(event) {
    // event.preventDefault();

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
    var { text, imagePreview } = this.state;
    var invalidNumberOfCharacters = !inRange(text.length, 1, 141);

    return (
      <div className='tweet-box-container'>

        <div className='title-container'>
          <h2>Compose new Tweet</h2>
        </div>

        <div className='tweet-form-container'>

          <DivTextArea imagePreview={imagePreview} handleInputChange={this.handleInputChange}/>

          <div className='tool-bar'>
            <ImageInput uploadHandler={this.uploadHandler}/>

            <div className='submit-container'>
              <CharacterCount  textLength={text.length}/>
              <button className='submit-button' disabled={invalidNumberOfCharacters}>submit!</button>
            </div>
          </div>

        </div>

      </div>
    );
  }
});

export default TweetBox;
