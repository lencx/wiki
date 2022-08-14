import React, { useEffect, useReducer } from 'react';
import Layout from '@site/src/layout';
import ButtonGroup from '@mui/material/ButtonGroup';

import { capitalizeFirstLetter } from '@site/src/utils/tool';
import { useTrending } from '@site/src/github/useTrending';
import { GhProvider, useGhState } from '@site/src/github/ghStore';
import Languages from '@site/src/components/GitHub/Languages';
import DateRange, { RangeType } from '@site/src/components/GitHub/DateRange';
import ViewGrid from '@site/src/components/GitHub/ViewGrid';
import './index.scss';

const GitHubApp = () => {
  const url = new URL(location.href);
  const urlLang = url.searchParams.get('language');
  const urlRange = capitalizeFirstLetter(url.searchParams.get('range') || 'weekly') as RangeType;

  const store = useGhState();
  const [queryParams, setQuery] = useReducer((o: Record<string, string>, n: Record<string, string>) => ({ ...o, ...n }), {});
  const [query] = useTrending();

  useEffect(() => {
    if (Object.keys(queryParams).length === 0) return;
    const _params = Object.entries(queryParams).map(i => `${i[0]}=${i[1]}`).join('&')
    history.replaceState({}, '', `?${_params}`);
    query(queryParams);

  }, [queryParams])

  const render = () => {
    if (store?.trendingLoading) return <div className="repo-loading">loading...</div>;
    if (store?.trendingList?.length > 0) return <ViewGrid data={store?.trendingList}/>;
    return <div className="repo-nodata">No Data</div>
  }

  const handleQuery = (key: string, val: any) => {
    if (key === 'language') {
      setQuery({ [key]: val.lang });
      return;
    }
    setQuery({ [key]: val });
  };

  return (
    <div>
      <ButtonGroup style={{ padding: '20px 0 0 24px' }}>
        <Languages
          defaultValue={{ lang: urlLang || 'All Languages' }}
          onChange={handleQuery}
        />
        <DateRange defaultValue={urlRange} onChange={handleQuery} />
        {/* <ViewType defaultValue="Grid" onChange={handleQuery} /> */}
      </ButtonGroup>
      {render()}
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
