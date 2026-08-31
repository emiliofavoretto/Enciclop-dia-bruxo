'use client'

import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

function lerTema() {
    if (typeof document === 'undefined') return 'dark';

    const match = document.cookie.match(/(?:^|; )theme=([^;]+)/);
    return match?.[1] === 'light' ? 'light' : 'dark';
}

export default function Header() {
    const [tema, setTema] = useState('dark');

    useEffect(() => {
        const temaInicial = lerTema();
        setTema(temaInicial);
        document.documentElement.dataset.theme = temaInicial;
    }, []);

    function alternarTema() {
        const novoTema = tema === 'dark' ? 'light' : 'dark';

        document.documentElement.dataset.theme = novoTema;
        document.cookie = `theme=${novoTema}; path=/; max-age=31536000; samesite=lax`;
        setTema(novoTema);
    }

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
                    <button
                        type="button"
                        className={styles.temas}
                        onClick={alternarTema}
                        aria-label={tema === 'dark' ? 'ativar modo claro' : 'ativar modo escuro'}
                        title={tema === 'dark' ? 'Modo claro' : 'Modo escuro'}>
                        {tema === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
                    </button>
                </nav>
            </div>
        </header>
    );
}
