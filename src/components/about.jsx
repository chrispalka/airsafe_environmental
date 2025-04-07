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
    <>
      <div
        className={[styles.section, styles.section1a, styles.noTopPadding].join(
          ' '
        )}
      >
        <div className={styles.content}>
          <div className={styles.aboutContainer}>
            <div className={styles.flexContainer}>
              <div>
                <h1 className={styles.title}>WHAT IS RADON?</h1>
                <p className={styles.paragraphText}>
                  Our mission is to provide you with the most accurate and
                  up-to-date information about radon gas and its health risks.
                  We are committed to helping you understand the dangers of
                  radon exposure and how to mitigate those risks.
                </p>
              </div>
              <div>
                <img
                  src={RadonImg}
                  srcSet={`
                    ${RadonImg320} 320w,
                    ${RadonImg768} 768w,
                    ${RadonImg1280} 1280w
                  `}
                  alt='Cigarettes, Radon, Infographic'
                  className={styles.image}
                  sizes='(max-width: 600px) 100vw,
                         (max-width: 1200px) 50vw,
                         33vw'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={[styles.section, styles.section1b, styles.noTopPadding].join(
          ' '
        )}
      >
        <div className={styles.content}>
          <div className={styles.aboutContainer}>
            <div className={styles.flexContainer}>
              <div>
                <h1 className={styles.title}>HOW AM I AFFECTED?</h1>
                <p className={styles.paragraphText}>
                  Radon is a naturally occurring radioactive gas that forms from
                  the breakdown of uranium in soil, rock, and water. It is
                  colorless, odorless, and tasteless, making it impossible to
                  detect without proper testing.
                </p>
              </div>
              <div>
                <img
                  src={CigaretteImg}
                  srcSet={`
                    ${CigaretteImg320} 320w,
                    ${CigaretteImg768} 768w,
                    ${CigaretteImg1280} 1280w
                  `}
                  alt='Cigarettes, Radon, Infographic'
                  className={styles.image}
                  sizes='(max-width: 600px) 100vw,
                         (max-width: 1200px) 50vw,
                         33vw'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
