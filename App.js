import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcomescreen from './src/screens';
import Homepage from './src/screens/Homepage';
import RecipeDetails from './src/screens/RecipeDetails';

export default function App() {
  const Stack = createNativeStackNavigator();
    
  function HomeStack(){
    return (
      <Stack.Navigator>
        <Stack.Screen options={{headerShadowVisible: false, title: ''}} name="index" component={Welcomescreen} />
        <Stack.Screen options={{headerShown: false}}  name="homepage" component={Homepage} />
        <Stack.Screen options={{headerShown: false, cardStyle: {backgroundColor: 'red'}}}  name="recipedetails" component={RecipeDetails} />
      </Stack.Navigator>
    )
  }
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
