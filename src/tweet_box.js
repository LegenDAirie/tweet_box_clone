import React from 'react';
import inRange from 'lodash/inRange';
import CharacterCount from './character_count';
import ImageInput from './image_input';

var TweetBox = React.createClass({

  getInitialState: function() {

    return {
      text: '',
    };
  },

  handleInputChange: function(event) {

    this.setState({text: event.target.value});
  },

  render: function() {
    var { text } = this.state;
    var invalidNumberOfCharacters = !inRange(text.length, 1, 141);

    return (
      <div>
        <input placeholder="type here!" onChange={this.handleInputChange}/>
        <button disabled={invalidNumberOfCharacters}>submit!</button>
        <CharacterCount textLength={text.length}/>
        <ImageInput/>
      </div>
    );
  }
});

export default TweetBox;
