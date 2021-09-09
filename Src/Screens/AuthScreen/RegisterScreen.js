import React from 'react'
import { StyleSheet, Text, View  ,ImageBackground , TouchableOpacity , Image} from 'react-native'
import { Index } from '../../Assets/Index';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import TextInputCustomComponent from '../../Component/CustomComponent/TextInputCustomComponent';
import ButtonCustomComponent from '../../Component/CustomComponent/ButtonCustomComponent';

const { Images, Strings , Colors} = Index;

export default function RegisterScreen() {
    return (
        <View style={styles.container}>
        <ImageBackground source={Images.imageBackgroundLogin} style={styles.image}>
            <KeyboardAwareScrollView
                contentContainerStyle={{
                    flex: 1,
                    marginHorizontal: 20
                }}
            >
                <View style={styles.header}>
                  
                </View>
                <View style={styles.footer}>

                    <View style={styles.new_Account_Heading}>

                    <Text style={styles.new_Account_Text}>CREATE A NEW ACCOUNT</Text>
                    </View>
                    <TextInputCustomComponent
                        user_Icon={Images.user_Icon}
                        placeHolder={Strings.email}

                    />

                    <TextInputCustomComponent
                        user_Icon={Images.lock_Icon}
                        placeHolder={Strings.password}

                    />

                   
                    <ButtonCustomComponent
                        btnText={'REGISTRATION'}
                    />

                    <View style={styles.Log_IN_View}>
                        <View>
                           <Text style={styles.alreadyText}> You have already account ? </Text>
                        </View>
                        <View style={styles.loginView}>
                           <Text style={styles.loginText}>LOGIN</Text> 
                        </View>
                    </View>
                </View>



            </KeyboardAwareScrollView>
        </ImageBackground>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },

    header:
        { flex: 0.4 },

    footer:
        { flex: 0.6 },

        new_Account_Heading:{
            justifyContent:'center',alignSelf:'center'
        },

        new_Account_Text:{
            color:Colors.black,
            fontWeight:'bold'
        },


    Log_IN_View:
    {
        
        flexDirection:'row',
        marginTop:15,
        alignSelf:'center',
        alignItems:'center'
    },

    alreadyText:{
        color:Colors.black,
        fontSize:13
    },
    loginText:{
        color:Colors.black,
        fontSize:16
    },
    loginView:
    {
        borderBottomColor:Colors.black,
        borderBottomWidth:1
    },
    
})
