import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>

                <Link href="/" className={styles.logo}>
                    <Image
                        src="/images/enciclopedia.png"
                        alt="Enciclopedia-Bruxo"
                        width={180}
                        height={180}
                        priority
                    />
                </Link>

                <nav className={styles.nav}>
                    <Link href="/" className={styles.link}>
                        Home
                    </Link>

                    <Link href="/personagens" className={styles.link}>
                        Personagens
                    </Link>

                    <Link href="/sobre" className={styles.link}>
                        Sobre
                    </Link>
                </nav>

            </div>
        </header>
    );
}
