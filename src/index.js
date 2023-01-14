import React from 'react';
import { BrowserRouter } from "react-router-dom";
import {createRoot} from 'react-dom/client';
import App from './App';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const root= createRoot(document.getElementById('root'));

root.render(<BrowserRouter><App /></BrowserRouter>);
