import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo'
import { bootstrap } from './src/bootstrap';
import { DrawerNavigator } from './src/navigation/DrawerNavigator';

export default function App() {

  const [isReady, setIsReady] = useState(false)

  if(!isReady) {
    return (
      <AppLoading
      startAsync={ bootstrap }
      onFinish={() => setIsReady(true)}
      onError={(e) => console.log(e)}
      />
    )
  }

  return <DrawerNavigator />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});