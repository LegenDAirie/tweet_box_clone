import React from 'react';
import inRange from 'lodash/inRange';
import CharacterCount from './character_count';
import ImageInput from './image_input';
import first from 'lodash/first';


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
    var { text } = this.state;
    var invalidNumberOfCharacters = !inRange(text.length, 1, 141);

    // <div contentEditable='true' role='textbox' placeholder="What's happening?">
    // </div>
    return (
      <div className='tweet-box-container'>

        <div className='title-container'>
          <h2>Compose new Tweet</h2>
        </div>

        <div className='tweet-form-container'>

          <div className='tweet-content'>
            <div contentEditable='true'>
            </div>
            <img src={this.state.imagePreview} alt=""/>
            <textarea placeholder="type here!" onChange={this.handleInputChange}/>
          </div>

          <div className='tool-bar'>
            <ImageInput uploadHandler={this.uploadHandler}/>
            <CharacterCount textLength={text.length}/>
            <button disabled={invalidNumberOfCharacters}>submit!</button>
          </div>

        </div>

      </div>
    );
  }
});

export default TweetBox;
