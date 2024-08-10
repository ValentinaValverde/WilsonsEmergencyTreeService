import Image from 'next/image';
import PlaceholderImage from '../public/next.svg';

export default function Card({
  image = PlaceholderImage,
  title,
  text,
  flipped = false,
}: {
  image?: string;
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
            width={300}
            height={300}
            style={{ borderRadius: 25, marginRight: 200 }}
          />

          <div style={{ width: 350 }}>
            <h1>{title}</h1>
            <p>{text}</p>
          </div>
        </>
      ) : (
        <>
          <div style={{ width: 350, textAlign: 'right' }}>
            <h1>{title}</h1>
            <p>{text}</p>
          </div>

          <Image
            src={image}
            alt="Card Image"
            width={300}
            height={300}
            style={{ borderRadius: 25, marginLeft: 200 }}
          />
        </>
      )}
    </div>
  );
}
