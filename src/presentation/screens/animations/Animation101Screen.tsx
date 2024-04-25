import {Animated, Easing, Pressable, StyleSheet, Text} from 'react-native';
import {useAnimation} from '../../hooks/useAnimation';
import {useContext} from 'react';
import {ThemeContext} from '../../context/ThemeContext';
import {CustomView} from '../../components/ui/CustomView';
import {Button} from '../../components/ui/Button';

export const Animation101Screen = () => {
  const {colors} = useContext(ThemeContext);
  const {animatedOpacityRef, animatedTopRef, fadeIn, fadeOut, startMovinTop} =
    useAnimation();

  return (
    <CustomView style={styles.container}>
      <Animated.View
        style={[
          styles.purpleBox,
          {
            backgroundColor: colors.primary,
          },
          {
            opacity: animatedOpacityRef,
            transform: [
              {
                translateY: animatedTopRef,
              },
            ],
          },
        ]}
      />
      <Button
        text="FadeIn"
        onPress={() => {
          fadeIn({});
          startMovinTop({
            initialPosition: -100,
            easing: Easing.elastic(1),
            duration: 750,
          });
        }}
        style={{marginTop: 10}}
      />
      <Button
        text="FadeOut"
        onPress={() => fadeOut({})}
        style={{marginTop: 10}}
      />
    </CustomView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  purpleBox: {
    width: 150,
    height: 150,
  },
});
