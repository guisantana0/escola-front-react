import axios from 'axios';
import Env from '../appsettings';

const api = new axios.create({
    baseURL: Env.base_url
})

export default api;