export type GithubLang = {
  lang: string;
  color?: string;
  url?: string;
}

export type TrendingData = {
  trendingList: any[],
  trendingStatus: 'ok' | 'error',
  trendingLoading: boolean,
}