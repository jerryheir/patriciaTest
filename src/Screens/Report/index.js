import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ButtonAtom from '../../Components/Button';
import HeaderAtom from '../../Components/Header';
import InputAtom from '../../Components/Input';
import {colors} from '../../Styles/Colors';

const Report = ({navigation}) => {
  const [images, setImages] = useState([]);
  const showPicker = () => {
    ImagePicker.openPicker({
      compressImageQuality: 1,
      height: 300,
      width: 300,
      mediaType: 'photo',
      includeBase64: true,
      multiple: true,
      maxFiles: 5 - images.length,
    })
      .then(async i => {
        setImages([...images, ...i]);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.innerView}>
          <HeaderAtom
            onBack={() => navigation.navigate('home')}
            headerText={'Report an issue'}
          />
        </View>
        <View style={styles.bottomView}>
          <View>
            <Text style={styles.inputSubText}>
              What issue are you reporting?
            </Text>
            <InputAtom
              placeholder={'Tell us what happened'}
              icon={
                <Icon
                  style={styles.arrowRightIcon}
                  name="arrow-right"
                  size={24}
                />
              }
            />
          </View>
          <View style={styles.textAreaView}>
            <Text style={styles.inputSubText}>
              Anything else you would like us to know?
            </Text>
            <InputAtom
              placeholder={'Any extra information to describe the issue'}
              multiline={true}
              style={styles.textAreaStyle}
            />
          </View>
        </View>
        {(!images || (images && images.length === 0)) && (
          <TouchableOpacity style={styles.attachView} onPress={showPicker}>
            <Icon name="camera-alt" color={colors.primary} size={21} />
            <Text style={styles.attachText}>Attach screenshot</Text>
          </TouchableOpacity>
        )}
        {images && images.length > 0 && (
          <View style={styles.selectedWhiteView}>
            <View style={styles.borderBottomView}>
              <Text style={styles.fontWeightBold}>Images</Text>
              <View style={styles.opacityRow}>
                <Icon
                  onPress={showPicker}
                  name="camera-alt"
                  color={colors.black}
                  size={16}
                />
                <Text onPress={showPicker} style={styles.paddingLeft11}>
                  Add screenshot
                </Text>
              </View>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.hScroll}>
              {images.map((val, key) => {
                return (
                  <View key={key} style={styles.selectedView}>
                    <Image
                      source={
                        val && val.path
                          ? {uri: val.path}
                          : require('../../Assets/Images/suggestionSent.png')
                      }
                      style={styles.selectedImg}
                    />
                    <TouchableOpacity
                      onPress={() =>
                        setImages(
                          images.filter(value => value.path !== val.path),
                        )
                      }
                      activeOpacity={0.8}
                      style={styles.closeSelected}>
                      <Icon name="close" color={colors.white} size={12} />
                    </TouchableOpacity>
                  </View>
                );
              })}
            </ScrollView>
          </View>
        )}
        <ButtonAtom buttonText={'Submit'} onPress={() => {}} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Report;

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
  selectedImg: {
    height: 79,
    width: 79,
  },
  selectedView: {
    marginRight: 16,
    marginTop: 16,
  },
  hScroll: {
    paddingHorizontal: 21,
  },
  selectedAttachView: {},
  selectedAttachText: {},
  closeSelected: {
    backgroundColor: colors.primary,
    height: 14,
    width: 14,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 99,
    top: -3,
    right: -5,
  },
  opacityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    opacity: 0.7,
  },
  paddingLeft11: {
    paddingLeft: 11,
  },
  borderBottomView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 21,
    alignItems: 'center',
    borderBottomColor: colors.darkGray,
    borderBottomWidth: 1,
    paddingVertical: 14,
  },
  fontWeightBold: {
    fontWeight: 'bold',
  },
  selectedWhiteView: {
    backgroundColor: colors.white,
    paddingBottom: 21,
    marginBottom: 11,
  },
});
