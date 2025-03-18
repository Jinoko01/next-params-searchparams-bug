import Link from 'next/link';

export default function Home() {
  const id = 'abd';
  return (
    <div style={{ display: 'flex', gap: '5rem' }}>
      <Link href={`/${id}?id=123&paramId=456`}>/abc?id=123&paramId=456</Link>
    </div>
  );
}
