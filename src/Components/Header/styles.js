import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 21,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
  },
  headerBackIcon: {
    fontSize: 24,
  },
  headerRightView: {
    width: 32,
  },
});
