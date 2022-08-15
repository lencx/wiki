import { Octokit } from '@octokit/core';
import dayjs from 'dayjs';

import { useGhDispatch } from './ghStore';

export type transformFilters = {
  language?: string;
  range?: string;
};
export type ghSearchQuery = {
  q: string;
  sort: 'stars';
  order: 'desc';
};

const getStart = (type: string = 'weekly') => {
  const range: any = {
    yearly: dayjs().subtract(1, 'year').format('YYYY-MM-DD'),
    monthly: dayjs().subtract(1, 'month').format('YYYY-MM-DD'),
    weekly: dayjs().subtract(1, 'week').format('YYYY-MM-DD'),
    daily: dayjs().subtract(1, 'day').format('YYYY-MM-DD'),
  };
  return range[type];
};

const transformQuery = (filters: transformFilters) => {
  const reposDate = `created:${getStart(filters.range)}..${dayjs().format('YYYY-MM-DD')}`;
  const reposLang = filters.language !== 'All Languages' ? `language:${filters.language} ` : '';
  return encodeURIComponent(reposLang + reposDate);
};

export const useTrending = () => {
  const dispatch = useGhDispatch();

  const octokit = new Octokit({ auth: localStorage.getItem('WIKI_GITHUB_TOKEN') });
  octokit.hook.error('request', async (error: any) => {
    // error.status: 401 | 403
    dispatch({
      type: 'trending',
      payload: {
        trendingList: [],
        trendingStatus: 'invalid_token',
        trendingLoading: false,
        trendingMsg: error.toString(),
      },
    });
  });

  const queryGh = async (data: any = {}) => {
    dispatch({
      type: 'setData',
      payload: { trendingLoading: true, trendingList: null },
    });
    try {
      let query = { language: data.language, range: data.range };
      const res = await octokit.request(
        `GET /search/repositories?q=${transformQuery(query)}`,
        {
          sort: 'stars',
          order: 'desc',
        }
      );

      if (res) {
        dispatch({
          type: 'trending',
          payload: {
            trendingList: res.data.items,
            trendingStatus: 'ok',
            trendingLoading: false,
          },
        });
      }
    } catch (e) {}
  };
  return [queryGh];
};