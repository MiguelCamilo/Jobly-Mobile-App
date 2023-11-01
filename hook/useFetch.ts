import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

import { useFocusNotifyOnChangeProps } from './useFocusNotifyOnChangeProps';

interface QueryParamsProps {
  query: string;
  job_id?: string;
  page?: number;
  num_pages?: number;
  remote_jobs_only?: boolean;
  date_posted?: string;
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
      remote_jobs_only: query?.remote_jobs_only,
      date_posted: query?.date_posted
    },
    headers: {
      'X-RapidAPI-Key': "9c49d5fdb0msh53ce5f16b7a2736p12ccf8jsncac80d11ccba",
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
  return useQuery({queryKey: [endpoint, query, query?.job_id], queryFn: () => fetchJobs(endpoint, query), notifyOnChangeProps, staleTime: Infinity });
}

export default useFetch;
