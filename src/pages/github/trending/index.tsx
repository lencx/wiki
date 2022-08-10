import React, { useEffect } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Layout from '@theme/Layout';

import { useTrending } from '@site/src/github/useTrending';
import { GhProvider, useGhState } from '@site/src/github/ghStore';
import GithubLangs from './GithubLangs';

const GitHubApp = () => {
  const store = useGhState();
  const [query] = useTrending();
  useEffect(() => {
    // query();
  }, [])

  return (
    <div>
      <GithubLangs />
      <pre>{JSON.stringify(store, null, 2)}</pre>
    </div>
  )
}

export default function GithubTrending() {
  return (
    <Layout title="GitHub Trending">
      <GhProvider>
        <BrowserOnly>{() => <GitHubApp />}</BrowserOnly>
      </GhProvider>
    </Layout>
  )
}
