import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TaskListScreen from "./src/screens/TaskListScreen";
import SignInScreen  from "./src/screens/SignInScreen";
import SignUpScreen  from "./src/screens/SignUpScreen";

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  Tasks: { loggedUser: any };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tasks"
          component={TaskListScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}