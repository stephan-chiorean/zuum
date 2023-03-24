import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity, FlatList, Image } from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../slices/navSlice';

const data = [
    {
        id: "Uber-X-123",
        title: "ZuumX",
        multiplier: 1,
        image: "https://links.papareact.com/3pn"
    },
    {
        id: "Uber-XL-456",
        title: "ZuumXL",
        multiplier: 1.2,
        image: "https://links.papareact.com/5w8"
    },
    {
        id: "Uber-LUX-789",
        title: "ZuumLUX",
        multiplier: 1.75,
        image: "https://links.papareact.com/7pf"
    },
]

const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {
    const navigation = useNavigation();
    const [selected, setSelected] = useState(null);
    const travelTimeInformation = useSelector(selectTravelTimeInformation)
    console.log("WILL THIS PRINT AT ALL", travelTimeInformation)
  return (
    <SafeAreaView style={tw`bg-[#DEF0EE] flex-grow`}>
      <View>
        <TouchableOpacity style={tw`absolute top-3 left-5 p-3 rounded-full z-50`}
        onPress={() => navigation.navigate("NavigateCard")}
        >
            <Icon
            name="chevron-left"
            type="fontawesome"
            />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>Select a Ride - {travelTimeInformation?.distance.text}</Text>
      </View>
      <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={({item: {id, title, multiplier, image}, item}) => (
        <TouchableOpacity 
        onPress={()=> setSelected(item)}
        
        style={tw`flex-row items-center justify-between px-10 ${id === selected?.id && "bg-[#FF5757]"}`}>
            <Image
            style={{
                width:100,
                height:100,
                resizeMode: "contain",
            }}
            source={{uri: image}}
            />
            <View style={tw`-ml-6`}>
                <Text style={tw`text-xl font-semibold`}>
                    {title}
                </Text>
                <Text>{travelTimeInformation?.duration.text}</Text>
            </View>
            <Text style={tw`text-xl`}>
                {new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                }).format(
                    (travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * multiplier)/100
                )}
            </Text>
        </TouchableOpacity>
      )}
      />

      <View style={tw`mt-auto border-t border-gray-200`}>
        <TouchableOpacity 
        onPress={() => navigation.navigate('ConfirmationCard')}
        disabled={!selected}
        style={tw`bg-[#208695] py-3 m-3 ${!selected && "bg-gray-300"}`}>
            <Text style={tw`text-center text-white font-semibold text-xl`}>Select {selected?.title} </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
