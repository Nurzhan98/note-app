import React, {useState} from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { AllNotesScreen } from '../screens/AllNotesScreen';
import { SearchScreen } from '../screens/SearchScreen';
import { CreateScreen } from '../screens/CreateScreen';
import { THEME } from '../theme';
import { NAVIGATOR_THEMES_ANS } from '../navigatorThemes';
import { OverflowMenuProvider } from 'react-navigation-header-buttons';

const Stack = createStackNavigator();

export const AllNotesStack = () => {

  
  return (
    <OverflowMenuProvider>
        <Stack.Navigator
    >
      <Stack.Screen 
        name="AllNotesScreen"  
        component={ AllNotesScreen }
             
      />
      <Stack.Screen name="Search"    component={ SearchScreen } />
      <Stack.Screen name="Create"  component={ CreateScreen } />
    </Stack.Navigator>
    </OverflowMenuProvider>
    
  );
}