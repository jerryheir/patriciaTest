import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from './styles';

const ButtonAtom = ({buttonText, onPress, style}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.buttonContainer, style]}
      onPress={onPress}>
      <Text style={[styles.buttonText]}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default ButtonAtom;
