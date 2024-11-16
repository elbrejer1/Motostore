import Image from 'next/image';

export default function MotostoreLogo() {
  return (
    <Image
        src="/tonas-logo.png"
        width={180}
        height={100}
        className='m-auto sm:m-0'
        alt='Website logo'
    />
  );
}
