import PlaceholderIcon from '../public/next.svg';
import PlaceholderImage from '../public/vercel.svg';
import Image from 'next/image';

export default function ReviewCard({
  image = PlaceholderImage,
  icon = PlaceholderIcon,
  text,
  name,
}: {
  image?: HTMLImageElement;
  icon?: HTMLImageElement;
  text: string;
  name: string;
}) {
  return (
    <div
      style={{
        backgroundImage: `url(${image.src})`,
        borderRadius: 25,
        width: 300,
        height: 400,
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        margin: 5,
      }}
    >
      <div
        style={{
          backgroundColor: 'var(--dark-blue)',
          color: 'white',
          padding: 20,
          borderRadius: '0px 0px 25px 25px',
          textAlign: 'center',
        }}
      >
        <Image
          src={icon}
          alt="Review Person Icon"
          width={100}
          height={100}
          style={{
            backgroundColor: 'white',
            borderRadius: 100,
            marginTop: -50,
          }}
        />
        <div style={{ height: 150, overflow: 'scroll' }}>
          <p style={{ paddingTop: 20 }}>"{text}"</p>
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
}
