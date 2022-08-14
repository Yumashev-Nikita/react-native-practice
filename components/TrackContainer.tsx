import React from 'react';
import { SafeAreaView, View, Image, FlatList, StyleSheet, Text } from 'react-native';

import { ITrack } from '../interfaces/track' 

const DATA: ITrack[] = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Cepheid ~ Goddess [ Feat. Nonon ]",
    subtitle: "Related tracks",
    image: "https://i1.sndcdn.com/artworks-Unja3xDcEeqt16zG-vAMnLQ-t200x200.jpg",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "M2U - Myosotis (Extended Mix)",
    subtitle: "Related tracks",
    image: "https://i1.sndcdn.com/artworks-000123257081-wtlqqi-t200x200.jpg",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "DAY OF DEAD - Konrad OldMoney ft. Taelor Yung (Cyberpunk 2077 Soundtrack)",
    subtitle: "Related tracks",
    image: "https://i1.sndcdn.com/artworks-HsnuX6bOrjDDAzaj-ruXM1Q-t200x200.jpg",
  },
];

const Item = ({ item }) => (
  <View style={ track.wrapper }>
    <Image
      style={ track.image }
      source={{uri: item.image}}
    />
    <Text numberOfLines={1} style={ track.title }>{ item.title }</Text>
    <Text numberOfLines={1} style={ track.subtitle }>{ item.subtitle }</Text>
  </View>
);

export default function TrackContainer() {
  const renderItem = ({ item }) => (
    <Item item={ item }/>
  );
  return (
    <View style={ tracks.mainContainer }>
      <FlatList
        data={ DATA }
        renderItem={ renderItem }
        keyExtractor={ (item: ITrack) => { return item.id } }
        numColumns={3}
      />
    </View>
  );
}

const tracks = StyleSheet.create({
  mainContainer: {
    marginTop: 20,
    flexDirection: 'row',
    width: '100%',
  },
});

const track = StyleSheet.create({
  wrapper: {
    width: 130,
    marginHorizontal: 5,
    flexDirection: 'column',
    padding: 5,
  },
  title: {
    height: 24,
    marginTop: 5,
    color: 'black',
  },
  subtitle: {
    fontWeight: '100',
    fontSize: 12,
    color: 'grey',
  },
  image: {
    width: 115,
    height: 115,
  }
});