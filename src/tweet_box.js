import React from 'react';
import inRange from 'lodash/inRange';
import first from 'lodash/first';
import filter from 'lodash/filter';
import CharacterCount from './character_count';
import ImageInput from './image_input';
import DivTextArea from './text_div';
import { Button } from 'react-foundation';

var TweetBox = React.createClass({

  getInitialState: function() {
    return {
      text: '',
      images: []
    };
  },

  handleInputChange: function(event) {

    this.setState({text: event.target.value});
  },

  uploadHandler: function(event) {
    event.preventDefault();

    var reader = new window.FileReader();
    var file = first(event.target.files);
    var self = this;

    var removeImage = function() {

      var images = filter(self.state.images, (image) => {
        return this.id != image.id;
      });

      self.setState({
        images: images
      });
    };

    reader.onloadend = function() {
      var images = this.state.images.concat([{
        file: file,
        imagePreview: reader.result,
        removeImage: removeImage,
        id: Date.now()
      }]);

      this.setState({
        images: images
      });
    }.bind(this);

    reader.readAsDataURL(file);
    event.target.value = null;
  },

  render: function() {
    var { text, images } = this.state;
    var textLength = images.length > 0 ? text.length + 24: text.length;
    var invalidNumberOfCharacters = !inRange(textLength, 1, 141);

    var tweetBoxStyle = {
      backgroundColor: 'pink',
      width: '500px',
      borderRadius: '5px',
      margin: '5% auto'
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
      margin: '10px 5px 0 auto'
    };

    var submitButtonStyle = {
      marginRight: '5px'
    };

    return (
      <div style={tweetBoxStyle}>

        <div style={titleContainerStyle}>
          <h4 style={titleStyle}>Compose new Tweet</h4>
        </div>

        <div>
          <DivTextArea
            images={images}
            handleInputChange={this.handleInputChange}
          />

          <div style={toolBarStyle}>
            <ImageInput uploadHandler={this.uploadHandler}/>

            <div style={submitContainerStyle}>
              <CharacterCount  textLength={textLength}/>
              <Button style={submitButtonStyle} disabled={invalidNumberOfCharacters}>submit!</Button>
            </div>
          </div>

        </div>

      </div>
    );
  }
});

export default TweetBox;
