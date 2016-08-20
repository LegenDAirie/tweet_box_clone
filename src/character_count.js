import React from 'react';

var CharacterCount = function(props) {
  var { textLength } = props;
  var spaceRemaining = 140 - textLength;
  var style = {
    color: spaceRemaining > 10 ? 'grey' : 'red',
    display: 'inline-block'
  };

  return (
    <p style={style}>{spaceRemaining}</p>
  );
};

export default CharacterCount;
