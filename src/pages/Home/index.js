import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import axios from 'axios';

import CardNews from '../../components/CardNews';
import Layout from '../../components/Layout';
import HeaderComponent from '../../components/HeaderComponent';

const Home = () => {
  const [posts, setPosts] = useState([]);

  const getDataPosts = async () => {
    try {
      const {data} = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
      );
      setPosts(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDataPosts();
  }, []);

  const renderPosts = ({item}) => {
    return (
      <View>
        <CardNews post={item} />
      </View>
    );
  };

  return (
    <Layout>
      <HeaderComponent />
      <View style={styles.container}>
        <Text style={styles.heading}>Latest News</Text>
        <View style={styles.cardNewsContainer}>
          <FlatList
            data={posts}
            renderItem={renderPosts}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  cardNewsContainer: {
    marginTop: 6,
  },
});

export default Home;
