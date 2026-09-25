import Header from "@/components/Header/Header";
import Footer from '@/components/Footer/Footer';
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.home}>
            <Header />

            <section className={styles.hero}>
                <div className={styles.overlay}></div>

                <div className={styles.heroContent}>
                    <p className={styles.subtitle}>
                        Todos os personagens de Harry Potter em um unico lugar
                    </p>

                    <h1>
                        Enciclopedia-Bruxo
                    </h1>

                    <p className={styles.description}>
                        Explore personagens, casas, patronos e histórias
                        do universo mágico de Harry Potter.
                    </p>

                    <Link
                        href="/personagens"
                        className={styles.button}
                    >
                        encontre os personagens
                    </Link>
                </div>
            </section>

            <section className={styles.about}>
                <p className={styles.sectionLabel}>
                    SOBRE A Enciclopedia-Bruxo
                </p>
                <p className={styles.desc}>A Enciclopedia-Bruxo é uma enciclopédia digital criada para reunir informações sobre os personagens do universo de HarryPotter em um só lugar para qualquer fã ou interesado no universo de J.K. Rowling.</p>
            </section>

            <section className={styles.technologies}>
                <p className={styles.sectionLabel}>
                    TECNOLOGIAS
                </p>

                <div className={styles.techGrid}>
                    <div className={styles.techCard}>
                        <h3>Next.js</h3>
                        <p>Framework utilizado na aplicação.</p>
                    </div>

                    <div className={styles.techCard}>
                        <h3>React</h3>
                        <p>Construção dos componentes da interface.</p>
                    </div>

                    <div className={styles.techCard}>
                        <h3>Axios</h3>
                        <p>Consumo dos dados da API.</p>
                    </div>

                    <div className={styles.techCard}>
                        <h3>HP API</h3>
                        <p>Dados dos personagens do universo mágico.</p>
                    </div>
                </div>
            </section>
            
            <Footer/>
        </main>
    );
}
