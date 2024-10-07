import Image from "next/image";
import styles from "@/styles/Home.module.css";

export function Links(props) {
  console.log(props);
  return (
    <>
      <Image
        className={styles.logo}
        src="https://nextjs.org/icons/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />

      {props.children}

      <button onClick={props.onClick}>ボタン</button>

      <div className={styles.ctas}>
        <a
          className={styles.primary}
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className={styles.logo}
            src="https://nextjs.org/icons/vercel.svg"
            alt="Vercel logomark"
            width={20}
            height={20}
          />
          Deploy now
        </a>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.secondary}
        >
          Read our docs
        </a>
      </div>
    </>
  );
}
