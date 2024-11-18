import { Slot, Stack } from "expo-router";
import React from 'react'

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="(drawer)" options={{
        headerShown: false,
      }}/>
      <Stack.Screen name="(modal)/settings" options={{
          headerTitle: "Settings",
          presentation: "modal",
          headerShadowVisible: false,
      }}/>
    </Stack>
  )
}

export default Layout;