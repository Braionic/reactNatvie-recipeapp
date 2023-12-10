import { View, Text } from 'react-native'
import React from 'react'
import { EvilIcons } from '@expo/vector-icons';
export default function Header({iconName, title}) {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginVertical: 20}}>
      <Text style={{fontSize: 25, fontWeight: 'bold'}}>{title}</Text>
      <EvilIcons style={{fontSize: 35}} name={iconName}  color="red" />
    </View>
  )
}