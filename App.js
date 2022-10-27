import { View, StatusBar } from 'react-native';
import { Post } from './components/Post';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function App() {
  const [items, setItems] = useState();
  useEffect(() => {
    axios
      .get('http://localhost:3000/news')
      .then(({ data }) => setItems(data))
      .catch((error) => console.error(error));
  }, []);

  console.log(items);

  return (
    <View>
      <Post
        title='Hello'
        createAt='27.10.2022'
        imageUrl='https://cdn.pixabay.com/photo/2013/09/29/18/19/dog-188273_960_720.jpg'
      />
      <StatusBar theme='auto' />
    </View>
  );
}
