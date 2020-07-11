import React from 'react';
import ReactDOM from 'react-dom';
import PaperDough from './PaperDough';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PaperDough />, div);
  ReactDOM.unmountComponentAtNode(div);
});
