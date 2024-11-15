import {useEffect, useRef} from 'react';
import {Animated, View} from 'react-native';

import BaseContainer from '@components/baseContainer';
import {IMAGES} from '@constants/imageConstants';
import useScalingMetrics from '@hooks/useScalingMetrics';

import {splashStyles} from './styles';

const animate = (
  value: Animated.Value,
  scale: Animated.Value,
  translateY: Animated.Value,
  fadeAnim: Animated.Value,
  toScale: number,
  toTranslate: number,
) => {
  Animated.timing(value, {
    toValue: 4,
    duration: 2000,
    useNativeDriver: true,
  }).start();

  Animated.timing(scale, {
    toValue: toScale,
    duration: 2000,
    useNativeDriver: true,
  }).start();

  setTimeout(() => {
    Animated.timing(translateY, {
      toValue: toTranslate,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, 2000);
};

const SplashScreen = () => {
  const value = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current; 
  const translateY = useRef(new Animated.Value(0)).current;
  const styles = splashStyles(scale, value, translateY, fadeAnim);
  const {scaleSize} = useScalingMetrics();

  useEffect(() => {
    animate(value, scale, translateY, fadeAnim, scaleSize(1.3), scaleSize(-40));
  }, []);

  return (
    <BaseContainer>
      <View style={styles.container}>
        <Animated.View style={styles.view1} />
        <View style={styles.imageContainer1}>
          <Animated.Image
            source={IMAGES.logoImg}
            resizeMode="contain"
            style={styles.image1}
          />
          <Animated.View style={styles.imageContainer2}>
            <Animated.Image
              source={IMAGES.taskWaveTitle}
              style={styles.image2}
              resizeMode="contain"
            />
          </Animated.View>
        </View>
      </View>
    </BaseContainer>
  );
};

export default SplashScreen;
