import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Image,
  Text,
  TouchableOpacity,
  View,
  PanResponder,
} from 'react-native';
import {Button, TextInput} from 'react-native-paper';

import AnimatedCircle from '@components/animatedCircle';
import {imageArray, IMAGES} from '@constants/imageConstants';
import useScalingMetrics from '@hooks/useScalingMetrics';
import {useThemeColors} from '@theme';

import {loginStyles} from './styles';

// Utility function to handle animation
const startCircleAnimations = (
  scale: Animated.Value,
  fadeAnim: Animated.Value,
  opacity: Animated.Value,
  toScale: number,
) => {
  const commonAnimConfig = {
    duration: 6000,
    useNativeDriver: true,
  };

  Animated.timing(scale, {toValue: toScale, ...commonAnimConfig}).start();
  Animated.timing(fadeAnim, {toValue: 0, ...commonAnimConfig}).start();
  Animated.timing(opacity, {
    toValue: 0,
    duration: 9000,
    useNativeDriver: true,
  }).start();
};

// Custom hook to manage the circles
const useCircles = (scaleSize: Function) => {
  const [circles, setCircles] = useState<CircleBoundaries>([]);

  const addCircle = () => {
    const randomImage =
      imageArray[Math.floor(Math.random() * imageArray.length)];
    const newCircle = {
      id: Date.now(),
      scaleValue: new Animated.Value(scaleSize(0.34)),
      fadeAnim: new Animated.Value(1),
      imageOpacity: new Animated.Value(1),
      imageSource: randomImage,
    };

    startCircleAnimations(
      newCircle.scaleValue,
      newCircle.fadeAnim,
      newCircle.imageOpacity,
      scaleSize(1.1),
    );

    setCircles(prevCircles => [...prevCircles, newCircle]);
  };

  useEffect(() => {
    addCircle();
    const intervalId = setInterval(addCircle, 2000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const checkFadedCircles = () => {
      setCircles(prevCircles =>
        prevCircles.filter(circle => circle.fadeAnim._value > 0),
      );
    };

    const intervalId = setInterval(checkFadedCircles, 500);
    return () => clearInterval(intervalId);
  }, [circles]);

  return circles;
};

const Login = () => {
  const styles = loginStyles();
  const {hp, scaleSize} = useScalingMetrics();
  const colors = useThemeColors();

  const circles = useCircles(scaleSize);
  const [isVisible, setIsVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(hp(40))).current;

  const handleLoginPress = () => {
    setIsVisible(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const handleClose = () => {
    Animated.timing(slideAnim, {
      toValue: hp(40),
      duration: 100,
      useNativeDriver: true,
    }).start(() => setIsVisible(false));
  };

  // PanResponder for drag-to-close functionality
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (evt, gestureState) => gestureState.dy > 5,
    onPanResponderMove: Animated.event([null, {dy: slideAnim}], {
      useNativeDriver: false,
    }),
    onPanResponderRelease: (e, gestureState) => {
      if (gestureState.dy > 150) {
        handleClose(); // Close if dragged more than 150 pixels
      } else {
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }).start();
      }
    },
  });

  const inputs = [{label: 'Email'}, {label: 'Password'}];
  
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.childContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={IMAGES.logoImg}
              resizeMode="contain"
              style={styles.image}
            />
          </View>

          {circles.map(circle => (
            <AnimatedCircle
              key={circle.id}
              scaleValue={circle.scaleValue}
              opacity={circle.fadeAnim}
              imageOpacity={circle.imageOpacity}
              imageSource={circle.imageSource}
              radius={scaleSize(150)}
            />
          ))}
        </View>

        <Text style={styles.info}>Move teamwork forward even on the go</Text>
        <Text style={styles.termText}>
          The experience of sorted and organized teamwork
        </Text>
      </View>

      <View style={styles.infoContainer}>
        <TouchableOpacity onPress={handleLoginPress}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
      </View>

      {isVisible && (
        <Animated.View
          style={[styles.formContainer, {transform: [{translateY: slideAnim}]}]}
          {...panResponder.panHandlers}>
          <Text style={styles.appTitle}>Login</Text>
          {inputs.map((input, index) => (
            <TextInput
              key={index}
              label={input.label}
              mode="outlined"
              outlineColor={colors.blue700}
              selectionColor={colors.black}
              activeOutlineColor={colors.blue700}
              style={styles.input}
            />
          ))}
          <Button
            mode="contained"
            style={{marginTop: 24}}
            textColor={colors.white}
            buttonColor={colors.blue700}
            onPress={() => console.log('Pressed')}>
            Submit
          </Button>
        </Animated.View>
      )}
    </View>
  );
};

export default Login;
