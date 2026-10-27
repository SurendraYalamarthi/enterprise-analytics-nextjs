import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>My Next.js Project</h1>
        <p>Next js app with App Router</p>
        <div style={{ display: "flex", gap: 10 }}>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/about">About</Link>
        </div>
      </main>
    </div>
  );
}
