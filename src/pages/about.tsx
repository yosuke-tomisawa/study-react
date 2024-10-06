import Head from "next/head";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import { Footer } from "../../components/Footer";
import { Links } from "../../components/Links";
import { Header } from "../../components/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>
          <Header />
          <h1>About Page</h1>
          <Links onClick={() => alert("アバウトページです")}>
            <ol>
              <li>
                Get started by editing <code>about.pages</code>.
              </li>
              <li>Save and see your changes instantly.</li>
            </ol>
          </Links>
        </main>

        <Footer />
      </div>
    </>
  );
}
