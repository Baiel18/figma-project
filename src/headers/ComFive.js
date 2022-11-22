import React from "react";
import { Link } from "react-router-dom"

export function ComFive(){
    return(
        <div className="component-five">
        <div className="ct-five">
           <h3>Содержание курса</h3>
           <p className="w-979">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis tellus feugiat, posuere magna et, scelerisque leo. In scelerisque pulvinar sem, et gravida mi tincidunt nec. Suspendisse a ullamcorper nisi. Duis et mauris et ex posuere dignissim vitae a diam. Praesent vulputate nulla sapien, nec auctor nibh congue eu. Nulla lectus felis, luctus et sodales ac, convallis quis urna. Etiam id ultricies dolor, non efficitur tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque in augue porttitor, ornare nulla id, hendrerit nunc.</p>
           <div className="ct-one-p">
                        <div className="ct-2">

                            <p>Срок обучения: 5 лет</p>
                        </div>
                        <div className="ct-3">

                            <p>Режим занятий: <br />2 раза в неделю по 2 академических часа</p>
                        </div>
                    </div>
                    <h2>от  4 350 ₽ в месяц</h2>
                    <Link className="btn-curs">Записаться на курс</Link>
        </div>
        </div>
    )
}