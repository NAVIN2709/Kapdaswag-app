import { Stack } from "expo-router";
import "./global.css"
import { StatusBar } from 'react-native';

export default function RootLayout() {
  return <>
  <StatusBar barStyle="dark-content" backgroundColor="transparent" />
  <Stack >
    <Stack.Screen name="(tabs)"
      options={{
        headerShown: false,
      }} />
  </Stack>
  </>;
}
