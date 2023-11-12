import * as React from 'react';
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native';

import styles from './footer.style';
import { icons } from '../../../constants';

import AsyncStorage from '@react-native-async-storage/async-storage';

interface FooterProps {
  url: string;
  job_id: string; // sends back the clicked job id
}

const Footer = (props: FooterProps) => {
  const [isLiked, setIsLiked] = React.useState<boolean>(false);

  // TODO: understand both functions
  const toggleStoreFavoriteJob = React.useCallback(
    async (jobId: string) => {
      try {
        const likedJobs = await AsyncStorage.getItem('likedJobs');
        let newLikedJobs = likedJobs ? JSON.parse(likedJobs) : [];
        if (newLikedJobs.includes(jobId)) {
          newLikedJobs = newLikedJobs.filter((id) => id !== jobId);
        } else {
          newLikedJobs.push(jobId);
        }
        await AsyncStorage.setItem('likedJobs', JSON.stringify(newLikedJobs));
        setIsLiked(newLikedJobs.includes(jobId));
      } catch (error) {
        console.log(error);
      }
    },
    [],
  );

  React.useEffect(() => {
    const getLikedJob = async () => {
      try {
        const likedJobs = await AsyncStorage.getItem('likedJobs');
        const newLikedJobs = likedJobs ? JSON.parse(likedJobs) : [];
        setIsLiked(newLikedJobs.includes(props?.job_id));
      } catch (error) {
        console.log(error);
      }
    };
    getLikedJob();
  }, [props?.job_id]);
  

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={() => { toggleStoreFavoriteJob(props?.job_id) }}
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
