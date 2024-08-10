import styles from '../app/styles/page.module.css';

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
        <p>navbar</p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: 400,
          }}
        >
          <a className={styles.navbar_link}>Photos</a>
          <a className={styles.navbar_link}>Reviews</a>
          <a className={styles.navbar_link}>Facebook</a>
          <button>Call Now</button>
        </div>
      </div>
    </div>
  );
}
