import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { useFonts } from 'expo-font';

import { RegistrationScreen} from './components/Screens/RegistrationScreen/RegistrationScreen'
import { LoginScreen } from './components/Screens/LoginScreen/LoginScreen';

export default function App() {

  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  });
  
  if (!fontsLoaded) {
    return null;
  }
  const AuthStack = createStackNavigator();

  return (
    <>
      <NavigationContainer>
        <AuthStack.Navigator initialRouteName="Registration">
          <AuthStack.Screen options={{ headerShown: false }} name="Registration" component={RegistrationScreen} />
          <AuthStack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        </AuthStack.Navigator>
      </NavigationContainer>
    </>
  );
}