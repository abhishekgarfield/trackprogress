import {Styles} from '../../styles/common_styles';
import {Button, TextInput, TouchableOpacity, View, Text} from 'react-native';

export const Row = ({children}) => {
  return <View style={Styles.rowStyles}>{children}</View>;
};

export const Col = ({children}) => {
  return <View>{children}</View>;
};

export const Inputfield = ({type, placeHolder}) => {
  return (
    <TextInput
      keyboardType={type == 'numeric' ? 'decimal-pad' : 'default'}
      placeholder={placeHolder}
      style={Styles.inputFieldStyles}
    />
  );
};

export const Buttonfield = ({color, title, disabled, backgroundColor}) => {
  return (
    <TouchableOpacity
      color={color}
      disabled={disabled}
      style={[Styles.butoonStyles,{backgroundColor:backgroundColor}]}>
      <Text style={{textAlign:'center',color:`${color}`,alignItems:'center'}}>{title}</Text>
    </TouchableOpacity>
  );
};
