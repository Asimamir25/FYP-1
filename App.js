import { StyleSheet, Text, View } from "react-native";
import EarnMoney from "./Component/EarnMoney";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import New from "./Component/New";
import MyTask from "./Component/MyTask";
import PostTask from "./Component/PostTask";
import Message from "./Component/Message";
import "react-native-gesture-handler";
import Work from "./Component/Work";
import Pg2 from "./Component/Pg2";

import Feather from "react-native-vector-icons/Feather";

const App = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  const HomeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="First Screen"
          component={EarnMoney}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="New"
          component={New}
          // options={({ route }) => ({
          //   title: route.params?.title,
          // })}
        />
        <Stack.Screen
          name="Work"
          component={Work}
          // options={({ route }) => ({
          //   title: route.params?.title,
          // })}
        />
        <Stack.Screen
          name="Pg2"
          component={Pg2}
          // options={({ route }) => ({
          //   title: route.params?.title,
          // })}
        />
      </Stack.Navigator>
    );
  };
  return (
    <NavigationContainer style={styles.con}>
      <Tab.Navigator
        initialRouteName="EarnMoney"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "EarnMoney") {
              iconName = focused ? "search" : "search";
            } else if (route.name === "PostTask") {
              iconName = focused
                ? "ellipsis-vertical-outline"
                : "ellipsis-vertical-outline";
            } else if (route.name === "MyTask") {
              iconName = focused ? "person-outline" : "person-outline";
            } else if (route.name === "Message") {
              iconName = focused ? "person-outline" : "person-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "green",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="EarnMoney"
          component={HomeStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen name="PostTask" component={PostTask} />
        <Tab.Screen name="MyTask" component={MyTask} />
        <Tab.Screen name="Message" component={Message} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  con: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
