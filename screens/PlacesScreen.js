import { StyleSheet, Text ,TextInput, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { addFavoriteCity, deleteCity } from '../reducers/user';

export default function PlacesScreen({}) {
    const dispatch = useDispatch();
    const username = useSelector((state) => state.user.username);
    const citiesData = useSelector((state) => state.user.cities);

    const [ newCity, setNewCity ] = useState([]);
    const [ longitude, setLongitude ] = useState("");
    const [ latitude, setLatitute ] = useState("");

    const addCity = async() => {
        const response = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${newCity}`);
        const data = await response.json();

        // Data fetched
        const lon = data.features[0].geometry.coordinates[0];
        const lat = data.features[0].geometry.coordinates[1];


        setLongitude(lon);
        setLatitute(lat);


        dispatch(addFavoriteCity({
            city: newCity,
            longitude: lon,
            latitude: lat
        }));

        // Reset the input
        setNewCity("");
    };

    const trashBtnToDelete = (cityToDelete) => {
        dispatch(deleteCity(cityToDelete));
    };

    const cities  = citiesData.map((element, index) => {
        return (
            <View key= {index} style={styles.cardContainer}>
                <View style={styles.cityInfo}>
                    <View style={styles.cityName}>
                        <Text style={styles.cityNameTxt}>{element.city}</Text>
                    </View>
                    <View style={styles.coordinates}>
                        <View style={styles.cityLatitude}><Text>LAT: {element.latitude}</Text></View>
                        <View style={styles.cityLongitude}><Text>LON: {element.longitude}</Text></View>
                    </View>
                </View>
                <View style={styles.deleteBtn}>
                    <Text><FontAwesome style={styles.trash} name={"trash-o"} color={'rgba(236,110,92,255)'} onPress={() => trashBtnToDelete(element.city)}/></Text>
                    </View>
            </View>
        );
    })

    return(
        <View style={styles.mainDiv}>
            <View style={styles.title}>
                <Text style={styles.txtPlaces}>{username}'s favorite places</Text>
            </View>
            <View style={styles.containerAdd}>
                <View style={styles.favoriteCitiesAdd}>
                    <TextInput style={styles.inputedTxt} placeholder="New city" onChangeText={value => setNewCity(value)} value={newCity} clearButtonMode="always" />
                    <TouchableOpacity style={styles.btnAdd} onPress={() => addCity()}><Text style={styles.btnTxt}>Add</Text></TouchableOpacity>
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