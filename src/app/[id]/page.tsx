import React from 'react';

export interface Props {
  // Route parameter: extracted from /recruitment-boards/list/[id] as 'id'
  params: Promise<{ id: string }>;
  // Query parameters: expected to be passed as ?id=12&paramId=8,
  // however, since 'id' is already used in the route, 'id' might not be present in searchParams.
  searchParams: Promise<{ id?: string; paramId: string }>;
}

export default async function ProblemExamplePage({
  params,
  searchParams,
}: Props) {
  // Extracting the paramId from the route parameters (e.g., "4")
  const { id: paramId } = await params;
  // The destructuring below attempts to extract 'id' from searchParams, which might be undefined.
  const { id: searchParamId, paramId: pId } = await searchParams;

  return (
    <main
      style={{ fontSize: '2rem', padding: '2rem', fontFamily: 'sans-serif' }}
    >
      <h1>Example of Undefined Error Due to Duplicate Parameter Names</h1>
      <p>
        Param ID from route parameters: <code>{paramId}</code>
      </p>
      <p>
        SearchParam ID extracted from query parameters:{' '}
        <code>{searchParamId}</code>
      </p>
      <p>
        Param ID extracted from query parameters: <code>{pId}</code>
      </p>
      <p style={{ marginTop: '1rem', color: 'red' }}>
        * Note: Using the same key name in both the route and query string may
        cause the query parameter to not be properly passed.
      </p>
    </main>
  );
}
