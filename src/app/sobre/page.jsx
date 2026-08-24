import Header from '@/components/Header/Header';
import styles from './sobre.module.css';

export default function Sobre() {
    return (
        <main className={styles.pagina}>
            <Header />

            <section className={styles.container}>
                <h1>Sobre o projeto</h1>

                <p className={styles.descricao}>
                    Conheça um pouco mais sobre a WizardDex, sua equipe
                    e as tecnologias utilizadas no desenvolvimento.
                </p>

                <div className={styles.grid}>
                    <div className={styles.turma}>
                        <h3>🚀 Turma</h3>
                        <p>2TDS1</p>
                    </div>

                    <div className={styles.curso}>
                        <h3>💻 Curso</h3>
                        <p>Curso de Desenvolvimento de Sistemas</p>
                    </div>

                    <div className={styles.professores}>
                        <h3>👨‍🏫 Professores</h3>
                        <p>Thiago</p>
                        <p>Marcelo</p>
                    </div>

                    <div className={styles.integrantes}>
                        <h3>👤 Integrantes</h3>
                        <p>Emilio Favoretto</p>
                        <p>Danilo Jorge</p>
                    </div>
                </div>
            </section>
        </main>
    );
}