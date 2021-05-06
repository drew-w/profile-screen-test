import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../Themes/Colors';

const NavBar = () => {
  const icons = ['hourglass', 'briefcase', 'tasks', 'table', 'angle-double-up'];

  const mappedIcons = icons.map((e, i) => {
    return (
      <Icon.Button
        key={i}
        name={e}
        size={30}
        color={e === 'angle-double-up' ? Colors.facebook : Colors.steel}
        backgroundColor="transparent"
        onPress={() => window.alert('navigating to other view')}
      />
    );
  });
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: 75,
        borderTopWidth: 2,
        borderTopColor: Colors.steel,
      }}>
      {mappedIcons}
    </View>
  );
};

export default NavBar;
