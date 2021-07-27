import {StyleSheet} from 'react-native';
import {colors} from '../../Styles/Colors';

export const styles = StyleSheet.create({
  faqSwipeContainer: {
    height: 60,
    width: 500,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 21,
  },
  faqSwipeText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
    color: colors.white,
    paddingLeft: 16,
  },
  faqSwipeIcon: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
});
