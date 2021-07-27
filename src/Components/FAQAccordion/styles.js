import {StyleSheet} from 'react-native';
import {colors} from '../../Styles/Colors';

export const styles = StyleSheet.create({
  expandedSummary: {
    backgroundColor: '#FFF',
    paddingHorizontal: 21,
  },
  summaryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 0,
    paddingRight: 0,
  },
  summaryText: {
    fontWeight: 'bold',
    color: colors.primary,
    fontSize: 15,
  },
  accordionItem: {
    paddingHorizontal: 21,
  },
  detailsText: {
    color: colors.black,
    fontSize: 15,
    lineHeight: 21,
    paddingBottom: 14,
  },
  detailsContainer: {
    paddingLeft: 0,
    paddingRight: 0,
  },
});
