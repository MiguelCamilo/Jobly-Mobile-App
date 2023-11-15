import * as React from 'react';
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native';

import styles from './footer.style';
import { icons } from '../../../constants';

import AsyncStorage from '@react-native-async-storage/async-storage';

import useFetchSavedJobs from '../../../hook/useFetchSavedJobs';

interface FooterProps {
  url: string;
  job: {};
}

const Footer = (props: FooterProps) => {
  const [isLiked, setIsLiked] = React.useState<boolean>(false);

  // TODO: understand both functions
  const toggleStoreFavoriteJob = React.useCallback(
    async (job) => {
      try {
        const likedJobs = await AsyncStorage.getItem('likedJobs');
        let newLikedJobs = likedJobs ? JSON.parse(likedJobs) : [];
        const foundJob = newLikedJobs.find((item) => item?.job_id === job?.job_id);
        if (foundJob) {
          newLikedJobs = newLikedJobs.filter((item) => item?.job_id !== job?.job_id);
        } else {
          newLikedJobs.push(job);
        }
        await AsyncStorage.setItem('likedJobs', JSON.stringify(newLikedJobs));
        setIsLiked(newLikedJobs.includes(job));
        // console.log(newLikedJobs);
      } catch (error) {
        console.log(error);
      }
    },
    [],
  );
  

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={() => { props?.job && toggleStoreFavoriteJob(props?.job) }}
        style={styles.likeBtn}
      >
        <Image
          source={isLiked ? icons.heart : icons.heartOutline}
          resizeMode="contain"
          style={styles.likeBtnImage}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => Linking.openURL(props?.url)}>
        <Text style={styles.applyBtnText}>Apply for job</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
