import Link from "next/link";
import styles from "../app/not-found.module.css";

export default function NotFound() {
    return (
        <main className={styles.container}>
            <div className={styles.content}>
                <span className={styles.emoji}>🪄</span>
                <h1 className={styles.title}>404</h1>
                <h2 className={styles.subtitle}>Página não encontrada</h2>
                <p className={styles.text}>Parece que esta página desapareceu em algum lugar do mundo mágico.</p>
                <Link href="/" className={styles.button}>🏠 Voltar para Home</Link>
            </div>
        </main>
    );
}