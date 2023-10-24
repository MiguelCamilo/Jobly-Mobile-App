import React from 'react';
import { TouchableOpacity, Image, ImageSourcePropType } from 'react-native';
import { btnImg } from './screenheader.style';

import styles from './screenheader.style';
import type { IScreenHeaderStyle } from './screenheader.style';

interface ScreenHeaderBtnProps {
  iconUrl: ImageSourcePropType;
  dimensions: IScreenHeaderStyle;
  handlePress?: () => void;
}

const ScreenHeaderBtn: React.FC<ScreenHeaderBtnProps> = ({
  iconUrl,
  dimensions,
  handlePress,
}) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image source={iconUrl} resizeMode='cover' style={btnImg(dimensions)} />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
