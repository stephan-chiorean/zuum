import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { CheckCircleFilled } from '@ant-design/icons';
import { Icon, Image } from 'react-native-elements';

const ConfirmationCard = () => {
  return (
    <View style={tw`bg-[#DEF0EE] h-full flex justify-between pb-10`}>
      <View style={tw`flex-row items-center mx-auto`}>
        <Text style={tw`text-xl text-center font-bold`}>
          Ride Confirmed
        </Text>
        <Icon name='checkmark-circle' type='ionicon' color='green' size={30} style={tw`px-1`}/>
      </View>
      <View style={tw`flex-row justify-center`}>
        <View style={tw`flex`}>
          <Image
            style={[
              tw`rounded-full mx-auto`,
              { width: 170, height: 170, resizeMode: 'contain' },
            ]}
            source={require('../assets/profile2.jpg')}
          />
          <View style={tw`flex-row py-5 mx-auto`}>
            <Icon name='star' type='ionicon' color='#F7AB0A' size={30} />
            <Icon name='star' type='ionicon' color='#F7AB0A' size={30} />
            <Icon name='star' type='ionicon' color='#F7AB0A' size={30} />
            <Icon name='star' type='ionicon' color='#F7AB0A' size={30} />
            <Icon name='star' type='ionicon' color='#F7AB0A' size={30} />
          </View>
          <View style={tw`flex-row pb-5 mx-auto`}>
            <Icon name='chatbubble' type='ionicon' color='gray' size={30} style={tw`px-3`}/>
            <Icon name='call' type='ionicon' color='gray' size={30} style={tw`px-3`}/>
            <Icon name='warning' type='ionicon' color='gray' size={30} style={tw`px-3`}/>
          </View>
        </View>
      </View>
      <View>
        <Text style={tw`text-center text-lg font-semibold`}>Your Zuum is with Ahsan Ali</Text>
      </View>
    </View>
  );
};

export default ConfirmationCard;

const styles = StyleSheet.create({});
