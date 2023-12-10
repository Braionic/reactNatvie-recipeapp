import { View, Text, FlatList } from 'react-native'
import React from 'react'

export default function Ingredients({data}) {
  return (
    <View style={{padding: 15}}>
      <FlatList data={data} renderItem={({item})=> <View>
        <Text style={{fontSize: 18, padding: 4, fontWeight: 500}}>{`\u25cf ${item}`}</Text>
      
        </View>} />
    </View>
  )
}