import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Modal from 'react-native-modal';
import ButtonAtom from '../../Components/Button';
import HeaderAtom from '../../Components/Header';
import InputAtom from '../../Components/Input';
import {colors} from '../../Styles/Colors';

const Suggest = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Modal isVisible={isModalVisible}>
        <View style={styles.whiteModalView}>
          <View style={styles.suggestionImageView}>
            <Image
              source={require('../../Assets/Images/suggestionSent.png')}
              style={styles.suggestionImage}
            />
          </View>
          <View style={styles.marginTop70}>
            <Text style={styles.suggestionText}>Suggestion Sent!</Text>
            <Text style={styles.suggestionSubText}>
              Awesome! We’ll share your suggestion with other users to vote on.
              The highest voted features would be reviewed by the Cauli team
            </Text>
          </View>
          <ButtonAtom
            style={styles.modalButton}
            buttonText={'Go to home'}
            onPress={() => setModalVisible(false)}
          />
        </View>
      </Modal>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.innerView}>
          <HeaderAtom
            onBack={() => navigation.navigate('home')}
            headerText={'Suggest a feature'}
          />
        </View>
        <View style={styles.bottomView}>
          <View>
            <Text style={styles.inputSubText}>Give your feature a title</Text>
            <InputAtom placeholder={'Enter feature name'} />
          </View>
          <View>
            <Text style={styles.inputSubText}>
              What type of feature is this?
            </Text>
            <InputAtom placeholder={'E.g: payment'} />
          </View>
          <View style={styles.textAreaView}>
            <Text style={styles.inputSubText}>
              Tell me more about this feature
            </Text>
            <InputAtom
              placeholder={'Type a description'}
              multiline={true}
              style={styles.textAreaStyle}
            />
          </View>
        </View>
        <ButtonAtom
          style={styles.marginTop50}
          buttonText={'Complete'}
          onPress={() => setModalVisible(true)}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Suggest;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightestGray,
    flex: 1,
  },
  innerView: {
    backgroundColor: colors.lightestGray,
  },
  bottomView: {
    backgroundColor: colors.white,
    flex: 1,
  },
  inputSubText: {
    fontWeight: '700',
    fontSize: 15,
    margin: 21,
  },
  arrowRightIcon: {
    position: 'absolute',
    zIndex: 99,
    right: 21,
    top: 14,
  },
  textAreaStyle: {
    height: 130,
    paddingTop: 16,
  },
  textAreaView: {
    paddingBottom: 26,
  },
  attachView: {
    minHeight: 79,
    width: '100%',
    backgroundColor: colors.white,
    paddingHorizontal: 21,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 21,
  },
  attachText: {
    fontSize: 16,
    color: colors.primary,
    paddingLeft: 16,
  },
  marginTop50: {
    marginTop: 50,
  },
  whiteModalView: {
    height: 290,
    width: 305,
    backgroundColor: colors.white,
    borderRadius: 21,
    alignSelf: 'center',
  },
  suggestionImageView: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: -20,
    zIndex: 99,
  },
  suggestionImage: {
    height: 80,
    width: 80,
  },
  marginTop70: {
    marginTop: 70,
  },
  suggestionText: {
    color: colors.black,
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
  },
  suggestionSubText: {
    color: colors.black,
    fontSize: 14,
    lineHeight: 19,
    paddingHorizontal: 21,
    paddingVertical: 11,
    alignSelf: 'center',
    textAlign: 'center',
    opacity: 0.8,
  },
  modalButton: {
    width: 242,
  },
});
