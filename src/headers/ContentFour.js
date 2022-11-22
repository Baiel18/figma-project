import React from "react";
import "./Ctfour.css"
import photo from "../media/Group.png"
import photo2 from "../media/Group 798.png"
import photo3 from "../media/Group (1).png"
import photo4 from "../media/Group 801.png"
import Swiper from "./Swiper"

export function ContentFour() {
    return (
        <>
            <div className="content-four">
                <div>
                    <h3>Принципы обучения</h3>
                    <div className="ct-four-div">
                        <div>
                            <img src={photo} alt="nait" />
                            <p>
                                Передовой подход
                                к образовательному процессу
                            </p>
                        </div>
                        <div>
                            <img src={photo2} alt="nait" />
                            <p>
                                Непрерывное усовершенствование
                                и пополнение базы курсов
                            </p>
                        </div>
                        <div>
                            <img src={photo3} alt="nait" />
                            <p>
                            Только практикующие преподаватели
                            </p>
                        </div>
                        <div>
                            <img src={photo4} alt="nait" />
                            <p>
                            Сопровождение на всех этапах. От начала обучения до трудоустройства
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3>Сколько зарабатывает веб-разработчик</h3>
                    <div className="programm">
                        <div className="junior">
                            <h5>Junior</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis tellus feugiat, posuere magna et, scelerisque leo. </p>
                            <h4>от  80 000 ₽ в месяц</h4>
                        </div>
                        <div className="middle">
                            <h5>Middle</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis tellus feugiat, posuere magna et, scelerisque leo. </p>
                           <h4>от  150 000 ₽ в месяц</h4>
                        </div>
                        <div className="middle-2">
                            <h5>Middle</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis tellus feugiat, posuere magna et, scelerisque leo. </p>
                           <h4>от  200 000 ₽ в месяц</h4>
                        </div>
                    </div>
                </div>
                <div>
                    <h3>Как проходит обучение</h3>
                    <p className="w-979">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis tellus feugiat, posuere magna et, scelerisque leo. In scelerisque pulvinar sem, et gravida mi tincidunt nec. Suspendisse a ullamcorper nisi. Duis et mauris et ex posuere dignissim vitae a diam. Praesent vulputate nulla sapien, nec auctor nibh congue eu. </p>
                </div>
                <Swiper/>
            </div>
        </>
    )
}