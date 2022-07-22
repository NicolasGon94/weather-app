import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './screens/Home';import { Detail } from './screens/Detail';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: '', headerTransparent: true }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{ title: '', headerTransparent: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
