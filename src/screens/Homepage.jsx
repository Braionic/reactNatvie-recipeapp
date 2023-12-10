import { View, Text, FlatList, Image, TouchableWithoutFeedback, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchBar from './SearchBar'
import { categories, recipeList } from '../Constants'
import CategoryFilter from '../components/CategoryFilter'
import Allrecipe from '../components/Allrecipe'
export default function Homepage({navigation}) {
  return (
    <SafeAreaView>
      <Header title={'Hi, John'} iconName={'bell'} />
      <SearchBar iconName={'search'} />
      <View style={{marginVertical: 20, marginHorizontal: 15}}>
        <Text style={{fontSize: 25, fontWeight: '700'}}>Categories</Text>
      </View>
      <View>
        <CategoryFilter data={categories} />
      </View>
      <View style={{marginVertical: 20, marginHorizontal: 15}}>
      <Text style={{fontSize: 25, fontWeight: '700'}}>
            Recipes
        </Text>
        
      </View>
   
   <Allrecipe data={recipeList} navigation={navigation} />
   
 
   
     
    
     
     
     
     
      
    </SafeAreaView>
  )
}