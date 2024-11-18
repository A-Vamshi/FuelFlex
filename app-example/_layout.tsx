import { router, Slot, SplashScreen, Stack, useSegments } from "expo-router";
import { ClerkProvider, useAuth } from "@clerk/clerk-expo";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as SecureStore from "expo-secure-store";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { StatusBar } from "expo-status-bar";


const CLERK_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY as string;
const OPEN_API_KEY = process.env.OPENAI_API_KEY as string


const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

SplashScreen.preventAutoHideAsync(); 
 
const InitialLayout = () => {
  const {isLoaded, isSignedIn } = useAuth();
  const segments  = useSegments();

  useEffect(() => {
    if (!loaded) return;
    const inAuth = segments[0] == "(auth)";
    console.log("useEffect inAuth[(auth)/_layout.jsx] isSignedIn: ", isSignedIn);
    console.log("useEffect inAuth[(auth)/_layout.jsx] inAuth: ", inAuth);

    if (isSignedIn && !inAuth) {
      router.replace("/(auth)/(drawer)/(chat)/new");
      // router.replace("/(tabs)/chat");
    } else if (!isSignedIn && inAuth) {
      router.replace("/");
    }
  }, [isSignedIn])

  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf")
  })
  useEffect(() => {
    if (error) throw error;
  }, [error]);
  useEffect(() => {
    if (loaded) SplashScreen.hideAsync();
  }, [loaded]);

  if (!loaded || !isLoaded) {
    return (
      <Slot />
    )
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false}}/>
      <Stack.Screen name="login" options={{
        presentation: "transparentModal",
        headerShown: false,
      }}/>
      <Stack.Screen name="(auth)" options={{headerShown: false}}/>
    </Stack>
  );
}

const RootLayout = () => {
  return (
    <ClerkProvider publishableKey={CLERK_KEY} tokenCache={tokenCache}>
      <GestureHandlerRootView>
        <InitialLayout />
      </GestureHandlerRootView>
    </ClerkProvider>
  )
}
export default RootLayout;