import React, {Component} from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';

export default class NavBar extends Component {
  static propTypes = {
    text: PropTypes.string,
    styles: PropTypes.object,
  };
  render() {
    return <Text>this is the NavBar</Text>;
  }
}
