import Link from "next/link";
import styles from "./products.module.css";

export default function Products({ producstInfo }) {
  return (
    <>
      {producstInfo.map((product, index) => (
        <article key={index} className={styles.productArticle}>
          <Link href={product.link} className={styles.product}>
            <div>
              <img
                src={product.logo}
                alt={product.name}
                className={styles.logo}
              ></img>
            </div>
            <div className={styles.detail}>
              <h3>{product.name}</h3>
              <p>{product.slogan}</p>
            </div>
          </Link>
        </article>
      ))}
    </>
  );
}
