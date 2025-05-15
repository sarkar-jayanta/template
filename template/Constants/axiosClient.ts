import axios from 'axios';
import { API_BASE_URL } from './APIConstant';
import i18next from 'i18next';
import { TOKEN } from './KeyConstant';
import { _retrieveData } from '../Utils/StoragePreference';

export const axiosClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    language: i18next.language ?? 'en',
  },
});

axiosClient.interceptors.request.use(
  async (config: any) => {
    const token = await _retrieveData(TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${JSON.parse(token)}`;
    }

    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);
