import {
  View,
  StatusBar,
  Alert,
  FlatList,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Loading } from '../components/Loading';
import { Post } from '../components/Post';

export const Home = ({ navigation }) => {
  const [items, setItems] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchPosts = () => {
    setIsLoading(true);
    axios
      .get('https://635d806107076ac24f3e5d05.mockapi.io/news')
      .then(({ data }) => setItems(data))
      .catch((error) => {
        Alert.alert('Ошибка', 'Не удалось получить статьи');
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(fetchPosts, []);

  if (isLoading) return <Loading />;

  return (
    <View>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />
        }
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('FullPost', {
                id: item.id,
                title: item.title,
              })
            }
          >
            <Post {...item} />
          </TouchableOpacity>
        )}
      />
      <StatusBar theme='auto' />
    </View>
  );
};
