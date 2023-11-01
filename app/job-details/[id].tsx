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

import styles from '../../styles/search';
import { COLORS, icons, SIZES } from '../../constants';

const JobDetails = () => {
  const tabs = ['About', 'Qualifications', 'Responsibilities'];

  const [refreshing, setRefreshing] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState(tabs[0]);
  // allows use to access the query params and get the job_id
  const params = useGlobalSearchParams();
  const router = useRouter();

  const {
    data: currentJob,
    isLoading,
    error,
  } = useFetch('job-details', { job_id: params?.id });

  const onRefresh = () => {};

  const displayTabContent = () => {
    // using a switch
    switch (activeTab) {
      case 'Qualifications':
        return (
          <Specifics
            title="Qualifications"
            points={
              currentJob?.data[0]?.job_highlights?.Qualifications ?? ['N/A']
            }
          />
        );
      case 'About':
        return (
          <JobAbout
            title="About"
            info={
              currentJob?.data[0]?.job_description ??
              'No Description Available.'
            }
          />
        );
      case 'Responsibilities':
        return (
          <Specifics
            title="Responsibilities"
            points={
              currentJob?.data[0]?.job_highlights?.Responsibilities ?? ['N/A']
            }
          />
        );
      default:
        break;
    }
  };

  return (
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
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color={COLORS.tertiary} />
          </View>
        ) : error ? (
          <Text>Something Went Wrong...</Text>
        ) : currentJob?.data?.length === 0 ? (
          <Text>No Data</Text>
        ) : (
          <View style={{ padding: SIZES.small, paddingBottom: 100 }}>
            <Company
              companyLogo={currentJob.data[0]?.employer_logo}
              jobTitle={currentJob.data[0]?.job_title}
              companyName={currentJob.data[0]?.employer_name}
              location={currentJob.data[0]?.job_country}
              employmentType={currentJob.data[0]?.job_employment_type}
            />
            <JobFooter url={currentJob?.data[0]?.job_google_link} />
            <JobTabs
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

            {displayTabContent()}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default JobDetails;
