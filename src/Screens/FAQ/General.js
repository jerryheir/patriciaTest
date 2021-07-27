import React from 'react';
import FAQ from '.';

const CATEGORIES = [
  {
    icon: require('../../Assets/Images/safetyGreenIcon.png'),
    text: 'Safety and Security',
    route: 'safety',
  },
  {
    icon: require('../../Assets/Images/productPurpleIcon.png'),
    text: 'Product',
    route: 'product',
  },
  {
    icon: require('../../Assets/Images/feesOrangeIcon.png'),
    text: 'Fees and Charges',
    route: 'fees',
  },
];

const General = ({navigation}) => {
  return (
    <FAQ
      swipes={[
        {
          bg: require('../../Assets/Images/GeneralSwipe.png'),
          text: 'General',
          icon: require('../../Assets/Images/generalWhiteIcon.png'),
        },
      ]}
      categories={CATEGORIES}
      navigation={navigation}
    />
  );
};

export default General;
