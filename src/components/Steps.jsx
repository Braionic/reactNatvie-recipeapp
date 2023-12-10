import { View, Text, FlatList } from 'react-native'
import React from 'react'

export default function Steps({data}) {
  return (
    <View style={{padding: 15}}>
      <FlatList data={data} keyExtractor={(item, index)=> index} renderItem={({item, index})=> <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize: 18}}>{`${index + 1})`}</Text><Text style={{fontSize: 18, padding: 4, fontWeight: 500}}>{item}</Text>
      
        </View>} />
    </View>
  )
}