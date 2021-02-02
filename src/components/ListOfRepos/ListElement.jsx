import React from "react";
import Star from "../../images/star.svg";
import "../../styles/components/listOfRepos/listElement.less";

export default ({ name, stargazers_count, html_url }) => {
  const handleClick = (e) => {
    e.preventDefault();
    window.open(html_url);
  };

  return (
    <li
      className="repos-list__element element"
      onClick={handleClick}
      onMouseDown={handleClick}
      onKeyDown={handleClick}
    >
      <h6>{name}</h6>
      <div className="element__stars">
        <p>{stargazers_count}</p>
        <Star />
      </div>
    </li>
  );
};
