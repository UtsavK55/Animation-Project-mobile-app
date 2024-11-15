import {useMemo} from 'react';
import {Animated} from 'react-native';

import useScalingMetrics from '@hooks/useScalingMetrics';
import {useThemeColors} from '@theme/index';

export const createThemedStyles = <T extends NamedStyles<T> | NamedStyles<any>>(
  styleFunction: ThemedStyleFunction<T>,
) => {
  return (
    scale?: Animated.Value,
    value?: Animated.Value,
    translateY?: Animated.Value,
    fadeAnim?: Animated.Value,
  ) => {
    const themeColors = useThemeColors();
    const scalingMetrics = useScalingMetrics();

    return useMemo(
      () =>
        styleFunction(
          themeColors,
          scalingMetrics,
          scale,
          value,
          translateY,
          fadeAnim,
        ),
      [themeColors, scalingMetrics, scale, value, translateY, fadeAnim],
    );
  };
};

export const animatedTransform = (
  scale?: Animated.Value,
  translateY?: Animated.Value,
  rotate?: Animated.Value,
) => {
  const transforms = [];

  if (scale) transforms.push({scale});
  if (translateY) transforms.push({translateY});
  if (rotate)
    transforms.push({
      rotate: rotate.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
      }),
    });

  return transforms;
};
