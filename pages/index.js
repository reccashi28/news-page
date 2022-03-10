import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Toolbar from "../components/toolbar";
import { useContext } from "react";
import { CountContext } from "../src/countContext";

export default function Home() {
  const { count, setCount } = useContext(CountContext);

  return (
    <div className="page-container">
      <Toolbar />
      <div className={styles.main}>
        <h1>Next.js News App</h1>
        <h3>Your one stop news!</h3>
        <div>This is {count}</div>
        <button onClick={() => setCount((oldCount) => oldCount + 1)}>
          update count
        </button>
      </div>
    </div>
  );
}
