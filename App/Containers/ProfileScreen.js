import React, {Component} from 'react';
import {ScrollView, Text, Image, View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import FullButton from '../Components/FullButton';
import Icon from 'react-native-vector-icons/FontAwesome';

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
            height: 300,
            borderWidth: 5,
            borderColor: '#F7F7F7',
          }}>
          <View style={{marginTop: 'auto'}}>
            <Image
              style={{
                width: 125,
                height: 125,
                borderRadius: 150 / 2,
                borderWidth: 0,
                marginBottom: 10,
              }}
              source={require('../Images/34.jpeg')}
            />
            <Text
              style={{
                fontSize: 20,
                marginBottom: 5,
              }}>
              Nathan Garcia
            </Text>
            <Text style={{color: '#595959', textAlign: 'center'}}>
              UI/UX Designer
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              height: 70,
              width: '100%',
              marginTop: 'auto',
              borderTopWidth: 1,
              borderColor: '#CCCCCC',
            }}>
            <IconButton name="facebook" margin="5" />
            <IconButton name="pinterest-p" margin="4" />
            <IconButton name="twitter" margin="2" />
            <IconButton name="linkedin" margin="3" />
          </View>
        </View>

        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: 300,
            borderWidth: 5,
            borderColor: '#F7F7F7',
          }}>
          <Text>About</Text>
          <FullButton text="Learn More" width={100} />
        </View>

        {/* <FullButton text="All Activities" /> */}
      </ScrollView>
    );
  }
}

const IconButton = ({name, margin}) => {
  const parsed = parseInt(margin, 10);
  return (
    <>
      <Icon.Button
        name={name}
        backgroundColor="#transparent"
        color="#595959"
        borderColor="#CCCCCC"
        borderWidth={1}
        borderRadius={25}
        iconStyle={{marginRight: parsed, marginLeft: parsed}}
        onPress={() => window.alert(`taking you to ${name}`)}
        marginRight={2}
        marginLeft={2}
      />
    </>
  );
};

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
