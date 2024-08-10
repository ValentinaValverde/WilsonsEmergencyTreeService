import PlaceholderImage from '../public/next.svg';
import Image from 'next/image';

export default function Footer() {
  return (
    <div
      style={{
        backgroundColor: 'var(--dark-blue)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 50,
      }}
    >
      <Image
        src={PlaceholderImage}
        alt="Footer Logo"
        width={200}
        height={200}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
        }}
      >
        <a>Photos</a>
        <a>Reviews</a>
        <a>Facebook</a>
        <button>Call Now for a Free Quote!</button>
      </div>
    </div>
  );
}
