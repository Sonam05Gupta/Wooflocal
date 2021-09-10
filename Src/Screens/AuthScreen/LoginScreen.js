import React from 'react'
import { StyleSheet, View, ImageBackground, TouchableOpacity, Text, Image, ImageStore } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Index } from '../../Assets/Index';
import ButtonCustomComponent from '../../Component/CustomComponent/ButtonCustomComponent';
import TextInputCustomComponent from '../../Component/CustomComponent/TextInputCustomComponent';


const { Images, Strings, Colors } = Index;



export default function LoginScreen() {
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
                        <TextInputCustomComponent
                            user_Icon={Images.user_Icon}
                            placeHolder={Strings.email}

                        />

                        <TextInputCustomComponent
                            user_Icon={Images.lock_Icon}
                            placeHolder={Strings.password}

                        />

                        <ButtonCustomComponent
                            btnText={'LOGIN'}
                            navigation={'AuthScreen'}
                        />

                        <TouchableOpacity activeOpacity={0.8} style={styles.forgot_Details_View}>
                            <Text style={styles.forgot_Detail_Text}>Forgot details?</Text>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.8} style={styles.google_Sigin_In_View}>
                            <Image source={Images.icon_Google} style={styles.iconStyle} />
                        </TouchableOpacity>

                        <ButtonCustomComponent
                            btnText={'NEW HERE? REGISTER'}

                        />

                        <ButtonCustomComponent
                            btnText={'NEW HERE? REGISTER'}

                        />
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

    forgot_Details_View: { marginVertical: 12, alignSelf: 'center', justifyContent: 'center', borderBottomWidth: 1, borderBottomColor: Colors.black },

    forgot_Detail_Text: { color: Colors.black },

    google_Sigin_In_View: { height: 50, width: 50, borderRadius: 50 / 2, backgroundColor: Colors.white, justifyContent: 'center', alignSelf: 'center', alignItems: 'center' },

    iconStyle: { height: 22, width: 22, resizeMode: 'contain' }

})
