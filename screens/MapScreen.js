import { StyleSheet, Text, View, Image } from "react-native";
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { Dimensions } from 'react-native';
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { addFavoriteCity } from '../reducers/user';


export default function MapScreen({navigation}) {
    const favoriteCities = useSelector((state) => state.user.cities)
    const [ RTLocation, setRTLocation ]= useState({
        latitude: 0, longitude: 0
    })

    const citiesAdded = favoriteCities.map((element, index) => {
        return <Marker key={index} title={element.city} pinColor={"#fecb2d"} coordinate={{ 
                latitude: element.latitude, longitude: element.longitude 
            }} />
    })

    useEffect(() => {
        (async () => {
            const { status } = await Location.requestForegroundPermissionsAsync();

            if (status === 'granted') {
                Location.watchPositionAsync({ distanceInterval: 10 },
                    (location) => {
                        setRTLocation({latitude: location.coords.latitude, longitude: location.coords.longitude});
                    });
            };
        })();
    }, []);

    return(
        <MapView region={{
            latitude: RTLocation.latitude,
            longitude: RTLocation.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        }} style={styles.map}>
            <Marker title={"my location"} pinColor={"#fecb2d"} coordinate={{ 
                latitude: RTLocation.latitude, longitude: RTLocation.longitude 
            }} />
            {citiesAdded}
        </MapView>
    );
};

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
});