import React from 'react'
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import { Index } from '../../Assets/Index';

const { Images, Strings , Colors } = Index;


export default function ButtonCustomComponent(props) {
    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.styleView} >
            <Text style={styles.textStyle}>{props.btnText}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    styleView:
    {
        height:43,
        width:'100%',
        backgroundColor:Colors.drakGray,
        marginTop:20,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5
    },
    textStyle:
    {
        color:Colors.white,
        fontSize:18
    }
})
