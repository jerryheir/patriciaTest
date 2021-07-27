import React from 'react';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Accordion} from 'native-base';
import {styles} from './styles';

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
    title: 'What is Cauli?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
  },
];

const FAQAccordion = ({accordion}) => {
  const array = accordion && accordion.length > 0 ? accordion : ACCORDION_FAQ;
  return (
    <>
      <Accordion
        index={[0]}
        // backgroundColor={colors.white}
        borderRadius={0}
        borderWidth={0}>
        {array.map((item, key) => {
          return (
            <Accordion.Item key={key} style={styles.accordionItem}>
              <Accordion.Summary
                _expanded={styles.expandedSummary}
                style={styles.summaryContainer}>
                <Text style={styles.summaryText}>{item.title}</Text>
                <Icon name="add" size={21} />
              </Accordion.Summary>
              <Accordion.Details style={styles.detailsContainer}>
                <Text style={styles.detailsText}>{item.content}</Text>
              </Accordion.Details>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </>
  );
};

export default FAQAccordion;
