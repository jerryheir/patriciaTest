import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FAQAccordion from '../../Components/FAQAccordion';
import FAQSwiper from '../../Components/FAQSwiper';
import HeaderAtom from '../../Components/Header';
import {colors} from '../../Styles/Colors';

const FAQ = ({swipes, accordion, navigation, categories}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.innerView}>
          <HeaderAtom
            onBack={() => navigation.navigate('home')}
            headerText={'FAQ'}
          />
          <FAQSwiper swipes={swipes && swipes.length > 0 ? swipes : null} />
          <FAQAccordion
            accordion={accordion && accordion.length > 0 ? accordion : null}
          />
        </View>
        <View style={styles.bottomView}>
          <View style={styles.decisionHelpfulCard}>
            <View style={styles.innerDecisionRow}>
              <Text style={styles.helpfulHeaderText}>
                Was this information helpful?
              </Text>
              <Icon name="close" size={18} />
            </View>
            <View style={styles.innerDecisionRow}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.decisionButton}>
                <View style={styles.emojiContainer}>
                  <Image
                    style={styles.emojiIcon}
                    source={require('../../Assets/Images/smileEmoji.png')}
                  />
                  <Text style={styles.decisionButtonText}>Yes</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.decisionButton}>
                <View style={styles.emojiContainer}>
                  <Image
                    style={styles.emojiIcon}
                    source={require('../../Assets/Images/upsetEmoji.png')}
                  />
                  <Text style={styles.decisionButtonText}>No</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.otherCatText}>Other categories</Text>
          {categories &&
            categories.map((item, key) => {
              return (
                <TouchableOpacity
                  key={key}
                  style={styles.catContainer}
                  onPress={() => {
                    navigation.navigate(item.route);
                  }}>
                  <View style={styles.emojiContainer}>
                    <Image source={item.icon} style={styles.catImage} />
                    <Text style={styles.catText}>{item.text}</Text>
                  </View>
                  <Icon name="chevron-right" size={24} />
                </TouchableOpacity>
              );
            })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FAQ;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  innerView: {
    backgroundColor: colors.white,
  },
  bottomView: {
    backgroundColor: colors.lightestGray,
    flex: 1,
  },
  decisionHelpfulCard: {
    backgroundColor: colors.white,
    margin: 21,
    marginTop: 16,
    borderRadius: 8,
    padding: 16,
    minHeight: 42,
  },
  innerDecisionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  decisionButton: {
    backgroundColor: colors.lightestGray,
    height: 32,
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    marginTop: 11,
    marginBottom: 5,
  },
  helpfulHeaderText: {
    fontWeight: 'bold',
    color: colors.black,
    fontSize: 15,
  },
  emojiContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emojiIcon: {
    height: 16,
    width: 16,
    resizeMode: 'contain',
  },
  decisionButtonText: {
    marginLeft: 11,
  },
  otherCatText: {
    fontWeight: 'bold',
    color: colors.black,
    fontSize: 15,
    marginHorizontal: 21,
    marginBottom: 21,
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
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 11,
  },
  catText: {
    color: colors.black,
    fontSize: 15,
    paddingLeft: 16,
  },
});
