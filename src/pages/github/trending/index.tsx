import React, { useEffect } from 'react';
import Layout from '@site/src/layout';
import ButtonGroup from '@mui/material/ButtonGroup';

import { useTrending } from '@site/src/github/useTrending';
import { GhProvider, useGhState } from '@site/src/github/ghStore';

import Languages from './Languages';
import DateRange from './DateRange';
import ViewType from './ViewType';
import RepoItem from './RepoItem';
import './index.scss';

const GitHubApp = () => {
  const store = useGhState();
  const [query] = useTrending();
  useEffect(() => {
    query();
  }, [])

  return (
    <div>
      <ButtonGroup>
        <Languages />
        <DateRange />
        <ViewType />
      </ButtonGroup>
      {store?.trendingList?.map((repoProps) => <RepoItem {...repoProps} />)}
      {/* RepoItem */}
      {/* <pre>{JSON.stringify(store, null, 2)}</pre> */}
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
