import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ display: 'flex', gap: '5rem' }}>
      <Link href='/abc?id=123'>/abc/123</Link>
      <Link href='/abc?query=123'>/abc/123</Link>
    </div>
  );
}
