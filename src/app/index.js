import "@babel/polyfill";
import React from 'react';
import {render} from 'react-dom';

// Components
import App from './App';

// Data
import data from './data.json';

const headings = [
  "When",
  "Who",
  "Description"
]

render(
  <App data={data} title="Open Library API" headings={headings}/>,
  document.getElementById('app')
);
