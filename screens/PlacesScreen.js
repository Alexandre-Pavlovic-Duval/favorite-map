import { StyleSheet, Text ,TextInput, TouchableOpacity, View } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const placesData = [
    { name: 'Paris', latitude: 48.859, longitude: 2.347 },
    { name: 'Lyon', latitude: 45.758, longitude: 4.835 },
    { name: 'Marseille', latitude: 43.282, longitude: 5.405 },
];

export default function PlacesScreen({}) {

    const cities  = placesData.map((element, index) => {
        return (
            <View key= {index} style={styles.cardContainer}>
                <View style={styles.cityInfo}>
                    <View style={styles.cityName}><Text style={styles.cityNameTxt}>{element.name}</Text></View>
                    <View style={styles.coordinates}>
                        <View style={styles.cityLatitude}><Text>LAT: {element.latitude}</Text></View>
                        <View style={styles.cityLongitude}><Text>LON: {element.longitude}</Text></View>
                    </View>
                </View>
                <View style={styles.deleteBtn}>
                    <FontAwesome style={styles.trash} name={"trash-o"} color={'rgba(236,110,92,255)'} />;
                    </View>
            </View>
        );
    })

    return(
        <View style={styles.mainDiv}>
            <View style={styles.title}>
                <Text style={styles.txtPlaces}><Text>'s favorite places</Text></Text></View>
            <View style={styles.containerAdd}>
                <View style={styles.favoriteCitiesAdd}>
                    <TextInput style={styles.inputedTxt} placeholder="New city" />
                    <TouchableOpacity style={styles.btnAdd}><Text style={styles.btnTxt}>Add</Text></TouchableOpacity>
                </View>
            </View>
            <View style={styles.citiesContainer}>
                {cities}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainDiv: {
        flex: 1,
        backgroundColor: '#rgba(242,242,242,255)',
    },

    title: {

        height: '12%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 25
    },

    txtPlaces: {
        fontWeight: 600,
        fontSize: 18
    },

    containerAdd: {
        height: "12%",
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },

    favoriteCitiesAdd: {
        height: '100%',
        width: '83%',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,
        borderRadius: 12,
        backgroundColor: 'white'
    },

    inputedTxt: {
        width: '55%',
        borderBottomWidth: 2,
        borderBottomColor: 'rgba(236,110,92,255)',
    },  

    btnAdd: {
        width: '21%',
        alignItems: 'center',
        backgroundColor: 'rgba(236,110,92,255)',
        borderRadius: 10,
        padding: 2
    },

    btnTxt: {
        color: 'white',
        padding: 4
    },

    citiesContainer: {
        height: '73%',
        alignItems: 'center',
        gap: 15
    },

    cardContainer: {
        flexDirection: 'row',
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 20
    },

    cityInfo: {
        width: '80%',
    },

    cityName: {
        marginLeft: 20,
    },

    cityNameTxt: {
        fontSize: 14,
        fontWeight: 600
    },

    coordinates: {
        flexDirection: 'row',
    },

    cityLatitude: {
        marginLeft: 20,
    },

    cityLongitude: {
        marginLeft: 20,
    },

    deleteBtn: {
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    trash: {
        fontSize: 20
    },

})