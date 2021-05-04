import React, {Component} from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" />
    </Tab.Navigator>
  );
};

export default Tabs;
