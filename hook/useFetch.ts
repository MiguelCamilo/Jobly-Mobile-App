import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

import { useFocusNotifyOnChangeProps } from './useFocusNotifyOnChangeProps';

const fetchJobs = async (endpoint: string, query: any) => {
  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {
      job_id: query?.job_id,
      query: query?.query,
      page: query?.page,
      num_pages: query?.num_pages,
    },
    headers: {
      'X-RapidAPI-Key': "fe443f11f9mshd1e467ba9bf4b5cp18258ejsn6d69ae021c25",
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    },
  };

   const { data } = await axios.request(options);
   return data;
};

const useFetch = (endpoint: string, query: any) => {
  const notifyOnChangeProps = useFocusNotifyOnChangeProps();
  
  return useQuery({queryKey: ['jobs'], queryFn: () => fetchJobs(endpoint, query), notifyOnChangeProps });
}

export default useFetch;
