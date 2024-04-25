import {ScrollView, Text, TextInput, View} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {globalStyles} from '../../../config/theme/theme';
import {Card} from '../../components/ui/Card';
import {useState} from 'react';

export const TextInputScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  return (
    <ScrollView>
      <CustomView margin>
        <Title safe text="Text inputs" />
        <Card>
          <TextInput
            style={globalStyles.input}
            placeholder="Name and lastname"
            autoCapitalize={'words'}
            autoCorrect={false}
            onChangeText={value => setForm({...form, name: value})}
          />
          <TextInput
            style={globalStyles.input}
            placeholder="email"
            autoCapitalize={'none'}
            autoCorrect={false}
            keyboardType="email-address"
            onChangeText={value => setForm({...form, email: value})}
          />
          <TextInput
            style={globalStyles.input}
            placeholder="Phone"
            keyboardType="phone-pad"
            onChangeText={value => setForm({...form, phone: value})}
          />
        </Card>
        <View style={{height: 20}} />
        <Card>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
        </Card>
      </CustomView>
      <View style={{ height: 20 }}/>
    </ScrollView>
  );
};
