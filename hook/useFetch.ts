import useSWR from 'swr';
import fetcher from '../lib/fetcher';
import { RAPID_API_KEY } from '@env'

const useFetch = (endpoint: string, query: any) => {  
  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {
      query: query.query,      
    },
    headers: {
      'X-RapidAPI-Key': "9df118b3aamsh95f91d68809818fp195de8jsn49df3108941e",
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
