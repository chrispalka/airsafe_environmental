import styles from '../assets/styles/Card.module.css';
import { Icon, Button } from '../layout/index.js';

const Card = ({
  title,
  content,
  alt,
  image,
  srcSet,
  icon,
  iconColor,
  showButton = false,
  buttonLink,
  buttonText,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.iconContainer}>
          <Icon icon={icon} size='xl' color={iconColor} />
        </div>
        <h1 className={styles.cardTitle}>{title}</h1>
        <p className={styles.cardText}>{content}</p>
        {image && (
          <img
            src={image}
            srcSet={srcSet}
            alt={alt}
            className={styles.cardImage}
            sizes='(max-width: 600px) 100vw,
          (max-width: 1200px) 50vw,
          33vw'
          />
        )}
        {showButton && (
          <a href={buttonLink} className={styles.buttonLink}>
            <Button type='button' className={styles.button}>
              {buttonText}
            </Button>
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
