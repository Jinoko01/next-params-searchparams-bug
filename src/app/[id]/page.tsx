import React from 'react';

export interface Props {
  // Route parameter: extracted from /recruitment-boards/list/[id] as 'id'
  params: { id: string };
  // Query parameters: expected to be passed as ?id=12&applicantId=8,
  // however, since 'id' is already used in the route, 'id' might not be present in searchParams.
  searchParams: { id?: string; paramId: string };
}

export default function ProblemExamplePage({ params, searchParams }: Props) {
  // Extracting the applicantId from the route parameters (e.g., "4")
  const { id: paramId } = params;
  // The destructuring below attempts to extract 'id' from searchParams, which might be undefined.
  const { id: searchParamId, paramId: pId } = searchParams;

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Example of Undefined Error Due to Duplicate Parameter Names</h1>
      <p>
        Param ID from route parameters: <code>{paramId}</code>
      </p>
      <p>
        SearchParam ID extracted from query parameters:{' '}
        <code>{searchParamId}</code>
      </p>
      <p>
        Applicant ID extracted from query parameters: <code>{pId}</code>
      </p>
      <p style={{ marginTop: '1rem', color: 'red' }}>
        * Note: Using the same key name in both the route and query string may
        cause the query parameter to not be properly passed.
      </p>
    </main>
  );
}
