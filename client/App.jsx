import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import HeroPlayer from './Components/HeroPlayer.jsx';

const App = (props) => <HeroPlayer />;

ReactDOM.render(<App />, document.getElementById('app'))