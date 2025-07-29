import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { Space_Mono } from "next/font/google";
const spaceMono = Space_Mono({
  weight: ["400", "700"],
  variable: "--font-space-mono",
  subsets: ["latin"],
});



export default function ListWorkouts() {
  return (
    <div className={`${styles.page} ${spaceMono.variable}`}>
      <h1>List Workouts</h1>
      <Link href={`/`}>home</Link>
    </div>
  );
}
