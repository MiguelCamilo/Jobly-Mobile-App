import { useQuery } from '@tanstack/react-query';

  // React.useEffect(() => {
  //   const getLikedJob = async () => {
  //     try {
  //       const likedJobs = await AsyncStorage.getItem('likedJobs');
  //       const newLikedJobs = likedJobs ? JSON.parse(likedJobs) : [];
  //       setIsLiked(newLikedJobs.includes(props?.job_id));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getLikedJob();
  // }, [props?.job_id]);

const fetchSavedJobs = async (jobId: string) => {
    try {

    } catch (error) {
        console.log(error)
    }
}

const useFetchSavedJobs = (jobId: string) => {
    return useQuery({queryKey: ['savedJobs', jobId], queryFn: () => fetchSavedJobs(jobId), staleTime: Infinity });
}

export default useFetchSavedJobs