import React from 'react';
import '../style/MockUsers.css';
import SearchForm from '../Header/Search';

export default function MockUsers() {

  return (
    <div>
      <header className="header">
        <img className="logo-fita"
          alt="FITA logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJZeBzWzKTd3CBOFj5CdUGjWBHKDR3Zgc47Q&s"
          />
        <h1>TRẮC NGHIỆM ONLINE</h1>
          <div className="search-bar">
            <SearchForm/>
          </div>
      </header>
    <div className="image-container">
      <p>Rèn luyện mỗi ngày, tự tin điểm cao</p>
      <img alt=""src="https://file.edubit.vn/storage/fc2ee9cfd8f54fd092257c83fa8d328ec9fbcefa/cong-cu-day-hoc-truc-tuyen.jpg"/>
      <h2 className="header-text">Vui lòng <a href="/login">đăng nhập</a> để trải nghiệm.</h2>
    </div>
    </div>
  );
}
