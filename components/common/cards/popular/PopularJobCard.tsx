import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './popularjobcard.style';

import { container, logoContainer, jobName } from './popularjobcard.style';

import { checkImageURL } from '../../../../utils/checkImageUrl';

export interface PopularJobCardProps {
  item: any;
  selectedJob: React.SetStateAction<string>;
  handleCardPress: (item: any) => void;  
}

const PopularJobCard = (props: PopularJobCardProps) => {
  return (
    <TouchableOpacity
      style={container(props?.selectedJob, props?.item)}
      onPress={() => props?.handleCardPress(props?.item)}>
      <TouchableOpacity style={logoContainer(props?.selectedJob, props?.item)}>
        <Image
          source={{
            uri: checkImageURL(props?.item?.employer_logo)
              ? props?.item?.employer_logo
              : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg',
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {props?.item?.employer_name}
      </Text>

      <View style={styles.infoContainer}>
        <Text
          style={jobName(props?.selectedJob, props?.item)}
          numberOfLines={1}>
          {props?.item?.job_title}
        </Text>
        <Text style={styles.location}>{props?.item?.job_country}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
