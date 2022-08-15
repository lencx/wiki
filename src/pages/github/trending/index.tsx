import React, { useEffect, useState, useReducer } from 'react';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import ButtonGroup from '@mui/material/ButtonGroup';

import Layout from '@site/src/layout';
import Languages from '@site/src/components/GitHub/Languages';
import ViewGrid from '@site/src/components/GitHub/ViewGrid';
import AddToken from '@site/src/components/GitHub/AddToken';
import DateRange, { RangeType } from '@site/src/components/GitHub/DateRange';
import { useTrending } from '@site/src/github/useTrending';
import { GhProvider, useGhState } from '@site/src/github/ghStore';
import { capitalizeFirstLetter } from '@site/src/utils/tool';
import './index.scss';

const GitHubApp = () => {
  const url = new URL(location.href);
  const urlLang = url.searchParams.get('language');
  const urlRange = capitalizeFirstLetter(url.searchParams.get('range') || 'weekly') as RangeType;

  const [msgOpen, setMsgOpen] = useState(false);
  const store = useGhState();
  const [queryParams, setQuery] = useReducer((o: Record<string, string>, n: Record<string, string>) => ({ ...o, ...n }), {});
  const [query] = useTrending();

  useEffect(() => {
    if (Object.keys(queryParams).length === 0) return;
    const _params = Object.entries(queryParams).map(i => `${i[0]}=${i[1]}`).join('&')
    history.replaceState({}, '', `?${_params}`);
    query(queryParams);

  }, [queryParams])

  useEffect(() => {
    if (store.trendingStatus === 'invalid_token') {
      setMsgOpen(true);
    }
  }, [store.trendingStatus])

  const render = () => {
    if (store.trendingStatus === 'invalid_token') {
      return <AddToken />
    }
    if (store?.trendingLoading) {
      return <div className="repo-loading">loading...</div>;
    }
    if (store?.trendingList?.length > 0) {
      return <ViewGrid data={store?.trendingList}/>;
    }
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
      {store.trendingStatus !== 'invalid_token' && (
        <ButtonGroup style={{ padding: '20px 0 0 24px' }}>
          <Languages
            defaultValue={{ lang: urlLang || 'All Languages' }}
            onChange={handleQuery}
          />
          <DateRange defaultValue={urlRange} onChange={handleQuery} />
          {/* <ViewType defaultValue="Grid" onChange={handleQuery} /> */}
        </ButtonGroup>
      )}
      {render()}
      <Snackbar
        open={msgOpen}
        autoHideDuration={3000}
        onClose={() => setMsgOpen(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity="error" sx={{ width: '100%' }}>
          {store.trendingMsg}
        </Alert>
      </Snackbar>
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
