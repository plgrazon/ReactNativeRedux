import {useState} from 'react';
import {Button, TextInput, View} from 'react-native';

const Counter = () => {
  const [value, setValue] = useState<number>(0);
  return (
    <View>
      <Button title="increment" />
      <Button title="decrement" />
      <TextInput placeholder="value" value={value} keyboardType="numeric" />
    </View>
  );
};

export default Counter;
