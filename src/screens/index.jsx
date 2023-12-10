import { View, Text, Image, Dimensions, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Welcomescreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Image resizeMode='contain' style={{width: Dimensions.get('screen').width, height: 400}} source={require('../../assets/images/welcome1.png')} />
      <View><Text style={{fontSize: 20, textAlign: 'center', color: 'red', fontWeight: 400}}>40K Premium Recipes</Text></View>
      <View><Text style={{fontSize: 32, textAlign: 'center', fontWeight: 'bold', marginBottom: 10}}>Cook Like A Chef</Text></View>
      <TouchableOpacity onPress={()=> navigation.push('homepage')} style={{backgroundColor: 'red', paddingVertical: 8, marginHorizontal: 25, marginVertical: 25, paddingVertical: 25, alignItems: 'center', borderRadius: 15}}>
        <Text style={{color: 'white', fontWeight: '700'}}>Let's Go</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}