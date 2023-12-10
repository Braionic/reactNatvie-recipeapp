import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';

export default function SearchBar({iconName}) {
  return (
    <View style={{position: 'relative'}}>
        <TextInput style={{shadowOffset: 3, shadowOpacity: 0.3, shadowRadius: 5, textShadowColor: 'black', backgroundColor: 'white', paddingLeft: 40, paddingVertical: 15, marginHorizontal: 15}} placeholder='enter your fav recipe' />
        <FontAwesome style={{position: 'absolute', left: 20, top: 10, flexDirection: 'row'}} name={iconName} size={25} color="red" />
      
    </View>
  )
}