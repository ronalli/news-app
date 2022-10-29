import {
  View,
  Text,
  StatusBar,
  Alert,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import { Post } from './components/Post';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function App() {
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

  if (isLoading)
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ActivityIndicator size='large' />
        <Text
          style={{
            marginTop: 15,
            fontWeight: 'bold',
          }}
        >
          Loading...
        </Text>
      </View>
    );

  return (
    <View>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />
        }
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Post {...item} />
          </TouchableOpacity>
        )}
      />
      <StatusBar theme='auto' />
    </View>
  );
}
