import React from 'react';
import './App.css';
import Logo from "./media/Group 1.png"
import logoa from "./media/Group 14.png"
import logoa5 from "./media/Group 830.png"
import logoa6 from "./media/Group 593.png"
import Logofooter from "./media/Group 802.png"
import { Routes, Route, Link } from "react-router-dom"
import { Meropia } from './headers/Meropia';
import { Curs } from './headers/Curs';

function App() {
  return (
    <div className="content">
      <header className="header">
        <img src={Logo} alt="logo" />
        <div className='a-1'>      
          <img src={logoa} alt="logo-A"/>
         <Link to="/">Все курсы</Link>
        </div>
        <Link to="/Meropia">Мероприятия</Link>
        <Link to="/Базы знаний">Базы знаний</Link>
        <Link to="/Карьера">Карьера</Link>
        <div className='a-5'>
        <img src={logoa5} alt="logoa5"/>
        <Link to="/Нижний Новгород">Нижний Новгород</Link>
        <i class="bi bi-caret-down"></i>
        </div>
        <Link to="/num">8 800 950-33-98</Link>
        <div className='a-6'>
        <img src={logoa6} alt="logoa6"/>
        <Link to="/Войти">Войти</Link>
        </div>
      </header>
      <Routes>
        <Route path='/' element={<Curs/>}/>
        <Route path='/Meropia' element={<Meropia/>}/>
        <Route/>
        <Route/>
        <Route/>
        <Route/>
        <Route/>
      </Routes>
      <footer>
        <div>
          <img src={Logofooter} alt="footerLogo" />
          <Link to="/num">8 800 950-33-98</Link>
          <p>г. Москва, ул. Ленина, д. 50</p>
          <p>info@hodfutureacademy.ru</p>
          <div className='f-Icons'>
            <span class="bi bi-instagram"></span>
            <span class="bi bi-facebook"></span>
            <span class="bi bi-youtube"></span>
            <span class="bi bi-telegram"></span>
          </div>
          <p>© ХОД, Future Academy</p>
        </div>
        <div>
          <h3>Детям</h3>
          <p>
            Робототехника
            Создание игр
            Программирование
            Мультимедиа
            Soft skills
            Шахматы
            Блогинг
            Создание игр
            Программирование
            Мультимедиа
            Soft skills
          </p>
        </div>
        <div>
          <h3>Подросткам</h3>
          <p>
            Web-разработка
            Прикладное программирование
            Графическое моделирование
            Game Development
            Soft skills
            Разработчик мобильных приложений
            Блогинг
            Создание игр
            Программирование
            Мультимедиа
            Soft skills
          </p>
        </div>
        <div>
          <h3>Взрослым</h3>
          <p>
            Разработчик игр на Unity
            Разработка ПО
            Графический Дизайн
            Тестировщик ПО
            Интернет Маркетинг
            Java-разработчик
            Python–разработчик
            IOS-разработчик
            Программирование
          </p>
        </div>
        <div>
          <h3>Информация</h3>
          <p>
            Об академии
            Мероприятия
            Новости
            База знаний
            Карьера
            Контакты
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
