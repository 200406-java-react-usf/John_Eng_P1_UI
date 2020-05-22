import axios from 'axios';

export const devboardsClient = axios.create({
    baseURL: 'http://project01api-env.eba-zfcpjptc.us-east-1.elasticbeanstalk.com',
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true,
})