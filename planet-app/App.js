import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, ActivityIndicator, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import Text from './src/components/text/text';

export default function App() {

  let [fontsLoaded] = useFonts({
    'Antonio-Medium': require('./assets/fonts/Antonio-Medium.ttf'),
    'Spartan-Bold': require('./assets/fonts/Spartan-Bold.ttf'),
    'Spartan-Regular': require('./assets/fonts/Spartan-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }else{
    return (
    <SafeAreaView style={styles.container}>
      <Text preset="h1">Hello</Text>
    </SafeAreaView>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
