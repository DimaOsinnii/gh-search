import React from "react";
import { useSelector } from "react-redux";
import "../styles/components/recentRepos.less";

export default ({ onRecentClick }) => {
  const reposName = useSelector(({ allRepos }) => Object.keys(allRepos));

  return (
    <div className="recent-repos">
      {reposName.map((name, index) => (
        <button type="button" key={index} onClick={() => onRecentClick(name)}>
          {name}
        </button>
      ))}
    </div>
  );
};
