import axios from 'axios'
import config from '../config'

const axiosInstance = axios.create({ baseURL: config.apiBaseUrl });

module.exports = axiosInstance;