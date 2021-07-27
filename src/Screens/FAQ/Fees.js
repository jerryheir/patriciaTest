import React from 'react';
import FAQ from '.';

const CATEGORIES = [
  {
    icon: require('../../Assets/Images/generalPurpleIcon.png'),
    text: 'General',
    route: 'faq',
  },
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
];

const Fees = ({navigation}) => {
  return (
    <FAQ
      swipes={[
        {
          bg: require('../../Assets/Images/FeesSwipe.png'),
          text: 'Fees and Charges',
          icon: require('../../Assets/Images/generalWhiteIcon.png'),
        },
      ]}
      categories={CATEGORIES}
      navigation={navigation}
    />
  );
};

export default Fees;
