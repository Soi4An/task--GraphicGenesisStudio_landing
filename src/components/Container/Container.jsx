import React from "react";
import "./Container.scss";

const Container = ({ extraClasses, children }) => (
  <div className={`container ${extraClasses}`}>{children}</div>
);

export default Container;
