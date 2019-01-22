import axios from 'axios';
import {API_BASE_URL, ACCESS_TOKEN} from '../Config/config';

const ApiInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {'Authorization': `Bearer ${ACCESS_TOKEN}`}
  });


  export default ApiInstance;