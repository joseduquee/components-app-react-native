import {useRef} from 'react';
import {Animated, Easing} from 'react-native';

export const useAnimation = () => {
  const animatedOpacityRef = useRef(new Animated.Value(0)).current;
  const animatedTopRef = useRef(new Animated.Value(0)).current;

  const fadeIn = ({duration = 300, toValue = 1, callback = () => {}}) => {
    // Animated.timing(animatedTopRef, {
    //   toValue: 0,
    //   duration: 700,
    //   useNativeDriver: true,
    //   //   easing: Easing.elastic(2),
    //   easing: Easing.bounce,
    // }).start(() => console.log('Animation ended'));

    Animated.timing(animatedOpacityRef, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
    }).start(callback);
  };

  const fadeOut = ({duration = 300, toValue = 0, callback = () => {}}) => {
    Animated.timing(animatedOpacityRef, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
    }).start(callback);

    // () => animatedTopRef.resetAnimation()
  };

  const startMovinTop = ({
    initialPosition = 0,
    duration = 300,
    easing = Easing.linear,
    toValue = 0,
    callback = () => {}
  }) => {
    animatedTopRef.setValue(initialPosition);
    Animated.timing(animatedTopRef, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
      easing: easing,
    }).start(callback);
  };

  return {
    //Properties
    animatedOpacityRef,
    animatedTopRef,

    //Methods
    fadeIn,
    fadeOut,
    startMovinTop
  };
};
