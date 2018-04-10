import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Article from './Article';
import {articles} from './articles'
import registerServiceWorker from './registerServiceWorker';

const article = articles[0]; 

ReactDOM.render(<Article article= {article} />, document.getElementById('root'));
registerServiceWorker();
