import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { actions } from './redux/actions';

const LoginScreen = props => {
  const onClickLogin = () => {
    const loginInfo = {
      email: 'test2@gmail.com',
      password: '123',
    };
    props.login(loginInfo);
  };

  useEffect(() => {
    const { isLoading, jwt_token } = props.loginReducer;
    // check nếu như mà ko loading nữa + jwt_token có nghĩa là call api success
    if (!isLoading && jwt_token !== '') {
      // todo: lưu jwt_token lại để lần sau vào splash check xem có rồi thì đã login rồi
      props.navigation.navigate('Home');
    }
  }, [props.loginReducer, props.navigation]);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.containerBtnLogin} onPress={onClickLogin}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerBtnLogin: {
    backgroundColor: 'red',
    padding: 20,
  },
});

const mstp = state => ({
  loginReducer: state.loginReducer,
});
const mdtp = dispatch => ({
  login: loginInfo => dispatch(actions.login(loginInfo)),
});

export default connect(mstp, mdtp)(LoginScreen);
