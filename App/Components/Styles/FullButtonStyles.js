import {StyleSheet} from 'react-native';
import {Fonts, Colors} from '../../Themes/';

export default StyleSheet.create({
  button: {
    marginVertical: 5,
    borderTopColor: Colors.cloud,
    borderBottomColor: Colors.bloodOrange,
    borderTopWidth: 2,
    borderBottomWidth: 0,
    backgroundColor: Colors.transparent,
  },
  buttonText: {
    margin: 18,
    textAlign: 'center',
    color: Colors.coal,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.bold,
  },
});
