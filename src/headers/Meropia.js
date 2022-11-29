import React from "react";
import { Link } from "react-router-dom";
import "./Meropia.css"
import imgman from "../media/shutterstock_1709750299.png"

export function Meropia() {
    return (
        <div className="meropiatia">
            <div className="t-1">
                <h3>Все мероприятия</h3>
            </div>
            <div className="wrapper">
                <div className="box1">
                    <div>
                        <h1>25</h1>
                        <h3>ноября</h3>
                    </div>
                    <div className="txt-b1">
                        <h3>День открытых дверей</h3>
                        <p>
                            Приглашаем всех желающих на бесплатную экскурсию
                            в мир востребованных профессий и полезных навыков
                        </p>
                    </div>
                    <Link to="#" >Записаться <i class="bi bi-chevron-right"></i></Link>
                </div>
                <div className="box2">
                    <p>Встреча</p>
                    <div className="df">
                        <i class="bi bi-clipboard2-heart"></i>
                        <h5>Заголовок мероприятия</h5>
                    </div>
                    <p>Краткий анонс мероприятия в нескольких предложениях. Текст, который будет заинтересовывать пользователя</p>
                    <p>16 ноября 2021</p>
                </div>
                <div className="box3">
                    <p>Встреча</p>
                    <div className="df">
                        <i class="bi bi-clipboard2-heart"></i>
                        <h5>Заголовок мероприятия</h5>
                    </div>
                    <p>Краткий анонс мероприятия в нескольких предложениях. Текст, который будет заинтересовывать пользователя</p>
                    <p>16 ноября 2021</p>
                </div>
                <div className="box4">
                    <p>Встреча</p>
                    <div className="df">
                        <i class="bi bi-clipboard2-heart"></i>
                        <h5>Заголовок мероприятия</h5>
                    </div>
                    <p>Краткий анонс мероприятия в нескольких предложениях. Текст, который будет заинтересовывать пользователя</p>
                    <p>16 ноября 2021</p>
                </div>
                <div className="box5">
                    <img src={imgman}/>
                    <div className="b5-p">
                    <p>Встреча</p>
                    <h5>Заголовок мероприятия</h5>
                    <p>Краткий анонс мероприятия в нескольких предложениях. Текст, который будет заинтересовывать пользователя</p>
                    <p>16 ноября 2021</p>
                    </div>
                </div>
                <div className="box6">
                <h4>Заголовок мероприятия</h4>
                    <p>Краткий анонс мероприятия в нескольких предложениях. Текст, который будет заинтересовывать пользователя</p>
                </div>
                <div className="box7">
                    <p>Встреча</p>
                    <div className="df">
                        <i class="bi bi-clipboard2-heart"></i>
                        <h5>Заголовок мероприятия</h5>
                    </div>
                    <p>Краткий анонс мероприятия в нескольких предложениях. Текст, который будет заинтересовывать пользователя</p>
                    <p>16 ноября 2021</p>
                </div>
                <div className="box8">
                    <p>Встреча</p>
                    <div className="df">
                        <i class="bi bi-clipboard2-heart"></i>
                        <h5>Заголовок мероприятия</h5>
                    </div>
                    <p>Краткий анонс мероприятия в нескольких предложениях. Текст, который будет заинтересовывать пользователя</p>
                    <p>16 ноября 2021</p>
                </div>
                <div className="box9">
                    <p>Встреча</p>
                    <div className="df">
                        <i class="bi bi-clipboard2-heart"></i>
                        <h5>Заголовок мероприятия</h5>
                    </div>
                    <p>Краткий анонс мероприятия в нескольких предложениях. Текст, который будет заинтересовывать пользователя</p>
                    <p>16 ноября 2021</p>
                </div>
            </div>
        </div>
    )
}