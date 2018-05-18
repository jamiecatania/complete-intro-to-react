import React from 'react';
import { render } from 'react-dom';

const ce = React.createElement;

const myTitle = function(props) {
  return ce(
    'div',
    null,
    ce('h1', { style: { color: props.color } }, props.title)
  );
};

const MyFirstComponent = function() {
  return ce(
    'div',
    { id: 'my-first-component' },
    ce(myTitle, { title: 'Game of Thrones', color: 'YellowGreen' }),
    ce(myTitle, { title: 'Stranger Things', color: 'GreenYellow' }),
    ce(myTitle, { title: 'Rick and Morty', color: 'LimeGreen' }),
    ce(myTitle, { title: 'Silicon Valley', color: 'Peru' })
  );
};

render(ce(MyFirstComponent), document.getElementById('app'));
