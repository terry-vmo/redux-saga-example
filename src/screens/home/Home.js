import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { actions } from './redux/actions';
import { HomeStyles as styles } from './HomeStyles';

const HomeScreen = props => {
  useEffect(() => {
    // get chanel by id
    props.getChanel(47);
  }, []);

  return (
    <View style={styles.container}>
      <Text>
        {props.homeReducer.chanelInfo
          ? props.homeReducer.chanelInfo.name
          : 'Home'}
      </Text>
    </View>
  );
};

const mstp = state => ({
  homeReducer: state.homeReducer,
});
const mdtp = dispatch => ({
  getChanel: chanelId => dispatch(actions.getChanel(chanelId)),
});

export default connect(mstp, mdtp)(HomeScreen);
