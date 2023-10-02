import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import App from './App';
// import AppXY from './01-AppXY'
// import AppMentor from './02-AppMentor'
// import AppMentors from './03-AppMentors'
// import AppMentors from './04-AppMentors'
// import AppMentors from './05-AppMentors'
// import AppMentorsImmer from './06-AppMentorsImmer'
// import AppForm from './07-AppForm'
// import AppWrap from './08-AppWrap'
// import AppCard from './09-AppCard'
// import AppTheme from './10-AppTheme'
import AppMontorsButton from './11-AppMontorsButton'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <AppXY /> */}
    {/* <AppMentor /> */}
    {/* <AppMentors /> */}
    {/* <AppMentorsImmer /> */}
    {/* <AppForm /> */}
    {/* <AppWrap /> */}
    {/* <AppCard /> */}
    {/* <AppTheme /> */}
    <AppMontorsButton />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
