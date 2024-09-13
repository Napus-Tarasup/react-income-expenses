import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// การสร้าง function compronent
// function HelloFCompronent(){
//   return <h1>Hello Function Compronent</h1>
// }

// การสร้าง class compronent
// class HelloCCompronent extends React.Component{
//   render(){
//     return <h1>Hello Class Compronent</h1>
//   }
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
