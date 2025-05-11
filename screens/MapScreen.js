import { StyleSheet, Text, View, Image } from "react-native";

export default function MapScreen({navigation}) {
    return(
        <View style={styles.container}>
            <Image style={styles.mapImg} source={require('../assets/map.jpg')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    mapImg: {
        height: "100%",
        width: '100%'
    },
});