import {
  Nav,
  Hero,
  About,
  Help,
  Services,
  Contact,
  Footer,
  SectionSeparator,
  useScroll,
} from '../layout/index.js';

import {
  wavePaths1,
  wavePaths2,
  wavePaths3,
  wavePaths4,
  wavePaths5,
} from '../lib/data.js';

import styles from '../assets/styles/App.module.css';

export function App() {
  const { scrollDirection, topOfPage } = useScroll();

  return (
    <>
      <Nav scrollDirection={scrollDirection} top={topOfPage} />
      <Hero />
      <div id='about' className={styles.svgSeparator}>
        <SectionSeparator paths={wavePaths4} viewBox='0 0 1920 1020' />
        <div className={styles.content}>
          <About />
        </div>
      </div>
      <div id='help' className={[styles.section, styles.section2].join(' ')}>
        <SectionSeparator paths={wavePaths2} />
        <div className={styles.content}>
          <Help />
        </div>
      </div>
      <div id='services' className={styles.section}>
        <SectionSeparator paths={wavePaths3} viewBox='0 0 1920 1020' />
        <div className={styles.content}>
          <Services />
        </div>
      </div>
      <div
        id='contact'
        className={[styles.section, styles.section1b].join(' ')}
      >
        <div className={styles.content}>
          <Contact />
        </div>
      </div>
      <div className={[styles.section, styles.sectionfooter].join(' ')}>
        <SectionSeparator paths={wavePaths2} />
        <div className={styles.content}>
          <Footer />
        </div>
      </div>
    </>
  );
}
