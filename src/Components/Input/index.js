import React from 'react';
import {View, TextInput} from 'react-native';
import {colors} from '../../Styles/Colors';
import {styles} from './styles';

const InputAtom = ({
  placeholder,
  value,
  onChangeText,
  multiline,
  style,
  icon,
}) => {
  return (
    <View>
      <TextInput
        multiline={multiline}
        placeholder={placeholder}
        placeholderTextColor={colors.darkGray}
        value={value}
        onChangeText={onChangeText}
        style={[styles.inputContainer, style]}
      />
      {icon ? icon : null}
    </View>
  );
};

export default InputAtom;
