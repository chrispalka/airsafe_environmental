import { useState, useEffect } from 'preact/hooks';
import { Hamburger, useScrollLock } from '../layout/index';
import logo from '../assets/logo.webp';

import styles from '../assets/styles/Nav.module.css';

const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

function Nav({ scrollDirection, top }) {
  const [navActive, setNavActive] = useState(false);
  const [isMobile, setIsMobile] = useState(
    window.matchMedia('(max-width: 768px)').matches
  ); // Initial check for mobile
  const { lockScroll, unlockScroll } = useScrollLock();

  // Debounced resize event to handle screen size changes
  useEffect(() => {
    const updateIsMobile = debounce(() => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    }, 200);

    window.addEventListener('resize', updateIsMobile);
    return () => {
      window.removeEventListener('resize', updateIsMobile);
    };
  }, []);

  const toggleShowNav = () => {
    if (isMobile) {
      setNavActive(!navActive);
      if (navActive) {
        unlockScroll();
      } else {
        lockScroll();
      }
    }
  };

  const items = [
    {
      name: 'Home',
      href: '#home',
    },
    {
      name: 'About',
      href: '#about',
    },
    {
      name: 'Services',
      href: '#services',
    },
    {
      name: 'Contact',
      href: '#contact',
    },
  ];

  return (
    <>
      <div className={styles.hamburgerContainer} onClick={toggleShowNav}>
        <Hamburger isOpen={navActive} onClick={toggleShowNav} />
      </div>
      <div
        className={
          navActive
            ? [styles.navContainer, styles.navActive].join(' ')
            : top
            ? [styles.navContainer, styles.navContainerTop].join(' ')
            : !scrollDirection
            ? [styles.navContainer, styles.scrollDirection].join(' ')
            : styles.navContainer
        }
      >
        <div className={styles.navItemsContainer}>
          <img
            src={logo}
            alt='yardhouse solutions logo non medical transport van'
            className={styles.logo}
          />
          <div className={styles.linkContainer}>
            {items.map((item, index) => (
              <>
                <div className={styles.linkWrapper}>
                  <a
                    href={item.href}
                    onClick={toggleShowNav}
                    key={index}
                    className={styles.links}
                  >
                    {item.name}
                  </a>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Nav;
