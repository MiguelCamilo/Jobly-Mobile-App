import useSWR from 'swr';
import fetcher from '../lib/fetcher'


const useFetch = (endpoint: string, query: any) => {  
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
      // 'X-RapidAPI-Key': "fe443f11f9mshd1e467ba9bf4b5cp18258ejsn6d69ae021c25",
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    },
  };

  const { data, mutate, isLoading, error } = useSWR(options, fetcher);

  return {
    data,
    mutate, 
    isLoading,
    error
  };
};

export default useFetch;
