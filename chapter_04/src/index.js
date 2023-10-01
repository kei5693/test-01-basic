import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import AppTheme from './AppTheme';
// import AppJSX from './01-AppJSX';
// import AppProfile from './02-AppProfile';
// import AppCounter from './03-AppCounter';
import AppProducts from './04-AppProducts'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <AppTheme /> */}
    {/* <AppJSX /> */}
    {/* <AppProfile /> */}
    {/* <AppCounter /> */}
    <AppProducts />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
