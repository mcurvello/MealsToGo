import React from "react";
import { StatusBar } from "expo-status-bar";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { ThemeProvider } from "styled-components/native";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurantes.context";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import { SafeArea } from "./src/components/utility/safe-area.component";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};
const MapScreen = () => {
  return (
    <SafeArea>
      <Text>Map</Text>
    </SafeArea>
  );
};

const SettingsScreen = () => {
  return (
    <SafeArea>
      <Text>Settings</Text>
    </SafeArea>
  );
};
export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsContextProvider>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={{
                tabBarActiveTintColor: "tomato",
                tabBarInactiveTintColor: "gray",
              }}
            >
              <Tab.Screen
                name="Restaurants"
                component={RestaurantsScreen}
                options={{
                  tabBarLabel: "Home",
                  tabBarIcon: ({ color, size }) => (
                    <Ionicons
                      name={TAB_ICON.Restaurants}
                      color={color}
                      size={size}
                    />
                  ),
                }}
              />
              <Tab.Screen
                name="Map"
                component={MapScreen}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <Ionicons name={TAB_ICON.Map} color={color} size={size} />
                  ),
                }}
              />
              <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <Ionicons
                      name={TAB_ICON.Settings}
                      color={color}
                      size={size}
                    />
                  ),
                }}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </RestaurantsContextProvider>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
