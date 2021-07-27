import {StyleSheet} from 'react-native';
import {colors} from '../../Styles/Colors';

export const styles = StyleSheet.create({
  buttonContainer: {
    height: 50,
    width: 217,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    alignSelf: 'center',
    marginTop: 21,
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 14,
    textAlign: 'center',
    alignSelf: 'center',
    color: colors.white,
  },
});
