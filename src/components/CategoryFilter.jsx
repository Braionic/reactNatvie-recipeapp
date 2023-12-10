import { View, Text, ScrollView } from "react-native";
import React from "react";
import { categories, colors } from "../Constants";
export default function CategoryFilter() {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((item, index) => (
          <View
            key={item.id}
            style={{
              borderRadius: 6,
              backgroundColor: index === 0 ? "red" : "white",
              marginHorizontal: 15,
              padding: 15,
              shadowOffset: 5,
              shadowOpacity: 0.3,
              shadowRadius: 3,
              textShadowColor: "black",
            }}
          >
            <Text
              style={{
                color: index === 0 ? "white" : "black",
                fontSize: 15,
                fontWeight: "500",
              }}
            >
              {item.category}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
