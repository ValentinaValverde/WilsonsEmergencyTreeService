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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginTop: 20,
        marginBottom: 20,

        width: '100%',
        // backgroundColor: 'pink',
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
            }}
          />

          <div style={{ width: 350 }}>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
        </>
      ) : (
        <>
          <div style={{ width: 350, textAlign: 'right' }}>
            <h2>{title}</h2>
            <p>{text}</p>
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
            }}
          />
        </>
      )}
    </div>
  );
}
