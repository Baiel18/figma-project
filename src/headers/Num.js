import React from "react";
import "./Num.css"
import carta from "../media/Rectangle 207.png"
import { Link } from "react-router-dom";


export function Num() {
    return (
        <div className="n-1">
            <div>
                <h1>Контакты</h1><br />
                <div className="Num">
                    <div className="num-2">
                        <div>
                            <i class="bi bi-telephone icon"></i>
                            <h3>8 800 950-33-98</h3>
                        </div>
                        <div>
                            <i class="bi bi-envelope-at icon"></i>
                            <p>info@hodfutureacademy.ru</p>
                        </div>
                        <div>
                            <i class="bi bi-geo-alt icon"></i>
                            <p>г. Москва, ул. Ленина, д. 50</p>
                        </div>
                        <div className='f-Iconse'>
                            <Link href='#' class="bi bi-instagram"></Link>
                            <Link href='#' class="bi bi-facebook"></Link>
                            <Link href='#' class="bi bi-youtube"></Link>
                            <Link href='#' class="bi bi-telegram"></Link>
                        </div>
                    </div>
                    <img src={carta}/>
                </div>
            </div>
        </div>
    )
}