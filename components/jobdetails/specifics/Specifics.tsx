import * as React from 'react';
import { View, Text } from 'react-native';

import styles from './specifics.style';

interface SpecificsProps {
  title: string;
  points: string[];
}

const Specifics = (props: SpecificsProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props?.title}:</Text>
      <View style={styles.pointsContainer}>
        {props?.points?.map((point, index) => (
          <View style={styles.pointWrapper} key={point + index}>
            <Text style={styles.pointDot} />
            <Text style={styles.pointText}>{point}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Specifics;
