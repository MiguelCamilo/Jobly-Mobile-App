import * as React from 'react';
import useFetch from '../../hook/useFetch';

import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import { Stack, useRouter, useGlobalSearchParams } from 'expo-router';
import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
} from '../../components';

import { COLORS, icons, SIZES } from '../../constants';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const JobDetails = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  // allows use to access the query params and get the job_id
  const params = useGlobalSearchParams();
  const queryClient = new QueryClient();
  const router = useRouter();

  const {
    data: currentJob,
    isLoading,
    error,
  } = useFetch('job-details', {
    job_id: params.id,
  });

  const onRefresh = () => {};

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        <Stack.Screen
          options={{
            headerTitle: 'Job Details',
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShadowVisible: false,
            headerBackVisible: false,
            headerLeft: () => (
              <ScreenHeaderBtn
                iconUrl={icons.left}
                dimensions="60%"
                handlePress={() => router.back()}
              />
            ),
            headerRight: () => (
              // TODO: add share functionality
              <ScreenHeaderBtn iconUrl={icons.share} dimensions="60%" />
            ),
          }}
        />

        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          {isLoading ? (
            <ActivityIndicator size={'large'} color={COLORS.primary} />
          ) : error ? (
            <Text>Something Went Wrong...</Text>
          ) : currentJob?.data?.length === 0 ? (
            <Text>No Data</Text>
          ) : (
            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}></View>
          )}
        </ScrollView>
      </SafeAreaView>
    </QueryClientProvider>
  );
};

export default JobDetails;
