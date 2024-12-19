import React, { useEffect, useState } from 'react'
import '../Header/index.css'
import SearchForm from './Search'
// import { Route, Router, Routes } from 'react-router';
// import RevisionListChap from './Revision/RevisionListChap';

export default function Headers() {
return (
  <div>
    <header className="header">
    <img className="logo-fita" alt="FITA logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJZeBzWzKTd3CBOFj5CdUGjWBHKDR3Zgc47Q&s"
    
    />
    <h2 className="header-fita">Trắc Nghiệm Online</h2>
    <SearchForm/>
    <div className="auth-links">
      <a className="clickLogin" href="/login">Đăng Nhập</a>
      <a className="clickRegister" href="/register">Đăng Ký</a>
    </div>
    
  </header>
  <div>
  
  </div>
  </div>
)
}
