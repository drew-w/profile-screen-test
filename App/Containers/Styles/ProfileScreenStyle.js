import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../Themes/';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  modal: {
    marginTop: 100,
    height: 500,
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#000000',
  },
  button: {
    backgroundColor: Colors.frost,
    paddingHorizontal: 20,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 5,
    textAlign: 'left',
  },
  skills: {
    backgroundColor: Colors.lightBlue,
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
    margin: 4,
    paddingHorizontal: 7,
  },
});
