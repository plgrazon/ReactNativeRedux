import {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {counterSlice} from './counterSlice';

const Counter = () => {
  const [inputValue, setInputValue] = useState<string>('');

  return (
    <View style={styles.parentView}>
      <Text>{`Current value: ${inputValue}`}</Text>
      <View style={styles.childView}>
        <TextInput
          style={styles.textInput}
          onChangeText={value => setInputValue(value)}
          placeholder="value"
          value={inputValue}
          textAlign="center"
          keyboardType="numeric"
        />
      </View>
      <Button title="increment" />
      <Button title="decrement" />
    </View>
  );
};

const styles = StyleSheet.create({
  parentView: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  childView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: 150,
    borderWidth: 1,
    padding: 10,
    margin: 20,
  },
});

export default Counter;
