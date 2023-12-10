import { View, Text, FlatList, Image, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'

export default function Allrecipe({data, navigation}) {
  return (
    <View style={{height: 550}}>
      <FlatList showsVerticalScrollIndicator={false} keyExtractor={(item)=>item.id} data={data} columnWrapperStyle={{justifyContent: 'space-between'}}  numColumns={2} renderItem={(({item})=>(
        <Pressable onPress={()=> navigation.push('recipedetails', {item: item})}>
            <View style={{backgroundColor: 'white', marginHorizontal: 10, marginVertical: 20, borderRadius: 8, padding: 15, flex: 1}}>
            <Image resizeMode='center' style={{width: 150, height: 150}} source={item.image} />
            <View><Text style={{textAlign: 'center', marginVertical: 15}}>{item.name}</Text></View>
        </View>
        </Pressable>
      ))} />
      </View>
    
  )
}