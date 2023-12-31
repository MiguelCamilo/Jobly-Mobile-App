import * as React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import useFetch from '../../../hook/useFetch';

import styles from './nearbyjobs.style';
import { COLORS } from '../../../constants';

import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';

const NearbyJobs = () => {
  const {
    data: fetchedJobs,
    isLoading,
    error,
  } = useFetch('search', {
    query: 'Jobs',
    date_posted: 'week',
  });
  const router = useRouter();  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Jobs</Text>
          {/* TODO: implement show all button */}
        {/* <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity> */}
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size={'large'} color={COLORS.primary} />
        ) : error ? (
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>            
            <Text>Something went wrong...</Text>
          </View>
        ) : (
          fetchedJobs.data?.map((job) => (
            <NearbyJobCard
              key={`nearby-job-${job?.job_id}`}
              job={job}
              handleNavigate={() => {
                router.push(`/job-details/${job?.job_id}`);
              }}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default NearbyJobs;
