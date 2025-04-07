import {
  Nav,
  Hero,
  About,
  Help,
  Services,
  Contact,
  Footer,
  useScroll,
} from '../layout/index.js';

import styles from '../assets/styles/App.module.css';

export function App() {
  const { scrollDirection, topOfPage } = useScroll();

  return (
    <>
      <Nav scrollDirection={scrollDirection} top={topOfPage} />
      <Hero />
      <div id='about'>
        <About />
      </div>
      <div id='help' className={[styles.section, styles.section2].join(' ')}>
        <div className={styles.content}>
          <Help />
        </div>
      </div>
      <div
        id='services'
        className={[styles.section, styles.section1a].join(' ')}
      >
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
        <div className={styles.content}>
          <Footer />
        </div>
      </div>
    </>
  );
}
