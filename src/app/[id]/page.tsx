export default function Page({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { id: string; query: string };
}) {
  return (
    <div>
      <h1>Params</h1>
      <p>params: {JSON.stringify(params)}</p>
      <h1>Search Params</h1>
      <p>searchParams: {JSON.stringify(searchParams)}</p>
    </div>
  );
}
