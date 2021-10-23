import React from "react";

const Records = () => {
  return (
    <article className="panel is-primary">
      <p className="panel-heading">Recordatorios</p>
      <p className="panel-tabs"></p>
      <a href="www.instagram.com" className="panel-block is-active">
        <span className="panel-icon">
          <i className="fas fa-book" aria-hidden="true" />
        </span>
        bulma
      </a>
      <a href="www.instagram.com" className="panel-block">
        <span className="panel-icon">
          <i className="fas fa-book" aria-hidden="true" />
        </span>
        marksheet
      </a>
      <a href="www.instagram.com" className="panel-block">
        <span className="panel-icon">
          <i className="fas fa-book" aria-hidden="true" />
        </span>
        minireset.css
      </a>
      <a href="www.instagram.com" className="panel-block">
        <span className="panel-icon">
          <i className="fas fa-book" aria-hidden="true" />
        </span>
        jgthms.github.io
      </a>
    </article>
  );
};

export default Records;
