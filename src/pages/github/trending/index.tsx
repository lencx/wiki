import React, { useEffect } from 'react';
import Layout from '@theme/Layout';

import { useTrending } from '@site/src/github/useTrending';
import { GhProvider, useGhState } from '@site/src/github/ghStore';

const GitHubApp = () => {
  const store = useGhState();
  const [query] = useTrending();
  useEffect(() => {
    query();
  }, [])

  return (
    <div>
      <pre>{JSON.stringify(store, null, 2)}</pre>
    </div>
  )
}

export default function GithubTrending() {
  return (
    <Layout title="GitHub Trending">
      <GhProvider>
        <GitHubApp />
      </GhProvider>
    </Layout>
  )
}
