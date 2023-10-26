import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './nearbyjobcard.style';

import { checkImageURL } from '../../../../utils/checkImageUrl';

export interface NearbyJobCardProps {
  job: any;  
  handleNavigate: () => void;  
}

const NearbyJobCard = (props: NearbyJobCardProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={props?.handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: checkImageURL(props?.job?.employer_logo)
              ? props?.job?.employer_logo
              : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg',
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>      

      <View style={styles.textContainer}>
        <Text
          style={styles.jobName}
          numberOfLines={1}>
          {props?.job?.job_title}
        </Text>
        <Text style={styles.jobType}>{props?.job?.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
