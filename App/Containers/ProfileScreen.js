import React, {Component} from 'react';
import {ScrollView, Text, Image, View, Modal, Pressable} from 'react-native';
import {connect} from 'react-redux';
import FullButton from '../Components/FullButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import Fonts from '../Themes/Fonts';
import Colors from '../Themes/Colors';
import RoundedButton from '../Components/RoundedButton';
import FakeInfo from '../Components/FakeInfo';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ProfileScreenStyle';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activityModalVisible: false,
      aboutModalVisible: false,
      name: 'Nathan Garcia',
      picture: require('../Images/34.jpeg'),
      isOnline: true,
      position: 'UI/UX Designer',
      about:
        'Not so many years ago businesses used to grunt at using illustrations in their marketing materials. But today, the use and influence of illustrations is growing right along. An illustration, image, or picture that does not express a distinct idea is a poor illustration.',
      skills: ['Business', 'Management', 'Creativity', 'Webdesign', 'PHP'],
      recentActivity: [
        {
          icon: 'calendar',
          date: '28 February',
          details: 'Meeting with client',
        },
        {
          icon: 'briefcase',
          date: '1 March',
          details: 'New incoming request',
        },
        {
          icon: 'calendar',
          date: '2 March',
          details: 'Meeting with client',
        },
        {
          icon: 'check-circle',
          date: '8 March',
          details: 'Marked 12 Tasks Done',
        },
        {
          icon: 'briefcase',
          date: '13 March',
          details: 'New incoming request',
        },
        {
          icon: 'credit-card',
          date: '16 March',
          details: 'Payout processed',
        },
        {
          icon: 'briefcase',
          date: '20 March',
          details: 'Marked 12 Tasks Done',
        },
      ],
    };
  }

  setAboutModal = visible => {
    this.setState({aboutModalVisible: visible});
  };

  setActivityModal = visible => {
    this.setState({activityModalVisible: visible});
  };

  render() {
    const mappedSkills = this.state.skills.map((e, i) => {
      return (
        <View
          key={i}
          style={{
            backgroundColor: Colors.lightBlue,
            height: 40,
            justifyContent: 'center',
            margin: 4,
            paddingHorizontal: 7,
          }}>
          <Text
            style={{
              color: Colors.facebook,
            }}>
            {e}
          </Text>
        </View>
      );
    });

    const mappedActivity = this.state.recentActivity.map((e, i) => {
      return (
        <View
          key={i}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 8,
          }}>
          <Icon
            name={e.icon}
            size={30}
            color={Colors.steel}
            style={{marginRight: 10}}
          />
          <Text
            style={{
              color: Colors.steel,
              marginHorizontal: 5,
              fontFamily: Fonts.style.normal.fontFamily,
              fontSize: Fonts.style.normal.fontSize,
            }}>
            {e.date}
          </Text>
          <Text
            style={{
              color: Colors.coal,
              marginHorizontal: 5,
              fontFamily: Fonts.style.normal.fontFamily,
              fontSize: Fonts.style.normal.fontSize,
            }}>
            {e.details}
          </Text>
        </View>
      );
    });

    const {aboutModalVisible, activityModalVisible} = this.state;
    return (
      <ScrollView style={styles.container}>
        <Modal visible={aboutModalVisible} animationType="slide">
          <View style={styles.modal}>
            <Text style={styles.heading}>More About {this.state.name}:</Text>
            <FakeInfo />
            <RoundedButton
              onPress={() => this.setAboutModal(!aboutModalVisible)}>
              Close
            </RoundedButton>
          </View>
        </Modal>

        <Modal visible={activityModalVisible} animationType="slide">
          <View style={styles.modal}>
            <Text style={styles.heading}>All Activity:</Text>
            <FakeInfo />
            <RoundedButton
              onPress={() => this.setActivityModal(!activityModalVisible)}>
              Close
            </RoundedButton>
          </View>
        </Modal>

        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: 300,
            borderWidth: 5,
            borderColor: Colors.silver,
          }}>
          <View style={{marginTop: 'auto'}}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Image
                style={{
                  width: 125,
                  height: 125,
                  borderRadius: 150 / 2,
                  borderWidth: 0,
                  marginBottom: 10,
                }}
                source={this.state.picture}
              />
              {this.state.isOnline ? (
                <View
                  style={{
                    backgroundColor: Colors.green,
                    borderRadius: 150 / 2,
                    borderWidth: 3,
                    borderColor: Colors.snow,
                    height: 15,
                    width: 15,
                    position: 'absolute',
                    bottom: 13,
                    right: 17,
                  }}
                />
              ) : (
                <></>
              )}
            </View>

            <Text
              style={{
                fontSize: 20,
                marginBottom: 5,
              }}>
              {this.state.name}
            </Text>
            <Text style={{color: Colors.charcoal, textAlign: 'center'}}>
              {this.state.position}
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
              borderColor: Colors.steel,
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
            justifyContent: 'flex-start',
            // alignItems: 'center',
            height: 360,
            borderWidth: 5,
            borderColor: Colors.silver,
            padding: 10,
            paddingTop: 15,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 25,
              marginBottom: 5,
            }}>
            About
          </Text>
          <Text
            style={{
              fontSize: Fonts.style.description.fontSize,
              fontFamily: Fonts.style.description.fontFamily,
              color: Colors.charcoal,
              lineHeight: 25,
            }}>
            {this.state.about}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {mappedSkills}
          </View>
          <FullButton
            text="Learn More"
            width={100}
            onPress={() => this.setAboutModal(true)}
          />
        </View>

        <View
          style={{
            flexDirection: 'column',
            height: 450,
            borderWidth: 5,
            borderColor: Colors.silver,
            padding: 10,
            paddingTop: 15,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 25,
              marginBottom: 5,
            }}>
            Recent activity
          </Text>
          {mappedActivity}
          <FullButton
            text="All Activities"
            onPress={() => this.setActivityModal(true)}
          />
        </View>
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
        backgroundColor="transparent"
        color={Colors.charcoal}
        borderColor={Colors.steel}
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
