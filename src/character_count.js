import React from 'react';

var CharacterCount = function(props) {
  var { textLength } = props;
  var spaceRemaining = 140 - textLength;
  var color =  spaceRemaining > 10 ? 'grey' : 'red';
  var style = {color: color};

  return (
    <p style={style}>{spaceRemaining}</p>
  );
};

export default CharacterCount;
