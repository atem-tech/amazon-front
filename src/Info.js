import React from "react";
import { Link } from "react-router-dom";
import "./Info.css";

function Info() {
  return (
    <div className="info__bar">
      <p>
        Did you know? Amazon has eliminated over 1 million tons of packaging
        material from customer orders since 2015.
        <Link>
          <span className="learn__info">Learn more</span>
        </Link>
      </p>
    </div>
  );
}

export default Info;
