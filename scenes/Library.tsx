import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Library() {
  return (
    <View style={ library.mainContainer }>
      <Text>Library</Text>
    </View>
  );
}

const library = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});