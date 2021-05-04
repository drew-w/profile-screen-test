import React, {Component} from 'react';
import {ScrollView, Text, Image, View} from 'react-native';
import {connect} from 'react-redux';
import FullButton from '../Components/FullButton';

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ProfileScreenStyle';

class ProfileScreen extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: 500,
          }}>
          <Image
            style={{width: 100, height: 100}}
            source={require('../Images/34.jpeg')}
          />
          <Text>test text</Text>
        </View>

        <FullButton text="Learn More" />
        <FullButton text="All Activities" />
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileScreen);
