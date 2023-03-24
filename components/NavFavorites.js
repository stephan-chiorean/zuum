import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { Icon } from 'react-native-elements';
import tw from 'twrnc';

const data = [
  {
    id: '123',
    icon: 'home',
    location: 'Home',
    destination: '10661 SE 25th St, Bellevue, WA',
  },
  {
    id: '456',
    icon: 'briefcase',
    location: 'Work',
    destination: 'Bellevue Square, Bellevue, WA',
  },
  {
    id: '656',
    icon: 'airplane',
    location: 'Airport',
    destination: 'SeaTac Airport, Tacoma, WA',
  },
  {
    id: '767',
    icon: 'barbell',
    location: 'Gym',
    destination: 'Bellevue Club, Bellevue, WA',
  },
];

const NavFavorites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View 
        style={[tw`bg-gray-200`, {height:1}]}
        />
      )}
      renderItem={({ item: {location, destination, icon} }) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
          <Icon
            style={tw`mr-4 rounded-full bg-[#208695] p-3`}
            name={icon}
            type='ionicon'
            color='white'
            size={18}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{location}</Text>
            <Text style={tw`text-gray-500`}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavorites;

const styles = StyleSheet.create({});
