/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {useEffect} from 'react';
import {StackActions, useNavigation} from '@react-navigation/native';
import {View, Image, StatusBar, Text} from 'react-native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    console.log('SplasScreen Terbuka');
    setTimeout(() => {
      navigation.dispatch(StackActions.replace('Home'));
    }, 3000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#0097A7',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle="light-content"
      />
      <View>
        <Image
          style={{width: 150, height: 150, marginVertical: 100}}
          source={require('./asset/splashscreen.png')}
        />
      </View>
      <Text style={{color: '#f0f0f0', fontWeight: '300'}}>
        Powerd By : Akael Project
      </Text>
    </View>
  );
};

export default SplashScreen;
