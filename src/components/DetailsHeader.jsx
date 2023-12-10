import { View, Text } from 'react-native'
import React from 'react'
import { AntDesign, MaterialIcons } from '@expo/vector-icons';


export default function DetailsHeader({iconName, navigation, color}) {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginVertical: 20}}>
       <AntDesign onPress={()=> navigation.goBack()} name="arrowleft" size={30} color={color && 'white'} />
       <View style={{borderRadius: 8, borderWidth: 1, paddingHorizontal: 20, paddingVertical: 5, borderColor: 'gray'}}>
        <Text>Details</Text>
       </View>
       <MaterialIcons name="favorite-border" size={30} color={color && 'white'} />
    </View>
  )
}