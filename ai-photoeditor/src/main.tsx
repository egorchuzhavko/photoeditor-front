import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/global.css';
import Photoeditor from './components/screens/Photoeditor/Photoeditor';
import PhotoeditorForm from './components/screens/Photoeditor/photoeditor-form/PhotoeditorForm';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Photoeditor />
    <PhotoeditorForm />
  </React.StrictMode>
);
