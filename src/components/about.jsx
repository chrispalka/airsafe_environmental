import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faCalendarDay,
  faCalendarWeek,
  faClock,
  faMarker,
  faMapMarker,
} from '@fortawesome/free-solid-svg-icons';
import CigaretteImg from '../assets/cigaretteinfographic.webp';
import CigaretteImg320 from '../assets/cigaretteinfographic-320.webp';
import CigaretteImg768 from '../assets/cigaretteinfographic-768.webp';
import CigaretteImg1280 from '../assets/cigaretteinfographic-1280.webp';
import RadonImg from '../assets/radoninfographic.webp';
import RadonImg320 from '../assets/radoninfographic-320.webp';
import RadonImg768 from '../assets/radoninfographic-768.webp';
import RadonImg1280 from '../assets/radoninfographic-1280.webp';
import styles from '../assets/styles/About.module.css';

function About() {
  return (
    <div className={styles.aboutContainer}>
      <h1>WHAT IS RADON?</h1>
      <div className={styles.card}>
        <div className={styles.content}>
          <div className={styles.infoGraphicContainer}>
            <p className={styles.leftJustified}>
              Radon is a naturally occurring radioactive gas that forms from the
              breakdown of uranium in soil, rock, and water. It is colorless,
              odorless, and tasteless, making it impossible to detect without
              proper testing.
            </p>
            <img
              src={RadonImg}
              className={styles.infographicImg}
              srcSet={`
                ${RadonImg320} 320w,
                ${RadonImg768} 768w,
                ${RadonImg1280} 1280w
              `}
              sizes='(max-width: 600px) 100vw,
                     (max-width: 1200px) 50vw,
                     33vw'
              alt='Cigarettes, Radon, Infographic'
            />
          </div>
        </div>
      </div>
      <h1>Insert Title Here</h1>
      <div className={styles.card}>
        <div className={styles.content}>
          <div className={styles.infoGraphicContainer}>
            <p className={styles.leftJustified}>
              When radon seeps into homes and buildings through foundation
              cracks and gaps, it can accumulate to dangerous levels, increasing
              the risk of lung cancer. Radon mitigation systems help reduce
              these levels, creating a safer indoor environment.
            </p>
            <img
              src={CigaretteImg}
              className={styles.infographicImg}
              srcSet={`
                ${CigaretteImg320} 320w,
                ${CigaretteImg768} 768w,
                ${CigaretteImg1280} 1280w
              `}
              sizes='(max-width: 600px) 100vw,
                     (max-width: 1200px) 50vw,
                     33vw'
              alt='Cigarettes, Radon, Infographic'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
