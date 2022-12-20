import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Profile from './Profile/Profile';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import LoginOption from './components/LoginOption/LoginOption';
import Signup from './components/Signup/Signup';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  
   <React.StrictMode>
    <BrowserRouter>
    <Routes>
  <Route path='/' element={<Home/>}></Route>
   <Route path='/profile' element={<Profile/>}></Route>
   <Route path='/loginoption' element={<LoginOption/>}></Route>
   <Route path='/Signup' element={<Signup/>}></Route>
   </Routes>
   </BrowserRouter>
   </React.StrictMode>
  
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
