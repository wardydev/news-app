import React from 'react';
import {View, StyleSheet} from 'react-native';

const Layout = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
  },
});

export default Layout;
