import { ContextProvider } from "./components/Context/Context";
import Conversation from "./components/Conversation/Conversation";
import Channels from "./components/Channels/Channels";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <ContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            component={Channels}
            name="Channels"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            component={Conversation}
            name="Conversation"
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
}
