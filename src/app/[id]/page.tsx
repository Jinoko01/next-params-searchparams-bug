export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ id: string; query: string }>;
}) {
  const pm = await params;
  const sp = await searchParams;
  return (
    <div>
      <h1>Params</h1>
      <p>params: {JSON.stringify(pm)}</p>
      <h1>Search Params</h1>
      <p>searchParams: {JSON.stringify(sp)}</p>
    </div>
  );
}
