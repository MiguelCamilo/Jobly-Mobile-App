import axios from 'axios';

const fetcher = (options) => {    
    return axios.request(options).then((res) => {        
        return res.data
    });
}

export default fetcher;