import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import DetailsHeader from "../components/DetailsHeader";
import { StatusBar } from "expo-status-bar";
import { colors } from "../Constants";
import Ingredients from "./Ingredients";
import Steps from "../components/Steps";

export default function RecipeDetails({ route, navigation }) {
  console.log(route.params.item.description);
  const { steps, description, color, image, name, time, difficulty, calories, ingredients} = route.params.item;
  return (
    <View style={{ flex: 1, paddingTop: 30, backgroundColor: color }}>
      <DetailsHeader color={color} iconName={"arrowleft"} navigation={navigation} />
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          marginTop: 150,
          borderTopLeftRadius: 70,
          borderTopRightRadius: 70,
        }}
      >
        <View style={{ position: "absolute", top: -100, left: 90 }}>
          <Image
            source={image}
            resizeMode="cover"
            style={{ width: 230, height: 230 }}
          />
        </View>
        <View style={{ marginTop: 120, paddingHorizontal: 15 }}>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 30,
              marginVertical: 10,
            }}
          >
            {name}
          </Text>
          
          
        </View>
        <ScrollView style={{marginBottom: 30}}>
        <Text style={{ fontSize: 18, paddingHorizontal: 15 }}>{description}</Text>
        <View style={{ flexDirection: "row", justifyContent: "center", marginVertical: 20 }}>
          <View style={{ backgroundColor: colors.COLOR_PRIMARY, padding: 20, borderRadius: 9 }}>
            <Text style={{fontSize: 50}}>⏱</Text>
            <Text style={{ fontSize: 16}}>{time}</Text>
          </View>
          <View style={{ backgroundColor: 'skyblue', padding: 20, borderRadius: 9, marginHorizontal: 30 }}>
            <Text style={{fontSize: 50}}>🍜</Text>
            <Text style={{ fontSize: 16}}>{difficulty}</Text>
          </View>
          <View style={{ backgroundColor: 'brown', padding: 20, borderRadius: 9 }}>
            <Text style={{fontSize: 50}}>🏃‍♂️</Text>
            <Text style={{ fontSize: 16, color: 'white'}}>{calories}</Text>
          </View>
        </View>
        <View
        style={{paddingHorizontal: 15, marginBottom: 20}}>
           <Text style={{fontSize: 20, fontWeight: 600}}>Ingredients</Text> 
        </View>
        <Ingredients data={ingredients} />
        <View
        style={{paddingHorizontal: 15, marginBottom: 20}}>
           <Text style={{fontSize: 20, fontWeight: 600}}>Steps</Text> 
        </View>
        <Steps data={steps} />
        </ScrollView>
      </View>
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
