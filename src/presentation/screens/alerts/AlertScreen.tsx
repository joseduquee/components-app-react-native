import {Alert, View} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {globalStyles} from '../../../config/theme/theme';
import {Button} from '../../components/ui/Button';
import { showPrompt } from '../../../config/theme/adapters/prompt.adapter';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export const AlertScreen = () => {

  const { isDark } = useContext(ThemeContext);

  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Ask me later',
          onPress: () => console.log('Ask me later pressed'),
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {
        cancelable: true,
        onDismiss() {
          console.log('Ondismiss');
        },
      },
    );

    const onShowPrompt =  () => {
        showPrompt({
          title: 'This is the title',
          subTitle: 'This is the subtitlwe',
          buttons: [
            { text: 'Ok', onPress: () => console.log('Ok') },
          ],
          placeholder: 'This is the placeholder'
        })
        // codigo nativo
        // Alert.prompt(
        //     "What's you email?",
        //     "Here you're writing",
        //     (value: string) => console.log({ value }),
        //     'secure-text',
        //     'I am the default value',
        //     'number-pad'
            
        // )
    }

  return (
    <CustomView style={globalStyles.globalMargin}>
      <Title safe text="Alerts" />
      <Button text="Alert - 2 Buttons" onPress={createTwoButtonAlert} />
      <View style={{height: 10}} />
      <Button text="Alert - 3 Buttons" onPress={createThreeButtonAlert} />
      <View style={{height: 10}} />
      <Button text="Prompt - input" onPress={onShowPrompt} />
    </CustomView>
  );
};
