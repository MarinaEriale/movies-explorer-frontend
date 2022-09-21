import React from "react";
import "./AboutProject.css";

function AboutProject() {
  return (
    <>
      <h2 className="aboutProject__title">О проекте</h2>
      <ul className="aboutProject__table">
        <li className="aboutProject__table-cell">
          <p className="aboutProject__table-heading">
            Дипломный проект включал 5 этапов
          </p>
          <p className="aboutProject__table-text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className="aboutProject__table-cell">
          <p className="aboutProject__table-heading">
            На выполнение диплома ушло 5 недель
          </p>
          <p className="aboutProject__table-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className="aboutProject__scale">
        <div className="aboutProject__first-week">
          <p className="aboutProject__scale-weeks">1 неделя</p>
          <p className="aboutProject__scale-code">Back-end</p>
        </div>
        <div className="aboutProject__four-weeks">
          <p className="aboutProject__scale-weeks aboutProject__scale-weeks_four">
            4 недели
          </p>
          <p className="aboutProject__scale-code">Front-end</p>
        </div>
      </div>
    </>
  );
}

export default AboutProject;
