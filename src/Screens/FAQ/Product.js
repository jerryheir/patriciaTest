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
    icon: require('../../Assets/Images/feesOrangeIcon.png'),
    text: 'Fees and Charges',
    route: 'fees',
  },
];
const ACCORDION_FAQ = [
  {
    title: 'What is Cauli?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
  },
  {
    title: 'Why should I buy giftcards on Cauli',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
  },
  {
    title: 'What is Cauli?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
  },
  {
    title: 'What is Cauli?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
  },
  {
    title: 'What is Glover?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
  },
];

const Product = ({navigation}) => {
  return (
    <FAQ
      swipes={[
        {
          bg: require('../../Assets/Images/ProductSwipe.png'),
          text: 'Product',
          icon: require('../../Assets/Images/productWhiteIcon.png'),
        },
      ]}
      accordion={ACCORDION_FAQ}
      categories={CATEGORIES}
      navigation={navigation}
    />
  );
};

export default Product;
