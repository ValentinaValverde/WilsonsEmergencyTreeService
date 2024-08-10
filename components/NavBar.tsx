import styles from '../app/styles/page.module.css';
import Image from 'next/image';
import Logo from '../public/logo.png';

export default function NavBar() {
  return (
    <div
      style={{
        position: 'fixed',
        width: '100vw',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'var(--dark-blue)',
          padding: 20,
        }}
      >
        <a href="/">
          <Image src={Logo} alt="Logo" width={70} height={60} />
        </a>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: 400,
          }}
        >
          <a className={styles.navbar_link} href="/photos">
            Photos
          </a>
          <a className={styles.navbar_link} href="/reviews">
            Reviews
          </a>
          <a
            className={styles.navbar_link}
            href="https://www.facebook.com/DavidWilsonTreeService/"
            target="_blank"
          >
            Facebook
          </a>
          <button>Call Now</button>
        </div>
      </div>
    </div>
  );
}
