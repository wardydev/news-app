import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const Thumbnail = () => {
  return (
    <View>
      <Image
        source={{
          uri: 'https://eyemartnepal.com/wp-content/uploads/2019/05/Screenshot_20200303-215853__01.jpg',
        }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    borderRadius: 12,
  },
});

export default Thumbnail;
