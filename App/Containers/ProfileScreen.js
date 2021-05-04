import React, {Component} from 'react';
import {ScrollView, Text} from 'react-native';
import {connect} from 'react-redux';
import FullButton from '../Components/FullButton';
import NavBar from '../Navigation/NavBar';
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
    // const styles = StyleSheet.create
    return (
      <ScrollView style={styles.container}>
        <Text>ProfileScreen Container</Text>
        <FullButton
          text="Learn More"
          onPress={() => window.alert('you did it!')}
        />
        <FullButton
          text="All Activites"
          onPress={() => window.alert('you did it!')}
        />
        <NavBar />
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
