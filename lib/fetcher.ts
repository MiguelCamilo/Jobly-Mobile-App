import axios from 'axios';

const fetcher = async (options: {}) => {    
    return await axios.request(options).then((res) => {        
        return res.data
    });
}

export default fetcher;