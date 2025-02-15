import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faCalendarDay,
  faCalendarWeek,
  faClock,
  faMarker,
  faMapMarker,
} from '@fortawesome/free-solid-svg-icons';
import { Card } from '../layout/index';
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
      <div className={styles.grid}>
        <Card
          title='WHAT IS RADON?'
          content='Radon is a naturally occurring radioactive gas that forms from the
        breakdown of uranium in soil, rock, and water. It is colorless,
        odorless, and tasteless, making it impossible to detect without
        proper testing.'
          alt='Cigarettes, Radon, Infographic'
          image={RadonImg}
          srcSet={`
          ${RadonImg320} 320w,
          ${RadonImg768} 768w,
          ${RadonImg1280} 1280w
          `}
        />
        <Card
          title='HOW AM I AFFECTED?'
          content='When radon seeps into homes and buildings through foundation
        cracks and gaps, it can accumulate to dangerous levels, increasing
        the risk of lung cancer. Radon mitigation systems help reduce
        these levels, creating a safer indoor environment.'
          alt='Cigarettes, Radon, Infographic'
          image={CigaretteImg}
          srcSet={`
          ${CigaretteImg320} 320w,
          ${CigaretteImg768} 768w,
          ${CigaretteImg1280} 1280w
          `}
        />
      </div>
    </div>
  );
}

export default About;
