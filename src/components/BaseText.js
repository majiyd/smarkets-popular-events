import React from 'react';
import {Text, StyleSheet} from 'react-native';
import Colors from '../theme/colors';

const BaseText = ({children, type, style}) => {
  if (type === 'header') {
    return <Text style={[styles.headerText, style]}>{children}</Text>;
  }

  return <Text style={[styles.secondaryText, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    color: Colors.white,
    textAlign: 'center',
    fontWeight: '600',
  },
  secondaryText: {
    fontSize: 16,
    color: Colors.white,
    lineHeight: 20,
  },
});
export default BaseText;
