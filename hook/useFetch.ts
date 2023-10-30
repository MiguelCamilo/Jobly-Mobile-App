import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

import { useFocusNotifyOnChangeProps } from './useFocusNotifyOnChangeProps';

interface QueryParamsProps {
  job_id?: string;
  query?: string;
  page?: number;
  num_pages?: number;
}

const fetchJobs = async (endpoint: string, query: QueryParamsProps) => {
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
  
  // by storing the endpoint and job_id in the queryKey, it allows for one api call
  // to be made if the job hasnt been viewed yet, but if job that has been cached is clicked on, it wont refetch the data
  return useQuery({queryKey: [endpoint, query?.job_id], queryFn: () => fetchJobs(endpoint, query), notifyOnChangeProps, staleTime: Infinity });
}

export default useFetch;
