import styles from "./App.module.css";
import Header from "./Layout/Header/Header";
import Main from "./Layout/Main/Main";

function App() {
  return (
    <div className={styles.screen}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
