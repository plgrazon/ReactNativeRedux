import {SetStateAction, useEffect, useState} from 'react';
import {Button, Modal, Text, View} from 'react-native';

const AppModal = ({
  displayText = 'Hello World',
  visible = false,
  toggleModal,
}: {
  displayText: string;
  visible: boolean;
  toggleModal?: () => void;
}) => {
  const [isVisible, setIsVisible] = useState(visible);

  useEffect(() => {
    setIsVisible(visible);
  }, [visible]);

  return (
    <Modal visible={isVisible}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: 'white',
            margin: 20,
            borderRadius: 20,
            padding: 35,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
          }}>
          <Text>{displayText}</Text>
          <Button
            title="close"
            onPress={toggleModal ? toggleModal : () => setIsVisible(false)}
          />
        </View>
      </View>
    </Modal>
  );
};

export default AppModal;
