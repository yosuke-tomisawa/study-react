import Image from "next/image";
import styles from "@/styles/Home.module.css";

const ITEMS = [
  {
    href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    src: "https://nextjs.org/icons/file.svg",
    alt: "File icon",
    discription: "Learn",
  },
  {
    href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    src: "https://nextjs.org/icons/window.svg",
    alt: "Window icon",
    discription: "Examples",
  },
  {
    href: "https://nextjs.org?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    src: "https://nextjs.org/icons/globe.svg",
    alt: "Globe icon",
    discription: "From Page→",
  },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      {ITEMS.map((item) => {
        return (
          <a
            key={item.discription}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src={item.src}
              alt={item.alt}
              width={16}
              height={16}
            />
            {item.discription}
          </a>
        );
      })}
    </footer>
  );
}
