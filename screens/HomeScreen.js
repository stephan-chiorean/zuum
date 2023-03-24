import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from "@env";
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import NavFavorites from '../components/NavFavorites';


const HomeScreen = () => {
    const dispatch = useDispatch();
  return (
    <SafeAreaView style={tw`bg-[#DEF0EE] h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 150,
            height: 150,
            resizeMode: 'contain',
          }}
          source={require('../assets/logo.png')}
        />
        <GooglePlacesAutocomplete
        placeholder="Where From?"
        styles={{
            container: {
                flex:0,

            },
            textInput: {
                fontSize:18,
            },
        }}
        onPress={(data, details=null)=> {
            dispatch(setOrigin({
                location: details.geometry.location,
                description: data.description,
            }))

            dispatch(setDestination(null))
        }}
        fetchDetails={true}
        returnKeyType={"search"}
        enablePoweredByContainer={false}
        minLength={2}
        query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en'
        }}
        nearbyPlacesAPI='GooglePlacesSearch'
        debounce={400}
        />
        <NavOptions/>
        <NavFavorites/>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    color: 'blue',
  },
});
