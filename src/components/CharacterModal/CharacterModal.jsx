'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './CharacterModal.module.css';
import toast from 'react-hot-toast';

export default function CharacterModal({ personagem, onClose }) {
    const [favoritado, setFavoritado] = useState(false);

    if (!personagem) {
        return null;
    }

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button className={styles.fechar} onClick={onClose} type='button'>
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

                    <button className={styles.favorito} onClick={() => {
                            setFavoritado(!favoritado);
                                if (favoritado) {
                                    toast.error('Personagem removido dos favoritos.');
                                } else {
                                    toast.success('Personagem adicionado aos favoritos! ❤️');
                                }
                            }}>
                        {favoritado ? '❤️' : '♡'}
                    </button>
                </div>
            </div>
        </div>
    );
}
