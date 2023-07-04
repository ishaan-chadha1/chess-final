import React from 'react';
import { createRoot } from 'react-dom/client';
import Game from './Game';
import './index.css';

const rootElement = document.getElementById('root');
createRoot(rootElement).render(<Game />);
