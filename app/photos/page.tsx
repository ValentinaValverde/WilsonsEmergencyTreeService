import styles from '../styles/page.module.css';
import Image from 'next/image';

import BackgroundImage from '../../public/general-photos/wilsons-background.jpeg';

export default function page() {
  const imageData = ['', '', '', '', ''];

  return (
    <>
      <div
        style={{
          height: '50vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          src={BackgroundImage}
          alt="Wilson's Emergency Tree Service Background"
          layout="fill"
          objectFit="cover"
          style={{
            filter: 'brightness(60%)',
            zIndex: -1,
            maskImage: 'linear-gradient(rgba(0, 0, 0, 1) 80%, transparent)',
          }}
        />
        <h2
          className={styles.center_text}
          style={{ color: 'white', marginTop: 50 }}
        >
          Photos
        </h2>
        <p style={{ color: 'white' }}>Lorem ipsum dolor sit amet.</p>
      </div>

      <div
        style={{
          marginTop: -50,
          backgroundColor: 'white',
          marginLeft: 50,
          marginRight: 50,
          borderRadius: 10,
          padding: 50,

          display: 'flex',
          // flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        {imageData.map((item, i) => {
          return (
            <Image
              src={item}
              alt={'Gallery Image'}
              width={300}
              height={300}
              style={{ borderRadius: 10, backgroundColor: 'black', margin: 5 }}
              key={i}
            />
          );
        })}
      </div>
    </>
  );
}
