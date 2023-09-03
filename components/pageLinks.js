import Link from "next/link";
import styles from "./pageLinks.module.css";

export default function PageLinks({ pageLinksInfo }) {
  return (
    <>
      <div className={styles.linkPage}>
        {pageLinksInfo.map((page, index) => (
          <div key={index} className={styles.link}>
            <Link href={page.link}>
              <h3>{page.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
