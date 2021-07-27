import React, {PureComponent} from 'react';
import {Text, Dimensions, ImageBackground, Image} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {styles} from './styles';

const SWIPE_ARRAY = [
  {
    bg: require('../../Assets/Images/GeneralSwipe.png'),
    text: 'General',
    icon: require('../../Assets/Images/generalWhiteIcon.png'),
  },
  {
    bg: require('../../Assets/Images/SafetySwipe.png'),
    text: 'Safety and Security',
    icon: require('../../Assets/Images/safetyWhiteIcon.png'),
  },
  {
    bg: require('../../Assets/Images/ProductSwipe.png'),
    text: 'Product',
    icon: require('../../Assets/Images/productWhiteIcon.png'),
  },
  {
    bg: require('../../Assets/Images/FeesSwipe.png'),
    text: 'Fees and Charges',
    icon: require('../../Assets/Images/generalWhiteIcon.png'),
  },
];

class FAQSwiper extends PureComponent {
  renderItem = ({item}) => {
    return (
      <ImageBackground style={styles.faqSwipeContainer} source={item.bg}>
        <Image style={styles.faqSwipeIcon} source={item.icon} />
        <Text style={styles.faqSwipeText}>{item.text}</Text>
      </ImageBackground>
    );
  };
  render() {
    const {swipes} = this.props;
    return (
      <>
        <Carousel
          data={swipes && swipes.length > 0 ? swipes : SWIPE_ARRAY}
          autoplay={false}
          loop={true}
          scrollEnabled={false}
          renderItem={this.renderItem}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={Dimensions.get('window').width}
        />
      </>
    );
  }
}

export default FAQSwiper;
