import  React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { AllNotesScreen } from '../screens/AllNotesScreen';
import { FrequentlyScreen } from '../screens/FrequentlyScreen';
import { LockedNotesScreen } from '../screens/LockedNotesScreen';
import { TrashScreen } from '../screens/TrashScreen';
import { AllNotesStack } from './StackNavigator';

const Drawer = createDrawerNavigator();

export const  DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="All notes">
        <Drawer.Screen name="All notes" component={ AllNotesStack } />
        <Drawer.Screen name="Locked notes" component={ LockedNotesScreen } />
        <Drawer.Screen name="Frequently used" component={ FrequentlyScreen } />
        <Drawer.Screen name="Trash" component={ TrashScreen } />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}