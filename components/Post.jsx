import React from 'react';
import { Text, View, Image } from 'react-native';
import styled from 'styled-components/native';

const PostView = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`;

const PostImage = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 12px;
  margin-right: 12px;
`;

const PostTitle = styled.Text`
  font-size: 17px;
  font-weight: 700;
`;

const PostDetails = styled.View`
  justify-content: center;
`;

const PostDate = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  margint-top: 2px;
`;

export const Post = ({ title, imageUrl, createAt }) => {
  return (
    <PostView>
      <PostImage
        source={{
          uri: imageUrl,
        }}
      />
      <PostDetails>
        <PostTitle>{title}</PostTitle>
        <PostDate>{createAt}</PostDate>
      </PostDetails>
    </PostView>
  );
};
