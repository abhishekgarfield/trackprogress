import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    rowStyles:{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor:'red'
    },
    colStyles:{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'yellow'
    },
    inputFieldStyles:{
        height:50,
        padding:10,
        margin:10,
        borderRadius:3,
        backgroundColor:'lightgrey',
    },
    butoonStyles:{
        padding:10,
        paddingRight:70,
        paddingLeft:70,
        margin:10,
        fontSize:30,
        borderRadius:3,
        fontWeight:'bold',
        alignSelf:'center',
    }
})
