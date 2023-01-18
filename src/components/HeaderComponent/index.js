import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HeaderComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aplikasi News Film</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    height: 120,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default HeaderComponent;
