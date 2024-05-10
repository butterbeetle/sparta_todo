import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header_main}>
        <h1>Todo List</h1>
      </div>
    </header>
  );
}
