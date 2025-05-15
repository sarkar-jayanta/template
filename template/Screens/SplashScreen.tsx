import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const SplashScreen = ({navigation}: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  });
  return (
    <View style={styles.container}>
      <Text style={{color: 'black', height: 100, width: 100}}>
        SplashScreen
      </Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
