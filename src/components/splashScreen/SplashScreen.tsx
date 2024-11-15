import {useEffect, useRef} from 'react';
import {Animated, View} from 'react-native';

import BaseContainer from '@components/baseContainer';
import {IMAGES} from '@constants/imageConstants';
import useScalingMetrics from '@hooks/useScalingMetrics';

import {splashStyles} from './styles';

const SplashScreen = () => {
  const value = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current; // To control fade-in of the title
  const translateY = useRef(new Animated.Value(0)).current;
  const styles = splashStyles(scale, value, translateY, fadeAnim);
  const {scaleSize} = useScalingMetrics();

  const animate = () => {
    Animated.timing(value, {
      toValue: 4,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    Animated.timing(scale, {
      toValue: scaleSize(1.3),
      duration: 2000,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      Animated.timing(translateY, {
        toValue: scaleSize(-40),
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

  useEffect(() => {
    animate();
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
