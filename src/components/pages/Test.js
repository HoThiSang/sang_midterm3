import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeProvider";

const Test = () => {
  const context = useContext(ThemeContext)
  return (
    <div className={context.theme}>
      <div className="textclass">
        <h1 className="x-large text-primary">Github Finder App</h1>
        <p className="lead">
          This is a simple web application for finding Github users and their
          repositories.
        </p>
      </div>
    </div>
  );
};
export default Test;
