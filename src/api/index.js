import axios from 'axios';
import * as Env from '../appsettings.json';

const api = new axios({
    baseURL: Env.base_url
})

export default api;