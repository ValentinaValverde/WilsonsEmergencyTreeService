import Image from 'next/image';
import Icon from '../public/vercel.svg';

export default function Highlights() {
  return (
    <div
      style={{
        backgroundColor: 'var(--dark-blue)',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 50,
        paddingBottom: 50,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image src={Icon} alt="Icon" width={100} height={100} />
        <p>Precision Scheduling</p>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image src={Icon} alt="Icon" width={100} height={100} />
        <p>Oustanding Results</p>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image src={Icon} alt="Icon" width={100} height={100} />
        <p>Happy Customers</p>
      </div>
    </div>
  );
}
