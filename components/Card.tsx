import Image, { StaticImageData } from 'next/image';
import PlaceholderImage from '../public/next.svg';

export default function Card({
  image = PlaceholderImage,
  title,
  text,
  flipped = false,
}: {
  image?: StaticImageData;
  title: string;
  text: string;
  flipped?: boolean;
}) {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginTop: 20,
        marginBottom: 20,
      }}
    >
      {flipped ? (
        <>
          <Image
            src={image}
            alt="Card Image"
            width={400}
            height={450}
            style={{
              borderRadius: 10,
              marginRight: 100,
              objectFit: 'cover',
              backgroundColor: 'black',
              boxShadow:
                'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
            }}
          />

          <div style={{ width: 375 }}>
            <h2>{title}</h2>
            <p style={{ color: 'var(--med-blue)' }}>{text}</p>
          </div>
        </>
      ) : (
        <>
          <div style={{ width: 375, textAlign: 'right' }}>
            <h2>{title}</h2>
            <p style={{ color: 'var(--med-blue)' }}>{text}</p>
          </div>

          <Image
            src={image}
            alt="Card Image"
            width={400}
            height={450}
            style={{
              borderRadius: 10,
              marginLeft: 100,
              objectFit: 'cover',
              backgroundColor: 'black',
              boxShadow:
                'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
            }}
          />
        </>
      )}
    </div>
  );
}
