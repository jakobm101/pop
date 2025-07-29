import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

import { Space_Mono } from "next/font/google";
const spaceMono = Space_Mono({
  weight: ["400", "700"],
  variable: "--font-space-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Workout</title>
        <meta name="description" content="by JakobM101" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles.page} ${spaceMono.variable}`}>
        <main
          className={styles.main}
          style={{ color: "lime", fontFamily: "var(--font-space-mono)" }}
        >
          <h1>Workout</h1>
          <Link href={`/workouts`}>List: workouts</Link>
        </main>

        <footer className={styles.footer}></footer>
      </div>
    </>
  );
}
