const CONFIG = {
	newsCount: Number(process.env.NEWS_COUNT) || 100,
	hackerNewsApi: process.env.HACKER_NEWS_API,
	useMockData: process.env.USE_MOCK_DATA === 'on',
	requestCacheTime: Number(process.env.REQUEST_CACHE_TIME) || 0,
	refetchNewsInterval: Number(process.env.REFETCH_NEWS_INTERVAL) || 60
};

export default CONFIG;
