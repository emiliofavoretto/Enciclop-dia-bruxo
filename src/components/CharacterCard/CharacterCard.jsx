import Image from "next/image";
import styles from "./CharacterCard.module.css";

export default function CharacterCard({ personagem, onClick }) {
    return (
        <article className={styles.card} onClick={onClick}>

            <div className={styles.imagem}>
                <Image
                    src={personagem.image || "/images/sem-foto.png"}
                    alt={personagem.name}
                    fill
                />
            </div>

            <div className={styles.informacoes}>
                <h2>{personagem.name}</h2>

                <p>
                    <strong>Casa:</strong>{" "}
                    {personagem.house || "Não informado"}
                </p>

                <p>
                    <strong>Ator/Atriz:</strong>{" "}
                    {personagem.actor || "Não informado"}
                </p>
            </div>

        </article>
    );
}