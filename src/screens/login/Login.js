import React, { useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { BaseText } from '../../components/text';
import { actions } from './redux/actions';
import { LoginStyles as styles } from './LoginStyles';
import database from '@react-native-firebase/database';

const LoginScreen = props => {
  const onClickLogin = () => {
    const loginInfo = {
      email: 'test2@gmail.com',
      password: '123',
    };
    props.login(loginInfo);
  };

  useEffect(() => {
    database()
      .ref('/users/123')
      .set({
        name: 'Ada Lovelace',
        age: 31,
      })
      .then(() => console.log('Data set.'));
  }, []);

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
        <BaseText>Login</BaseText>
      </TouchableOpacity>
    </View>
  );
};

const mstp = state => ({
  loginReducer: state.loginReducer,
});
const mdtp = dispatch => ({
  login: loginInfo => dispatch(actions.login(loginInfo)),
});

export default connect(mstp, mdtp)(LoginScreen);
