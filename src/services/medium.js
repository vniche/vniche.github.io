import axios from 'axios';

import { MEDIUM_USER_FEED_URL } from '../constants';

const instance = axios.create({
  baseURL: 'https://api.rss2json.com/v1/api.json?rss_url=' + MEDIUM_USER_FEED_URL,
  timeout: 3000
});

export async function queryFeed() {
  return instance.get('/')
};
