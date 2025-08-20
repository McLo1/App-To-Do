import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomePageScreen from './src/pages/HomeScreen/index.js';
import AboutScreen from './src/pages/AboutScreen/index.js';
import SettingScreen from './src/pages/SettingsScreen/index.js';

const Tab = createBottomTabNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={HomePageScreen}/>
        <Tab.Screen name='About' component={AboutScreen}/>
        <Tab.Screen name='Settings' component={SettingScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
