import React from "react";
import './Curs.css'
import imgOne from '../media/shutterstock_1913950771.png'
import { Link } from "react-router-dom";
import imgzag from "../media/Vector.png"
import imgzag2 from "../media/Vector (2).png"
import imgzag3 from "../media/Vector (3).png"
import animal from "../media/Сова-01 1.png"
import { ContentFour } from "./ContentFour";
import { ComFive } from "./ComFive";

export function Curs() {
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
                                <i class="bi bi-check-circle"></i>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </div>
                            <div className="ct-two-nav">
                                <i class="bi bi-check-circle"></i>
                                <p>Praesent vulputate nulla sapien, nec auctor nibh congue eu. </p>
                            </div>
                            <div className="ct-two-nav">
                                <i class="bi bi-check-circle"></i>
                                <p>Lorem ipsum dolor sit amet</p>
                            </div>
                        </div>
                        <div>
                            <div className="ct-two-nav">
                                <i class="bi bi-check-circle"></i>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </div>
                            <div className="ct-two-nav">
                                <i class="bi bi-check-circle"></i>
                                <p>Praesent vulputate nulla sapien, nec auctor nibh congue eu. </p>
                            </div>
                            <div className="ct-two-nav">
                                <i class="bi bi-check-circle"></i>
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
            <ContentFour/>
            <ComFive />
        </>
    )
}