import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Title = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title} numberOfLines={5}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
  },
  title: {
    fontSize: 19,
    fontWeight: 500,
  },
});

export default Title;
