import styles from './footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footertext}>
                <p>
                    &copy; <span id="year">2026</span> <span>Todos os direitos reservados</span>
                </p>
            </div>
        </footer>
    );
}
