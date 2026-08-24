'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '@/components/Header/Header';
import styles from './personagens.module.css';
import CharacterCard from '@/components/CharacterCard/CharacterCard';
import CharacterModal from '@/components/CharacterModal/CharacterModal';
import { Toaster } from 'react-hot-toast';

export default function Personagens() {
    const [personagens, setPersonagens] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState('');
    const [personagemSelecionado, setPersonagemSelecionado] = useState(null);

    useEffect(() => {
        async function buscarPersonagens() {
            try {
                const resposta = await axios.get('https://hp-api.onrender.com/api/characters');
                setPersonagens(resposta.data);
            } catch (error) {
                console.error(error);
                setErro('Não foi possível carregar os personagens.');
            } finally {
                setCarregando(false);
            }
        }

        buscarPersonagens();
    }, []);

    return (
        <main className={styles.personagens}>
            <Header />

            <section className={styles.introducao}>
                <p className={styles.sectionLabel}>ENCICLOPÉDIA MÁGICA</p>
                <h1>Personagens</h1>
                <p className={styles.description}>
                    Explore os personagens do universo mágico de Harry Potter.
                </p>
            </section>

            <section className={styles.lista}>
                {carregando && (
                    <div className={styles.loading}>
                        <div className={styles.spinner}></div>
                        <p>Carregando personagens...</p>
                    </div>
                )}

                {erro && <p className={styles.erro}>{erro}</p>}

                {!carregando && !erro && (
                    <div className={styles.grid}>
                        {personagens.map((personagem) => (
                            <CharacterCard
                                key={personagem.id}
                                personagem={personagem}
                                onClick={() => setPersonagemSelecionado(personagem)}
                            />
                        ))}
                    </div>
                )}
            </section>

            <CharacterModal
                personagem={personagemSelecionado}
                onClose={() => setPersonagemSelecionado(null)}
            />
            <Toaster />
        </main>
    );
}
