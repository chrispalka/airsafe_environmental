import React from 'react';
import styles from '../assets/styles/Card.module.css';

const Card = ({ title, content, alt, image, srcSet }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <h1 className={styles.cardTitle}>{title}</h1>
        <p className={styles.cardText}>{content}</p>
        <img
          src={image}
          srcSet={srcSet}
          alt={alt}
          className={styles.cardImage}
          sizes='(max-width: 600px) 100vw,
        (max-width: 1200px) 50vw,
        33vw'
        />
      </div>
    </div>
  );
};

export default Card;
