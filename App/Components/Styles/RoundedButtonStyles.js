import {StyleSheet} from 'react-native';
import {Fonts, Colors, Metrics} from '../../Themes/';

export default StyleSheet.create({
  button: {
    height: 45,
    borderRadius: 5,
    marginHorizontal: Metrics.section,
    marginVertical: Metrics.baseMargin,
    backgroundColor: Colors.frost,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  buttonText: {
    color: Colors.coal,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: Fonts.size.medium,
    marginVertical: Metrics.baseMargin,
  },
});
