import React from 'react';
import { TouchableOpacity, Image, ImageSourcePropType } from 'react-native';

import styles from './screenheader.style';

interface ScreenHeaderBtnProps {
  iconUrl: ImageSourcePropType;
  dimensions: string;
  handlePress?: () => void;
}

const ScreenHeaderBtn: React.FC<ScreenHeaderBtnProps> = ({
  iconUrl,
  dimensions,
  handlePress,
}) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image source={iconUrl} resizeMode='cover' style={styles.btnImg(dimensions)} />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
