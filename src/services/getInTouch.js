import axios from 'axios';

import { GET_IN_TOUCH_URL } from '../constants';

const instance = axios.create({
  baseURL: GET_IN_TOUCH_URL,
  headers: {'Content-Type': 'application/json'},
  timeout: 5000
});

export async function getInTouch(payload) {
  return instance.post("/", payload);
};
