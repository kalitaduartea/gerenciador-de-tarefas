import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TarefasProvider } from './context/TarefasContext';

ReactDOM.render(
  <React.StrictMode>
    <TarefasProvider>
      <App />
    </TarefasProvider>
  </React.StrictMode>,
  document.getElementById('root')
);