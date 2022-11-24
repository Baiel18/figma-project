import React, { useState, useEffect } from "react";
import './Curs.css'
import imgOne from '../media/shutterstock_1913950771.png'
import { Link } from "react-router-dom";
import imgzag from "../media/Vector.png"
import imgzag2 from "../media/Vector (2).png"
import imgzag3 from "../media/Vector (3).png"
import animal from "../media/Сова-01 1.png"
import diplom from "../media/Диплом-01 1.png"
import { ContentFour } from "./ContentFour";
import { ComFive } from "./ComFive";

export function Curs(props) {
    const [comm, setComm] = useState([])

    useEffect(() => {
        setComm(props.card)
    }, [props.card])

    function Remove(id) {
        setComm(
            comm.filter(card => card.id !== id)
        )
    }

    function Getplus(){
        return alert("правда ли вы хотите добавить")
    }
    return (
        <>
            <div className="content-one">
                <div className="ct-one">
                    <h1>Веб-разработчик</h1>
                    <p className="ct-1">
                        Программа для тех кто...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis tellus feugiat, posuere magna et, scelerisque leo. In scelerisque pulvinar sem, et gravida mi tincidunt nec.
                    </p>
                    <div className="ct-one-p">
                        <div className="ct-2">

                            <p>Срок обучения: 5 лет</p>
                        </div>
                        <div className="ct-3">

                            <p>Режим занятий: <br />2 раза в неделю по 2 академических часа</p>
                        </div>
                    </div>
                    <h2>от  4 350 ₽ в месяц</h2>
                    <h2>1 занятие бесплатное</h2>
                    <Link className="btn-1" to=''>Записаться на пробное занятие</Link>
                </div>
                <div>
                    <img className="ani" src={imgOne} alt="img-1" />
                </div>
            </div>
            <div className="content-two">
                <div className="zags">
                    <img src={animal} alt="animal" />
                    <div className="zag">
                        <img src={imgzag} alt="zag" />
                        <h3>Заголовок</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat id, laoreet volutpat risus. Cras condimentum, ligula eget
                        </p>
                    </div>
                    <div className="zag">
                        <img src={imgzag2} alt="zag" />
                        <h3>Заголовок</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat id, laoreet volutpat risus. Cras condimentum, ligula eget
                        </p>
                    </div>
                    <div className="zag">
                        <img src={imgzag3} alt="zag" />
                        <h3>Заголовок</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat id, laoreet volutpat risus. Cras condimentum, ligula eget
                        </p>
                    </div>
                </div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/0hJKwc9UwY8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div className="ct-developer">
                    <h3>Кто такой веб-разработчик</h3>
                    <p className="ct-two-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis tellus feugiat, posuere magna et, scelerisque leo. In scelerisque pulvinar sem, et gravida mi tincidunt nec. Suspendisse a ullamcorper nisi. Duis et mauris et ex posuere dignissim vitae a diam. Praesent vulputate nulla sapien, nec auctor nibh congue eu. Nulla lectus felis, luctus et sodales ac, convallis quis urna. Etiam id ultricies dolor, non efficitur tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. </p>
                </div>
                <div>
                    <h3>Вы научитесь:</h3>
                    <div className="nav-u">
                        <div>
                            <div className="ct-two-nav">
                                <i class="bi bi-check2-circle"></i>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </div>
                            <div className="ct-two-nav">
                                <i class="bi bi-check2-circle"></i>
                                <p>Praesent vulputate nulla sapien, nec auctor nibh congue eu. </p>
                            </div>
                            <div className="ct-two-nav">
                                <i class="bi bi-check2-circle"></i>
                                <p>Lorem ipsum dolor sit amet</p>
                            </div>
                        </div>
                        <div>
                            <div className="ct-two-nav">
                                <i class="bi bi-check2-circle"></i>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </div>
                            <div className="ct-two-nav">
                                <i class="bi bi-check2-circle"></i>
                                <p>Praesent vulputate nulla sapien, nec auctor nibh congue eu. </p>
                            </div>
                            <div className="ct-two-nav">
                                <i class="bi bi-check2-circle"></i>
                                <p>Lorem ipsum dolor sit amet</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ct-tree">
                <div className="content-tree">
                    <div className="t-c">
                        <h3>Эта программа<br />‍подойдет тем, кто</h3>
                    </div>
                    <div className="c-tree-3div">
                        <div>
                            <h5>Никогда не работал</h5>
                            и хочет получить востребованную профессию, трудоустроиться или создать собственный бизнес
                            с нуля
                        </div>
                        <div>
                            <h5>Хочет научиться новому</h5>
                            и попробовать себя в интересной
                            и востребованной професии
                        </div>
                        <div>
                            <h5>Хочет сменить работу</h5>
                            и получить актуальную высокооплачиваемую
                            специальность в IT
                        </div>
                    </div>
                    <Link className="btn-curs">Записаться на курс</Link>
                </div>
            </div>
            <ContentFour />
            <ComFive />
            <div className="ct-six">
                <div className="content-six">
                    <h3>Наши преподаватели</h3>
                    <div className="cards">
                        <div>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU" alt="card" />
                            <h5>Имя Фамилия</h5>
                            <p>
                                Выпускница Гарвардского Университета.
                                Более 10 лет играет в шахматы
                                и участвует в турнирах.
                            </p>
                        </div>
                        <div>
                            <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" alt="card" />
                            <h5>Имя Фамилия</h5>
                            <p>
                                Выпускница Гарвардского Университета.
                                Более 10 лет играет в шахматы
                                и участвует в турнирах.
                            </p>
                        </div>
                        <div>
                            <img src="https://gchumanrights.org/files/eiuc/testimonials-home-2019/testimonial-sx-ema1-open.jpg" alt="card" />
                            <h5>Имя Фамилия</h5>
                            <p>
                                Выпускница Гарвардского Университета.
                                Более 10 лет играет в шахматы
                                и участвует в турнирах.
                            </p>
                        </div>
                        <div>
                            <img src="https://st4.depositphotos.com/5586578/21657/i/600/depositphotos_216576058-stock-photo-facial-expression-happy-smiling-joyful.jpg" alt="card" />
                            <h5>Имя Фамилия</h5>
                            <p>
                                Выпускница Гарвардского Университета.
                                Более 10 лет играет в шахматы
                                и участвует в турнирах.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-siven">
                <div className="pt-60">
                    <h3>Трудоустройство или создание бизнеса</h3>
                    <div className="crds">
                        <div>
                            <h4>Трудоустройство</h4>
                            <p>Полученный уровень образования позволит претендовать на реальные вакансии и начать карьеру в сфере IT. Мы подберем подходящие предложения, собрем портфолио и резюме, подготовим к собеседованию, научимся выполнять тестовые задания и поможем с трудоустройством.</p>
                            <h6>Планируемый доход:</h6>
                            <h2>80 000—200 000 ₽ в месяц</h2>
                        </div>
                        <div>
                            <h4>Создание бизнеса</h4>
                            <p>
                                Совместно с другими студентами, вы будете продвигать, разрабатывать, тестировать,
                                и реализовывать бизнес-идеи. А также получите дополнительное обучение по запуску бизнеса от экспертов приглашенных компаний.F
                            </p><br />
                            <h6>Планируемый доход:</h6>
                            <h2>120 000—400 000 ₽ в месяц</h2>
                        </div>
                    </div>
                </div>
                <div className="pt-84">
                    <h3>Ваше будущее резюме</h3>
                    <div className="big-card">
                        <div className="bc-1">
                            <div className="bc-1-1">
                                <img className="br-50" src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" alt="card" />
                                <div>
                                    <p>Должность:</p>
                                    <h6>Веб-разработчик</h6>
                                </div>
                            </div>
                            <div>
                                <p>Зарплата от:</p>
                                <h6>90 000 ₽</h6>
                            </div>
                        </div>
                        <hr />
                        <div>
                            <h3>Профессиональные навыки:</h3>
                            <div className="nav-u">
                                <div>
                                    <div className="ct-two-nav">
                                        <i class="bi bi-check2-circle"></i>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                    </div>
                                    <div className="ct-two-nav">
                                        <i class="bi bi-check2-circle"></i>
                                        <p>Praesent vulputate nulla sapien, nec auctor nibh congue eu. </p>
                                    </div>
                                    <div className="ct-two-nav">
                                        <i class="bi bi-check2-circle"></i>
                                        <p>Lorem ipsum dolor sit amet</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="ct-two-nav">
                                        <i class="bi bi-check2-circle"></i>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                    </div>
                                    <div className="ct-two-nav">
                                        <i class="bi bi-check2-circle"></i>                                        <p>Praesent vulputate nulla sapien, nec auctor nibh congue eu. </p>
                                    </div>
                                    <div className="ct-two-nav">
                                        <i class="bi bi-check2-circle"></i>
                                        <p>Lorem ipsum dolor sit amet</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="df-1">
                            <img src={diplom} alt="diplom" />
                            <div className="tx-641">
                                <h5>Диплом ХОД Future Academy</h5>
                                <p>Подтвердит, что вы прошли курс, и станет дополнительным аргументом при устройстве на работу.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ct-six">
                <div className="content-six">
                    <h3>Отзывы наших студентов</h3>
                    <div className="cards-df">
                        {props.cards.map(card => {
                            return (
                                <div key={card.id}>
                                    <img className="card-img" src={card.img} alt="img" />
                                    <h6>{card.tema}</h6>
                                    <p>{card.title}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="ct">
                <div className="commit">
                    <h3>Найдите ответ на свой вопрос</h3>
                    {comm.map(item => {
                        return (
                            <div className="comm" key={item.id}>
                                <div className="rem" >
                                    <h6>{item.tma2}</h6>
                                    <i onClick={() => Remove(item.id)} class="bi bi-x-lg"></i>
                                </div>
                                <p>{item.tma_title}</p>
                            </div>
                        )
                    })}
                    <div className="plus">
                        <h6>Нужно ли знать математику?</h6>
                        <i onClick={Getplus} class="bi bi-plus-lg"></i>
                    </div>
                    <div className="plus">
                        <h6>Сколько часов в неделю мне нужно будет уделять курсу?</h6>
                        <i onClick={Getplus} class="bi bi-plus-lg"></i>
                    </div>
                    <div className="plus">
                        <h6>Кто будет помогать мне на курсе?</h6>
                        <i onClick={Getplus} class="bi bi-plus-lg"></i>
                    </div>
                </div>
            </div>
        </>
    )
}