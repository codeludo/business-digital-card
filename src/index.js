import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Card from './routes/Card';


const root = ReactDOM.createRoot(document.getElementById('card-wraper'));
root.render(
  <React.StrictMode>
    <Card />
  </React.StrictMode>
);
