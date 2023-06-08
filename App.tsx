/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {MyNotes} from '@src/MyNotes';
import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';

function App() {
  const backgroundStyle = {
    backgroundColor: '#F8F8FA',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar backgroundColor={backgroundStyle.backgroundColor} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <MyNotes />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
