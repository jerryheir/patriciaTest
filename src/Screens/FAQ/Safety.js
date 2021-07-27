import React from 'react';
import FAQ from '.';

const CATEGORIES = [
  {
    icon: require('../../Assets/Images/generalPurpleIcon.png'),
    text: 'General',
    route: 'faq',
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

const Safety = ({navigation}) => {
  return (
    <FAQ
      swipes={[
        {
          bg: require('../../Assets/Images/SafetySwipe.png'),
          text: 'Safety and Security',
          icon: require('../../Assets/Images/generalWhiteIcon.png'),
        },
      ]}
      categories={CATEGORIES}
      navigation={navigation}
    />
  );
};

export default Safety;
