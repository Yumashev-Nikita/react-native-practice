import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import TrackContainer from '../components/TrackContainer'

export default function Likes() {
  return (
    <View style={  likes.mainContainer }>
      <Text style={ likes.title }> Likes </Text>
      <TrackContainer />
    </View>
  );
}

const  likes = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
  }
});