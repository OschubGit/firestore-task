import React from "react";

const Lists = () => {
  return (
    <article className="panel is-primary">
      <p className="panel-heading">
        <i className="fal fa-bars"></i> Listado de tareas
      </p>
      <p className="panel-tabs">
        <a href="www.instagram.com" className="is-active">
          All
        </a>
        <a href="www.instagram.com" href="www.instagram.com">
          Public
        </a>
        <a href="www.instagram.com" href="www.instagram.com">
          Private
        </a>
        <a href="www.instagram.com" href="www.instagram.com">
          Sources
        </a>
        <a href="www.instagram.com" href="www.instagram.com">
          Forks
        </a>
      </p>
      <div className="panel-block">
        <p className="control has-icons-left">
          <input
            className="input is-primary"
            type="text"
            placeholder="Search"
          />
          <span className="icon is-left">
            <i className="fas fa-search" aria-hidden="true" />
          </span>
        </p>
      </div>
    </article>
  );
};

export default Lists;
