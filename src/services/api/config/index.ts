const isDev = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test';

export const config = {
  baseUrl: isDev ? 'http://localhost:3002' : '',
};
