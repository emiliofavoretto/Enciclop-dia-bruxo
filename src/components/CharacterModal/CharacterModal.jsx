'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './CharacterModal.module.css';
import toast from 'react-hot-toast';

export default function CharacterModal({ personagem, onClose }) {
    const [favoritado, setFavoritado] = useState(false);

    useEffect(() => {
        if (!personagem) return;

        const favoritos = JSON.parse(sessionStorage.getItem('favoritos')) || [];
        const jaEhFavorito = favoritos.includes(personagem.id);
        setFavoritado(jaEhFavorito);
    }, [personagem]);

    if (!personagem) {
        return null;
    }

    const handleToggleFavorito = () => {
        const favoritos = JSON.parse(sessionStorage.getItem('favoritos')) || [];
        let novosFavoritos;

        if (favoritado) {

            novosFavoritos = favoritos.filter((id) => id !== personagem.id);
            toast.error(`${personagem.name} removido dos favoritos!`);
        } else {
            novosFavoritos = [...favoritos, personagem.id];
            toast.success(`${personagem.name} adicionado aos favoritos!`);
        }

        sessionStorage.setItem('favoritos', JSON.stringify(novosFavoritos));

        const todosPersonagens = JSON.parse(localStorage.getItem('wizarddex-personagens')) || [];
        const existeNoStorage = todosPersonagens.some((p) => p.id === personagem.id);

        if (!existeNoStorage) {
            todosPersonagens.push(personagem);
            localStorage.setItem('wizarddex-personagens', JSON.stringify(todosPersonagens));
        }

        setFavoritado(!favoritado);
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button className={styles.fechar} onClick={onClose} type="button">
                    ×
                </button>

                <div className={styles.imagemContainer}>
                    {personagem.image ? (
                        <Image
                            src={personagem.image}
                            alt={personagem.name || 'Personagem'}
                            width={280}
                            height={400}
                            className={styles.imagem}
                        />
                    ) : (
                        <div className={styles.semImagem}>Sem imagem</div>
                    )}
                </div>

                <div className={styles.informacoes}>
                    <h2>{personagem.name || 'Nome desconhecido'}</h2>

                    <p>
                        <strong>Casa:</strong> {personagem.house || 'Não informada'}
                    </p>

                    <p>
                        <strong>Espécie:</strong> {personagem.species || 'Não informada'}
                    </p>

                    <p>
                        <strong>Patrono:</strong> {personagem.patronus || 'Não informado'}
                    </p>

                    <p>
                        <strong>Data de nascimento:</strong>{' '}
                        {personagem.dateOfBirth || 'Não informada'}
                    </p>

                    <p>
                        <strong>Cor dos olhos:</strong> {personagem.eyeColour || 'Não informada'}
                    </p>

                    <p>
                        <strong>Cor do cabelo:</strong> {personagem.hairColour || 'Não informada'}
                    </p>

                    <p>
                        <strong>Ator/Atriz:</strong> {personagem.actor || 'Não informado'}
                    </p>

                    <p>
                        <strong>Situação:</strong> {personagem.alive ? 'Vivo' : 'Morto'}
                    </p>

                    <button
                        onClick={handleToggleFavorito}
                        className={favoritado ? styles.btnRemover : styles.btnAdicionar}>
                        {favoritado ? '💖' : '💟'}
                    </button>
                </div>
            </div>
        </div>
    );
}
