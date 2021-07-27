import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from './styles';

Icon.loadFont();

const HeaderAtom = ({headerText, onBack}) => {
  return (
    <View style={styles.headerContainer}>
      <Icon name="keyboard-backspace" size={26} onPress={onBack} />
      <Text style={styles.headerText}>{headerText}</Text>
      <View style={styles.headerRightView} />
    </View>
  );
};

export default HeaderAtom;
