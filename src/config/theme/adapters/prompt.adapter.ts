import prompt from 'react-native-prompt-android';

interface Options {
  title: string;
  subTitle?: string;
  buttons: PromptButton[];
  propmtType?: 'default' | 'plain-text' | 'secure-text';
  placeholder?: string;
  defaultValue?: string;
}

interface PromptButton {
  text: string;
  onPress: () => void;
  style?: 'cancel' | 'default' | 'destructive';
}

export const showPrompt = ({buttons, title, subTitle, propmtType = 'plain-text', placeholder, defaultValue}: Options) => {
  prompt(
    title,
    subTitle,
    buttons,
    {
      type: propmtType,
      cancelable: false,
      defaultValue: defaultValue,
      placeholder: placeholder,
    },
  );
};
