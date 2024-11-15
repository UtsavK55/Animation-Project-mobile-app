import {StyleSheet} from 'react-native';

import {createThemedStyles} from '@helpers';

export const animatedCircleStyles = createThemedStyles(
  (colors, scalingMetrics, scale) => {
    const {hp, wp, scaleSize} = scalingMetrics;
    return StyleSheet.create({
      circleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
      },
      circleBoundary: {
        borderWidth: 2,
        width: wp(93),
        height: wp(93),
        borderRadius: scaleSize(190),
        borderColor: colors.white,
        position: 'absolute',
        transform: [{scale: scale}],
        justifyContent: 'center',
        alignItems: 'center',
      },
      image: {
        width: 50,
        height: 50,
        position: 'absolute',
        transform: [{scale: scale}],
      },
    });
  },
);
