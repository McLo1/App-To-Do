import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomePageScreen from './src/pages/HomeScreen/index.js';
import AboutScreen from './src/pages/AboutScreen/index.js';
import SettingScreen from './src/pages/SettingsScreen/index.js';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home-outline';
            } else if (route.name === 'About') {
              iconName = 'information-circle-outline';
            }
            else if(route.name === 'Settings') {
              iconName = 'settings-outline'
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name='Home' component={HomePageScreen} />
        <Tab.Screen name='About' component={AboutScreen} />
        <Tab.Screen name='Settings' component={SettingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
