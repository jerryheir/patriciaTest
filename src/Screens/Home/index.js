import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../Styles/Colors';

const ROUTES = [
  {
    route: 'faq',
    name: 'FAQ',
  },
  {
    route: 'report',
    name: 'Report',
  },
  {
    route: 'suggest',
    name: 'Suggest',
  },
];

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.homeHeaderText}>{'Home'}</Text>
      {ROUTES &&
        ROUTES.map((item, key) => {
          return (
            <TouchableOpacity
              key={key}
              style={styles.catContainer}
              onPress={() => navigation.navigate(item.route)}>
              <View style={styles.emojiContainer}>
                <Text style={styles.catText}>{item.name}</Text>
              </View>
              <Icon name="chevron-right" size={24} />
            </TouchableOpacity>
          );
        })}
      <Text style={styles.homeNoteText}>
        {
          'This screen was made in order to make the other screens more accessible'
        }
      </Text>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  emojiContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  catImage: {
    height: 36,
    width: 36,
    resizeMode: 'contain',
  },
  catContainer: {
    backgroundColor: colors.white,
    marginHorizontal: 21,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 68,
    paddingHorizontal: 0,
    borderRadius: 8,
    marginBottom: 11,
  },
  catText: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 15,
    paddingLeft: 16,
  },
  homeHeaderText: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 24,
    paddingLeft: 21,
    paddingVertical: 11,
  },
  homeNoteText: {
    color: colors.black,
    fontStyle: 'italic',
    fontSize: 12,
    padding: 21,
    alignSelf: 'center',
    textAlign: 'center',
  },
});
