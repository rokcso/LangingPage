import styles from "./profile.module.css";

export default function Profile() {
  return (
    <>
      <div className={styles.header}>
      <img src="/assets/rokcso-studio-compressed.png" height="120" alt="rokcso Studio"></img>
        <h4>Hi there 👋</h4>
        <h1>
          This is <span>rokcso</span> Studio, we build for ourselves first, and you second.
        </h1>
      </div>
    </>
  );
}
