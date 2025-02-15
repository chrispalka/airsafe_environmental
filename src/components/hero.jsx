import HeroImgLg from '../assets/close-up-men-looking-plan.webp';
import HeroImg320 from '../assets/close-up-men-looking-plan-320.webp';
import HeroImg768 from '../assets/close-up-men-looking-plan-768.webp';
import HeroImg1280 from '../assets/close-up-men-looking-plan-1280.webp';
import styles from '../assets/styles/Hero.module.css';

function Hero() {
  return (
    <>
      <div id='home' className={styles.heroContainer}>
        <div className={styles.content}>
          <div className={styles.heroTitleContainer}>
            <div>
              <h2>Atlanta's Top Mitigation Service Experts</h2>
            </div>
          </div>
          <div className={styles.heroSubTextContainer}>
            <span>Clean Air, Safe Home</span>
          </div>
        </div>
        <div className={styles.gradient}>
          <img
            src={HeroImgLg}
            className={styles.heroImage}
            srcSet={`
        ${HeroImg320} 320w,
        ${HeroImg768} 768w,
        ${HeroImg1280} 1280w
      `}
            sizes='(max-width: 600px) 100vw,
             (max-width: 1200px) 50vw,
             33vw'
            alt='male contactors looking at plans, blueprints, schematics, house plans'
          />
        </div>
      </div>
      {/* <div className={styles.telephoneContainer}>
        <div>
          <h2>Hablamos español</h2>
        </div>
        <div style={'display: flex;'}>
          <h2 style={'margin-top: 0'}>
            <a href='tel:+1 (404) 772-5167'>CALL NOW</a>
            <a href='tel:+1 (404) 772-5167'>+1 (404) 772-5167</a>
          </h2>
        </div>
      </div> */}
    </>
  );
}

export default Hero;
