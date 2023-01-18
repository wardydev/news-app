import React from 'react';
import {View, StyleSheet} from 'react-native';
import FooterTitle from './FooterTitle';
import Thumbnail from './Thumbnail';
import Title from './Title';

const CardNews = ({post}) => {
  return (
    <View style={styles.container}>
      <Thumbnail />
      <View style={styles.content}>
        <Title title={post.title} />
        <FooterTitle />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 8,
  },
  content: {
    marginLeft: 12,
  },
});

export default CardNews;
