import React from 'react';
import { View, Text } from 'react-native';

import styles from './about.style';

interface AboutProps {
  title: string;
  info: string;
}

const About = (props: AboutProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>About the job:</Text>
      <View style={styles.contentBox}>
        <Text style={styles.contextText}>{props?.info}</Text>
      </View>
    </View>
  );
};

export default About;
