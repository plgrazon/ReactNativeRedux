import {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {
  decrement,
  decrementAsync,
  decrementIfOdd,
  increment,
  incrementAsync,
  incrementIfOdd,
} from './counterSlice';
import {selectCount, selectStatus} from './counterSelector';
import {useAppDispatch, useAppSelector} from '../../store/hook';
import AppModal from '../modal/AppModal';

const Counter = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [visible, setIsVisible] = useState<boolean>(false);

  const toggleModal = () => setIsVisible(!visible);

  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const status = useAppSelector(selectStatus);

  const isOdd = count % 2 !== 0;
  const defaultInputValue = inputValue ? Number(inputValue) : 1;

  return (
    <View style={styles.parentView}>
      <Text>{`Current status: ${status}`}</Text>
      <Text>{`Current value: ${count}`}</Text>
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
      <Button title="+1" onPress={() => dispatch(increment())} />
      <Button title="-1" onPress={() => dispatch(decrement())} />
      <Button
        title="increment if odd"
        onPress={() => {
          if (isOdd) dispatch(incrementIfOdd(defaultInputValue));
          else setIsVisible(true);
        }}
      />
      <Button
        title="decrement if odd"
        onPress={() => {
          if (isOdd) dispatch(decrementIfOdd(defaultInputValue));
          else setIsVisible(true);
        }}
      />
      <Button
        title="async increment"
        onPress={() => dispatch(incrementAsync(defaultInputValue))}
      />
      <Button
        title="async increment"
        onPress={() => dispatch(decrementAsync(defaultInputValue))}
      />
      <AppModal
        visible={visible}
        toggleModal={toggleModal}
        displayText="Number is Even"
      />
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
