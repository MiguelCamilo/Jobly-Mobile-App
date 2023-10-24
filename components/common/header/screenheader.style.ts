import { ImageStyle, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../constants';

export interface IScreenHeaderStyle {
  dimensions: string;
  height: number;
  borderRadius: number;
}

export const btnImg = (dimensions: IScreenHeaderStyle) => {
  return {
    width: dimensions,
    height: dimensions,
    borderRadius: SIZES.small / 1.25,
  };
};

const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
