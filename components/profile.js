import styles from "./profile.module.css";

export default function Profile() {
  return (
    <>
      <header className={styles.header}>
      <img src="/assets/rokcso-studio-compressed.png" height="120" alt="rokcso Studio"></img>
        <h2>:oh</h2>
        <h1>
          This is <span>rokcso</span>, we build for ourselves first, and you
          second.
        </h1>
      </header>
    </>
  );
}
