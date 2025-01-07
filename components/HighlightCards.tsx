export default function HighlightCards({
  image,
  link,
  title,
  text,
}: {
  image: any;
  link: string;
  title: string;
  text: string;
}) {
  return (
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: 16,
        padding: 30,
        margin: 10,
        width: '45%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: 100,
          height: 100,
          marginBottom: 20,
          borderRadius: 100,
          backgroundColor: 'var(--dark-blue)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        p
      </div>

      <h3 style={{ textAlign: 'center', color: 'black' }}>{title}</h3>
      <p style={{ textAlign: 'center', color: 'var(--med-blue)' }}>{text}</p>
    </div>
  );
}
