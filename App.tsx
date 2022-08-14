import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './scenes/Home'
import Likes from './scenes/Likes'
import Library from './scenes/Library'

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        barStyle={{ backgroundColor: "#0F4C75" }}
      >
      <Tab.Screen
          name="Home"
          component={ Home }
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <AntDesign name="home" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Likes"
          component={ Likes }
          options={{
            tabBarLabel: 'Likes',
            tabBarIcon: ({ color }) => (
              <AntDesign name="heart" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Library"
          component={ Library }
          options={{
            tabBarLabel: 'Library',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bookshelf" color={color} size={24} />
            ),
          }}
        />
    </Tab.Navigator>
    </NavigationContainer>
  );
}
