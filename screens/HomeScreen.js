import { TouchableOpacity, StyleSheet, Text, View, TextInput, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { useDispatch } from 'react-redux';
import { addUserName } from '../reducers/user'
import { useState } from 'react';

export default function HomeScreen({ navigation }) {
    const dispatch = useDispatch();
    const [ username, setUsername ] = useState("");

    const handlePress = () =>{
        dispatch(addUserName(username))
        navigation.navigate('TabNavigator', {screen: 'Map'})
    };

 return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.mainDiv}>
            <View style={styles.topDiv}>
                <Image style={styles.homeImg} source={require('../assets/home-image.jpg')}/>
            </View>
            <View style={styles.bottomDiv}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Welcome to Locapic</Text>
                </View>
                <View style={styles.inputTextContainer}>
                    <TextInput style={styles.inputText} placeholder="Nickname" onChangeText={(value) => setUsername(value)}/>
                </View>
                <View style={styles.mapBtnContainer}>
                    <TouchableOpacity style={styles.mapBtn} onPress={() => handlePress()}>
                        <Text style={styles.mapBtnText} >Go to map</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </KeyboardAvoidingView>
 );
}

const styles = StyleSheet.create({
    mainDiv: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 20
    },

    topDiv:{
        height: '60%',
        width: "100%",
        justifyContent: "flex-end",
    },

    homeImg: {
        height: '70%',
        width: '100%',
    },

    bottomDiv:{
        height: '40%',
        width: "100%",
        gap: 20
    },

    titleContainer: {
        marginLeft: 40,
    },

    title: {
        fontFamily: 'Arial, sans-serif',
        fontSize: 47,
        fontWeight: 600,
    },

    inputTextContainer: {
        height: 37,
        marginLeft: 40,
    },

    inputText: {
        borderBottomWidth: 2,
        borderBottomColor: 'rgba(236,110,92,255)',
        height: '100%',
        width: '85%',
    },
    
    mapBtnContainer: {
        height: 50,
        width: '80%',
        marginLeft: 40,
        marginTop: 13,
    },

    mapBtn: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(236,110,92,255)',
        borderRadius: 10,
    },

    mapBtnText: {
        color: 'white',
        fontWeight: 600,
    },
  });