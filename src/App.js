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
  const cards = [
    {id:1,title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nisl at augue dapibus, id tristique lorem placerat. Curabitur pellentesque est bibendum urna facilisis varius. In hac habitasse platea dictumst. In ut dui sodales, scelerisque eros non, ultrices magna. ",tema:"Студент курса «WEB-разработчик»",img:"https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"},
    {id:3,title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nisl at augue dapibus, id tristique lorem placerat. Curabitur pellentesque est bibendum urna facilisis varius.",tema:'Студент курса «WEB-разработчик»',img:"https://gchumanrights.org/files/eiuc/testimonials-home-2019/testimonial-sx-ema1-open.jpg"},
    {id:4,title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nisl at augue dapibus, id tristique lorem placerat. Curabitur pellentesque est bibendum urna facilisis varius. In hac habitasse platea dictumst. In ut dui sodales, scelerisque eros non, ultrices magna. ",tema:"Студент курса «WEB-разработчик»",img:"https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"},
    {id:2,title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nisl at augue dapibus, id tristique lorem placerat. Curabitur pellentesque est bibendum urna facilisis varius.",tema:'Студент курса «WEB-разработчик»',img:"https://gchumanrights.org/files/eiuc/testimonials-home-2019/testimonial-sx-ema1-open.jpg"},
    {id:5,title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nisl at augue dapibus, id tristique lorem placerat. Curabitur pellentesque est bibendum urna facilisis varius. In hac habitasse platea dictumst. In ut dui sodales, scelerisque eros non, ultrices magna. ",tema:"Студент курса «WEB-разработчик»",img:"https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"},
    
  ]
  const card = [
    {id:6,tma2:"У меня нет опыта в программировании. Подойдёт ли мне этот курс?",tma_title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, neque sit amet aliquam cursus, ante urna porta mauris, eget venenatis risus turpis ac nisl. Aenean blandit, nulla tincidunt efficitur placerat, ante nisl auctor ipsum, in auctor mauris lacus sed nibh. Quisque id imperdiet metus, non semper dui. Phasellus pellentesque vitae leo in dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id aliquam nunc. Sed dignissim, nibh quis dapibus dapibus, ex sapien ultricies leo, sit amet placerat arcu sem id sem."}

  ]

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
        <Route path='/' element={<Curs cards={cards} card={card}/>}/>
        <Route path='/Meropia' element={<Meropia/>}/>
        <Route/>
        <Route/>
        <Route/>
        <Route/>
        <Route/>
      </Routes>
      <footer>
        <div>
          <img src={Logofooter} alt="footerLogo" /><br/>
          <Link to="/num">8 800 950-33-98</Link><br/>
          <p>г. Москва, ул. Ленина, д. 50</p><br/>
          <p>info@hodfutureacademy.ru</p><br/>
          <div className='f-Icons'>
            <Link href='#' class="bi bi-instagram"></Link>
            <Link href='#' class="bi bi-facebook"></Link>
            <Link href='#' class="bi bi-youtube"></Link>
            <Link href='#' class="bi bi-telegram"></Link>
          </div>
          <p>© ХОД, Future Academy</p>
        </div>
        <div>
          <h3>Детям</h3>
          <p>
            Робототехника<br/>
            Создание игр<br/>
            Программирование<br/>
            Мультимедиа<br/>
            Soft skills<br/>
            Шахматы<br/>
            Блогинг<br/>
            Создание игр<br/>
            Программирование<br/>
            Мультимедиа<br/>
            Soft skills<br/>
          </p>
        </div>
        <div className='f-div'>
          <h3>Подросткам</h3>
          <p>
            Web-разработка<br/>
            Прикладное программирование<br/>
            Графическое моделирование<br/>
            Game Development<br/>
            Soft skills<br/>
            Разработчик мобильных приложений<br/>
            Блогинг<br/>
            Создание игр<br/>
            Программирование<br/>
            Мультимедиа<br/>
            Soft skills<br/>
          </p>
        </div>
        <div className='f-div'>
          <h3>Взрослым</h3>
          <p>
            Разработчик игр на Unity<br/>
            Разработка ПО<br/>
            Графический Дизайн<br/>
            Тестировщик ПО<br/>
            Интернет Маркетинг<br/>
            Java-разработчик<br/>
            Python–разработчик<br/>
            IOS-разработчик<br/>
            Программирование<br/>
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
