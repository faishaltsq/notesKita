/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/homepage';

// import style
import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(<App />);