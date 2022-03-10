import React, { useContext } from "react";
import Toolbar from "../components/toolbar";
import styles from "../styles/About.module.css";
import { CountContext } from "../src/countContext";

function About() {
  const { count } = useContext(CountContext);
  return (
    <div className="page-container">
      <Toolbar />
      <div className={styles.main}>
        <h1>This is a practice project</h1>
        <p>and this is count value: {count}</p>
      </div>
    </div>
  );
}

export default About;
