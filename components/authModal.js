import {Button, KeyboardAvoidingView, SafeAreaView, TextInput} from 'react-native';
import {Buttonfield, Col, Inputfield, Row} from '../common/common_component/common_components';
import { Platform } from 'react-native';

const AuthModal = () => {
  return (
    <SafeAreaView style={{flex:1,justifyContent:'center',flexDirection:"column"}}>
    <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'position'} keyboardVerticalOffset={Platform.OS == 'ios' ? 100 : ''} >
      <Col>
        <Inputfield placeHolder="email" type={'email'}/>
        <Inputfield placeHolder="password" type={'password'} />
      </Col>
      <Col>
        <Buttonfield title={'Login'} color={'red'} disabled={false} backgroundColor={'skyblue'}/>
      </Col>
    </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default AuthModal;
