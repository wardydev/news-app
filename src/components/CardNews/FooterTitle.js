import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FooterTitle = () => {
  return (
    <View>
      <Text style={styles.title}>FooterTitle</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 6,
    opacity: 0.6,
  },
});

export default FooterTitle;
