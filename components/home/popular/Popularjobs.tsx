import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { useRouter } from 'expo-router';

import styles from './popularjobs.style';
import { COLORS, SIZES } from '../../../constants';

import PopularJobCard from '../../common/cards/popular/PopularJobCard';

import useFetch from '../../../hook/useFetch';

const Popularjobs = () => {
  const [selectedJob, setSelectedJob] = React.useState('');

  const {
    data: fetchedJobs,
    isLoading,
    error,
  } = useFetch('search', {
    query: 'Jobs',
    remote_jobs_only: true,    
  });

  const router = useRouter();

  const handleCardPress = (item) => {
    router.push(`job-details/${item?.job_id}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          {/* TODO: implement show all button */}
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size={'large'} color={COLORS.primary} />
        ) : error ? (
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
            <ActivityIndicator size={'large'} color={COLORS.primary} />
          </View>
        ) : (
          <FlatList
            data={fetchedJobs?.data}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={(item) => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
