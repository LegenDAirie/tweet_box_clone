import React from 'react';

var CharacterCount = function(props) {
  var { textLength } = props;
  var spaceRemaining = 140 - textLength;
  var style = {
    color: spaceRemaining > 10 ? '#465362' : 'red',
    display: 'inline-block',
    marginRight: '5px'
  };

  return (
    <p style={style}>{spaceRemaining}</p>
  );
};

export default CharacterCount;
