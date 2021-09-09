import React from 'react'
import { StyleSheet, TextInput, View, Image } from 'react-native'
import { Index } from '../../Assets/Index';

const {Colors } = Index;



export default function TextInputCustomComponent(props) {
    return (
        <View style={styles.textInputView}>
            <View style={styles.iconView}>
                <Image source={props.user_Icon} style={styles.imageStyle} />
            </View>
                <View style={styles.textInputStyle}>
                <TextInput
                    placeholder={props.placeHolder}
                    fontSize={props.fontSize}
                    placeholderTextColor={Colors.grayText}
                    fontSize={16}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    textInputView:
    {
        height: 45,
        width: '100%',
        backgroundColor: Colors.white,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Colors.white,
        flexDirection: 'row',
       marginTop:10

    },

    iconView:
    {
        width: '15%',
        height: 43,
        justifyContent: 'center',
        alignItems: 'center'
    },

    textInputStyle:
    {
        width: '85%',
        height: 43,
        justifyContent: 'center',

    },

    imageStyle:
    {
        height: 20,
        width: 20,
        resizeMode: 'contain'
    }

})
